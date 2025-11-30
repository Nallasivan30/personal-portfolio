import { Navbar } from "@/components/navbar"
import { AboutHero } from "@/components/about-hero"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutHero />
        <ExperienceTimeline />
      </main>
      <Footer />
    </>
  )
}