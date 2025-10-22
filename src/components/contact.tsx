"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <header className="mb-8 md:mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <p className="text-muted-foreground mt-2">Have a project or want to say hi? Let’s talk.</p>
        </header>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault()
            alert("This is a demo form. Wire it to your backend.")
          }}
        >
          <Input aria-label="Your name" placeholder="Your name" className="sm:col-span-1" />
          <Input aria-label="Email address" type="email" placeholder="Email address" className="sm:col-span-1" />
          <Textarea aria-label="Message" placeholder="Message" className="sm:col-span-2 min-h-40" />
          <div className="sm:col-span-2 flex justify-end">
            <Button type="submit">Send message</Button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
