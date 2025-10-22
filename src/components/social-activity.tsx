/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ContributionChart } from "@/components/charts/contribution-chart"
import { ActivityChart } from "@/components/charts/activity-chart"
import { Github, Linkedin, Users, GitCommit, Star, GitFork, Calendar, TrendingUp, Activity, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"

// Mock data - replace with real API calls
const mockGitHubData = {
  profile: {
    username: "yourusername",
    followers: 245,
    following: 89,
    publicRepos: 42,
    totalStars: 156,
    totalForks: 23
  },
  contributions: [
    { date: "2024-01-01", count: 3 },
    { date: "2024-01-02", count: 5 },
    { date: "2024-01-03", count: 2 },
    { date: "2024-01-04", count: 8 },
    { date: "2024-01-05", count: 1 },
    { date: "2024-01-06", count: 4 },
    { date: "2024-01-07", count: 6 }
  ],
  recentActivity: [
    { type: "push", repo: "portfolio-website", message: "Added new features", date: "2 hours ago" },
    { type: "star", repo: "react-components", message: "Starred repository", date: "1 day ago" },
    { type: "fork", repo: "ml-algorithms", message: "Forked repository", date: "2 days ago" }
  ]
}

const mockLinkedInData = {
  profile: {
    connections: 500,
    followers: 1200,
    posts: 45,
    engagement: 85
  },
  recentPosts: [
    { content: "Excited to share my latest project on IoT systems...", likes: 23, comments: 5, date: "1 day ago" },
    { content: "Just completed a course on Advanced Signal Processing...", likes: 18, comments: 3, date: "3 days ago" },
    { content: "Thoughts on the future of embedded systems...", likes: 31, comments: 8, date: "1 week ago" }
  ]
}



const ActivityCard = ({ icon: Icon, title, value, change, color }: any) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="p-4 rounded-lg bg-card border"
  >
    <div className="flex items-center justify-between mb-2">
      <Icon className={`h-5 w-5 ${color}`} />
      {change && (
        <Badge variant={change > 0 ? "default" : "secondary"} className="text-xs">
          {change > 0 ? "+" : ""}{change}%
        </Badge>
      )}
    </div>
    <div className="text-2xl font-bold mb-1">{value}</div>
    <div className="text-sm text-muted-foreground">{title}</div>
  </motion.div>
)

export function SocialActivity() {
  const [githubData, setGithubData] = useState(mockGitHubData)
  const [linkedinData, setLinkedinData] = useState(mockLinkedInData)
  const [loading, setLoading] = useState(false)

  // Simulate API calls
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      // Replace with real API calls
      setTimeout(() => {
        setGithubData(mockGitHubData)
        setLinkedinData(mockLinkedInData)
        setLoading(false)
      }, 1000)
    }
    fetchData()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Social <span className="text-primary">Activity</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay connected with my professional journey and open-source contributions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* GitHub Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-900 text-white">
                    <Github className="h-5 w-5" />
                  </div>
                  GitHub Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* GitHub Stats */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <ActivityCard
                    icon={Users}
                    title="Followers"
                    value={githubData.profile.followers}
                    change={12}
                    color="text-blue-500"
                  />
                  <ActivityCard
                    icon={GitCommit}
                    title="Repositories"
                    value={githubData.profile.publicRepos}
                    change={8}
                    color="text-green-500"
                  />
                  <ActivityCard
                    icon={Star}
                    title="Total Stars"
                    value={githubData.profile.totalStars}
                    change={15}
                    color="text-yellow-500"
                  />
                </div>

                {/* Contribution Heatmap */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Activity className="h-4 w-4" />
                    Recent Contributions
                  </h4>
                  <ContributionChart contributions={githubData.contributions} />
                  <p className="text-xs text-muted-foreground mt-2">
                    Last 7 days activity
                  </p>
                </div>

                {/* Recent Activity */}
                <div>
                  <h4 className="font-semibold mb-3">Recent Activity</h4>
                  <div className="space-y-3">
                    {githubData.recentActivity.map((activity, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <div className="p-1 rounded bg-primary/10">
                          {activity.type === 'push' && <GitCommit className="h-3 w-3 text-primary" />}
                          {activity.type === 'star' && <Star className="h-3 w-3 text-yellow-500" />}
                          {activity.type === 'fork' && <GitFork className="h-3 w-3 text-blue-500" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.repo}</p>
                          <p className="text-xs text-muted-foreground">{activity.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub Profile
                  <TrendingUp className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* LinkedIn Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white">
                    <Linkedin className="h-5 w-5" />
                  </div>
                  LinkedIn Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* LinkedIn Activity Chart */}
                <ActivityChart 
                  title="LinkedIn Metrics"
                  data={[
                    {
                      label: "Connections",
                      value: linkedinData.profile.connections,
                      color: "#0077B5",
                      icon: <Users className="h-4 w-4 text-blue-500" />
                    },
                    {
                      label: "Followers",
                      value: linkedinData.profile.followers,
                      color: "#00A0DC",
                      icon: <Users className="h-4 w-4 text-blue-400" />
                    },
                    {
                      label: "Posts",
                      value: linkedinData.profile.posts,
                      color: "#7B68EE",
                      icon: <Calendar className="h-4 w-4 text-purple-500" />
                    },
                    {
                      label: "Engagement",
                      value: linkedinData.profile.engagement,
                      color: "#FF6B35",
                      icon: <TrendingUp className="h-4 w-4 text-orange-500" />
                    }
                  ]}
                />

                {/* Recent Posts */}
                <div>
                  <h4 className="font-semibold mb-3">Recent Posts</h4>
                  <div className="space-y-4">
                    {linkedinData.recentPosts.map((post, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4 rounded-lg bg-muted/50 border"
                      >
                        <p className="text-sm mb-3 line-clamp-2">{post.content}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex gap-4">
                            <span>👍 {post.likes} likes</span>
                            <span>💬 {post.comments} comments</span>
                          </div>
                          <span>{post.date}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group">
                  <Linkedin className="mr-2 h-4 w-4" />
                  View LinkedIn Profile
                  <TrendingUp className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Combined Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Professional Network Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {githubData.profile.followers + linkedinData.profile.followers}
                  </div>
                  <div className="text-sm text-muted-foreground">Total Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {linkedinData.profile.connections}+
                  </div>
                  <div className="text-sm text-muted-foreground">Connections</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {githubData.profile.publicRepos}
                  </div>
                  <div className="text-sm text-muted-foreground">Open Source</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {linkedinData.profile.posts}
                  </div>
                  <div className="text-sm text-muted-foreground">Articles</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}