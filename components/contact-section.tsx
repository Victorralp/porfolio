"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({ name: "", email: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
            <span className="text-neon-blue">CONTACT</span> ME
          </h2>
          <div className="w-24 h-1 bg-neon-red mx-auto"></div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl font-orbitron font-bold mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-neon-blue mr-4 mt-1" />
                <div>
                  <h4 className="font-orbitron font-bold">Email</h4>
                  <p className="text-gray-300">victorralph407@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-neon-purple mr-4 mt-1" />
                <div>
                  <h4 className="font-orbitron font-bold">Phone</h4>
                  <p className="text-gray-300">+2348107528204</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-neon-red mr-4 mt-1" />
                <div>
                  <h4 className="font-orbitron font-bold">Location</h4>
                  <p className="text-gray-300">Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-orbitron font-bold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Victorralp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:border-neon-blue border border-transparent transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/victor-ralph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:border-neon-purple border border-transparent transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/Victor35510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:border-neon-red border border-transparent transition-colors duration-300"
                  aria-label="Twitter Profile"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-neon-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <label htmlFor="name" className="block font-orbitron font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-border rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block font-orbitron font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-muted border border-border rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block font-orbitron font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-muted border border-border rounded-lg p-3 focus:outline-none focus:border-neon-blue transition-colors duration-300"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg font-orbitron font-bold bg-gradient-to-r from-neon-blue to-neon-purple text-white relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </button>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

