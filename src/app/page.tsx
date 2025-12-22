import Image from "next/image"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { SocialActivity } from "@/components/social-activity"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import {HorizontalScrollSection} from "@/components/heroScroll"
export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* FIXED BACKGROUND (Skills + Contact) */}
      <div className="fixed inset-0 -z-20">
        <Image
          src="/bgimage.jpg"
          alt="background"
          fill
          priority
          className="object-cover"
        />

        {/* optional dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="pt-16 relative z-10">
        <section id="home">
          <Hero />
        </section>
        <section id="horizontal-scroll">
          <HorizontalScrollSection />
        </section>
        <section id="projects">
          <Projects />
        </section>

        {/* Background visible here */}
        <section id="skills" className="bg-transparent">
          <Skills />
        </section>

        <section id="social">
          <SocialActivity />
        </section>

        {/* Same background continues */}
        <section id="contact" className="bg-transparent">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  )
}
