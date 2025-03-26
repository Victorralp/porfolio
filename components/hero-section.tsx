"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export default function HeroSection() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.setAttribute("data-text", nameRef.current.textContent || "")
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 cyberpunk-grid opacity-20"></div>

      <motion.div
        className="container mx-auto px-4 text-center z-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="text-neon-blue font-orbitron mb-4 tracking-widest" variants={item}>
          WELCOME TO MY PORTFOLIO
        </motion.p>

        <motion.h1
          ref={nameRef}
          className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 glitch-effect"
          variants={item}
          data-text="VICTOR RALPH"
        >
          VICTOR RALPH
        </motion.h1>

        <motion.div className="mb-8 max-w-2xl mx-auto" variants={item}>
          <h2 className="text-xl md:text-2xl font-orbitron">
            <span className="text-neon-purple">FULL-STACK</span> DEVELOPER &
            <span className="text-neon-red"> UI/UX</span> DESIGNER
          </h2>
        </motion.div>

        <motion.div variants={item}>
          <a
            href="#about"
            className="inline-block border border-neon-blue rounded-full p-3 animate-pulse-glow hover:scale-110 transition-transform duration-300"
          >
            <ArrowDown className="h-6 w-6 text-neon-blue" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

