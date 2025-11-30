import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"

import { Skills } from "@/components/skills"
import { SocialActivity } from "@/components/social-activity"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="social">
          <SocialActivity />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}
