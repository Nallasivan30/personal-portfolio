"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Zap, Mail, Github, Linkedin } from "lucide-react"
import { useState, useEffect } from "react"

const links = [
  { href: "/", label: "Home", icon: Code },
  { href: "/about", label: "About", icon: Zap },
  { href: "/gallery", label: "Gallery", icon: Code },
  { href: "/#projects", label: "Projects", icon: Zap },
  { href: "/#skills", label: "Skills", icon: Code },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled 
            ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-primary to-accent" 
          style={{ scaleX, transformOrigin: "left" }} 
        />
        
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="p-2 rounded-md bg-gradient-to-br from-primary/20 to-accent/20"
            >
              <Code className="h-5 w-5 text-primary" />
            </motion.div>
            <span className="font-bold text-lg">
              <span className="text-primary">ECE</span>
              <span className="text-accent">+</span>
              <span className="text-foreground">IT</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6">
              {links.map((link) => {
                const Icon = link.icon
                const active = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-accent/10 ${
                        active ? 'text-primary bg-primary/10' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <a href="mailto:nallasivan30@gmail.com" className="p-2 rounded-md hover:bg-accent/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </a>
                <a href="https://github.com/Nallasivan30" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-accent/10 transition-colors">
                  <Github className="h-4 w-4" />
                </a>
                <a href="https://www.linkedin.com/in/nallasivan-m/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-accent/10 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed right-0 top-0 z-50 h-full w-80 bg-card border-l shadow-xl md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b">
                  <span className="font-bold text-lg">
                    <span className="text-primary">ECE</span>
                    <span className="text-accent">+</span>
                    <span className="text-foreground">IT</span>
                  </span>
                  <Button variant="ghost" size="icon" onClick={closeMenu}>
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex-1 p-6">
                  <ul className="space-y-4">
                    {links.map((link, index) => {
                      const Icon = link.icon
                      const active = pathname === link.href
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={closeMenu}
                            className={`group flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                              active 
                                ? 'text-primary bg-primary/10 border border-primary/20' 
                                : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                            }`}
                          >
                            <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                            {link.label}
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                  
                  <div className="mt-8 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-4">Connect</p>
                    <div className="flex gap-3">
                      <a href="mailto:nallasivan30@gmail.com" className="p-3 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                        <Mail className="h-5 w-5" />
                      </a>
                      <a href="https://github.com/Nallasivan30" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/nallasivan-m/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-md bg-accent/10 hover:bg-accent/20 transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
