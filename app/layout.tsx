import type React from "react"
import type { Metadata } from "next/types"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Victor Ralph - Portfolio",
  description: "Victor Ralph's personal portfolio showcasing web and mobile development projects",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'