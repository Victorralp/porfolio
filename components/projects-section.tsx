"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Voicecraft",
    description: "Advanced text-to-speech web application with language detection and translation capabilities",
    tags: ["TypeScript", "Next.js", "AI", "Translation"],
    image: "/projects/voicecraft.svg",
    github: "https://github.com/Victorralp/voicecraft",
    demo: "#",
  },
  {
    id: 2,
    title: "Nigeria E-commerce Platform",
    description:
      "Modern Nigerian e-commerce platform with Paystack integration, SMS notifications, state-based shipping & USSD payments",
    tags: ["TypeScript", "Next.js", "Paystack", "SMS"],
    image: "/projects/ecommerce.svg",
    github: "https://github.com/Victorralp/nigeria-ecommerce-platform",
    demo: "#",
  },
  {
    id: 3,
    title: "TODO APP",
    description: "Flutter Todo App with Hive Storage for efficient local data management",
    tags: ["Dart", "Flutter", "Hive", "Mobile"],
    image: "/projects/todo.svg",
    github: "https://github.com/Victorralp/TODO_APP",
    demo: "#",
  },
  {
    id: 4,
    title: "Fitness App",
    description: "A simple yet effective fitness app created using Dart/Flutter with clean UI and workout tracking",
    tags: ["Dart", "Flutter", "UI/UX", "Health"],
    image: "/placeholder.svg",
    github: "https://github.com/Victorralp/FItness-app",
    demo: "#",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            <span className="text-neon-purple">MY</span> PROJECTS
          </h2>
          <div className="w-24 h-1 bg-neon-blue mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Explore my latest work showcasing my skills and creativity in web development and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative glass-card rounded-lg overflow-hidden group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <motion.div
                  className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredProject === project.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex space-x-4 mb-4">
                    <a
                      href={project.github}
                      className="p-2 rounded-full bg-black/50 hover:bg-neon-blue/20 transition-colors duration-300"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 rounded-full bg-black/50 hover:bg-neon-purple/20 transition-colors duration-300"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-orbitron font-bold mb-2 text-neon-blue">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-muted text-neon-purple border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

