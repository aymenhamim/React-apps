"use client"

import { motion } from "framer-motion"
import { Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useScroll } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50)
    })
    return () => unsubscribe()
  }, [scrollY])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: 1,
        y: isScrolled ? 20 : 0,
        borderRadius: isScrolled ? "9999px" : "0px",
      }}
      transition={{ duration: 0.3 }}
      className={`${
        isScrolled
          ? "fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-lg border px-6 py-3 z-50 w-fit"
          : "border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 w-full"
      }`}
    >
      <div
        className={`${isScrolled ? "flex items-center justify-center space-x-8" : "container mx-auto px-4 py-4"} flex items-center justify-between`}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-stone-950 rounded-lg flex items-center justify-center">
            <Map className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-stone-950">mindSprint</span>
        </div>

        <nav className={`${isScrolled ? "flex" : "hidden md:flex"} items-center space-x-8`}>
          <a href="#features" className="text-stone-600 hover:text-stone-950 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-stone-600 hover:text-stone-950 transition-colors">
            How it Works
          </a>
          <a href="#pricing" className="text-stone-600 hover:text-stone-950 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-stone-600 hover:text-stone-950 transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-stone-600">
            Sign In
          </Button>
          <Button className="bg-stone-950 hover:bg-stone-800 text-white">Get Started</Button>
        </div>
      </div>
    </motion.header>
  )
}
