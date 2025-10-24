/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server'

const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'yourusername'
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

export async function GET() {
  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'Portfolio-App'
    }

    if (GITHUB_TOKEN) {
      headers['Authorization'] = `token ${GITHUB_TOKEN}`
    }

    const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 }
    })

    if (!userResponse.ok) {
      throw new Error('Failed to fetch GitHub user data')
    }

    const userData = await userResponse.json()

    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`, {
      headers,
      next: { revalidate: 3600 }
    })

    const reposData = await reposResponse.json()

    const totalStars = reposData.reduce((sum: number, repo: any) => sum + repo.stargazers_count, 0)
    const totalForks = reposData.reduce((sum: number, repo: any) => sum + repo.forks_count, 0)

    const eventsResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`, {
      headers,
      next: { revalidate: 1800 }
    })

    const eventsData = await eventsResponse.json()

    const recentActivity = eventsData.slice(0, 23).map((event: any) => ({
      type: event.type.toLowerCase().replace('event', ''),
      repo: event.repo?.name || 'Unknown',
      message: getEventMessage(event),
      date: new Date(event.created_at).toLocaleDateString()
    }))

    const contributions = generateMockContributions()

    const githubData = {
      profile: {
        username: userData.login,
        followers: userData.followers,
        following: userData.following,
        publicRepos: userData.public_repos,
        totalStars,
        totalForks
      },
      contributions,
      recentActivity,
      topRepos: reposData.slice(0, 5).map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        url: repo.html_url
      }))
    }

    return NextResponse.json(githubData)
  } catch (error) {
    console.error('GitHub API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch GitHub data' },
      { status: 500 }
    )
  }
}

function getEventMessage(event: any): string {
  switch (event.type) {
    case 'PushEvent':
      return `Pushed ${event.payload.commits?.length || 1} commit(s)`
    case 'WatchEvent':
      return 'Starred repository'
    case 'ForkEvent':
      return 'Forked repository'
    default:
      return event.type.replace('Event', '')
  }
}

function generateMockContributions() {
  const contributions = []
  const today = new Date()
  
  for (let i = 34; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    contributions.push({
      date: date.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 10)
    })
  }
  
  return contributions
}