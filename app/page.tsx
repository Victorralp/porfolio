"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Smooth scroll to section when hash changes
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <main className="relative">
      <ParticleBackground />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <HeroSection />

        <div ref={aboutRef} id="about">
          <AboutSection />
        </div>

        <div ref={projectsRef} id="projects">
          <ProjectsSection />
        </div>

        <div ref={skillsRef} id="skills">
          <SkillsSection />
        </div>

        <div ref={contactRef} id="contact">
          <ContactSection />
        </div>
      </motion.div>
    </main>
  )
}

