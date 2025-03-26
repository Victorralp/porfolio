"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"

const skills = [
  { name: "TypeScript", level: 90, color: "text-neon-blue" },
  { name: "Next.js", level: 85, color: "text-neon-blue" },
  { name: "Flutter/Dart", level: 85, color: "text-neon-blue" },
  { name: "React", level: 80, color: "text-neon-purple" },
  { name: "Node.js", level: 80, color: "text-neon-purple" },
  { name: "Mobile Development", level: 75, color: "text-neon-purple" },
  { name: "UI/UX Design", level: 85, color: "text-neon-red" },
  { name: "API Integration", level: 90, color: "text-neon-red" },
  { name: "Database Management", level: 80, color: "text-neon-red" },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
            <span className="text-neon-red">MY</span> SKILLS
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            A showcase of my technical expertise and proficiency in various technologies.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-orbitron font-bold ${skill.color}`}>{skill.name}</h3>
                <span className="text-gray-300">{skill.level}%</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${skill.color.replace("text-", "bg-")}`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 glass-card p-8 rounded-lg max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-orbitron font-bold mb-6 text-center">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Git",
              "Flutter",
              "Firebase",
              "Hive",
              "MongoDB",
              "REST APIs",
              "Next.js",
              "TypeScript",
              "Paystack",
              "Mobile Dev",
              "UI Design",
              "State Management",
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                className="glass-card p-3 rounded-lg text-center hover:border-neon-blue border border-transparent transition-colors duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

