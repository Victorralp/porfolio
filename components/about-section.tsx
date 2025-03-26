"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Code, Palette, Globe } from "lucide-react"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
            <span className="text-neon-blue">ABOUT</span> ME
          </h2>
          <div className="w-24 h-1 bg-neon-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 border-2 border-neon-blue rounded-lg"></div>
              <Image
                src="https://scontent.flos3-2.fna.fbcdn.net/v/t39.30808-6/306520918_381091877530398_8298677762486370279_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFc52LSE83O1p1HpqGlkJNa3Nqmiuz8GxHc2qaK7PwbEcjN3UOO2QasFuXmEjMbSWp3UEeOU3fbTpvA4jMvXRVK&_nc_ohc=L1ODhQtFd5QQ7kNvgHRP_TT&_nc_oc=AdkwgWlS7x1R9dIGnBqSgpMqzfomzqMF46LpdvRDY1y3XbE3273Gz5fYucVAorJ2Zgo&_nc_zt=23&_nc_ht=scontent.flos3-2.fna&_nc_gid=Qde2vFwjdM6qg7VxMbIrxQ&oh=00_AYECoOEcgrmFAWJYHAtxwHd0Cp5tI_jM3kANFP6FKGSRMw&oe=67E9C8B3"
                alt="Developer Portrait - Victor Ralph"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-4">
              Tech-Savvy Developer with a Passion for Innovation
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a full-stack developer with over 5 years of experience creating cutting-edge web applications. My
              journey in tech began with a fascination for how digital experiences can transform our daily lives, and
              I've been pushing the boundaries ever since.
            </p>
            <p className="text-gray-300 mb-8">
              With expertise in modern frameworks and a keen eye for design, I build solutions that are not only
              functionally robust but also visually stunning and intuitive to use.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-lg text-center">
                <Code className="h-8 w-8 text-neon-blue mx-auto mb-2" />
                <h4 className="font-orbitron font-bold">Development</h4>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <Palette className="h-8 w-8 text-neon-purple mx-auto mb-2" />
                <h4 className="font-orbitron font-bold">Design</h4>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <Globe className="h-8 w-8 text-neon-red mx-auto mb-2" />
                <h4 className="font-orbitron font-bold">Web3</h4>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

