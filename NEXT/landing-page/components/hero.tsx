"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Hero() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="max-w-4xl mx-auto">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold text-stone-950 mb-6">
            Smart Roadmaps with
            <span className="text-stone-700 block">AI-Powered Learning</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-stone-600 mb-8 max-w-2xl mx-auto">
            Create interactive learning roadmaps, get AI explanations, take quizzes, and collaborate with friends in
            real-time. Your journey to mastery starts here.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-stone-950 hover:bg-stone-800 text-white text-lg px-8 py-3">
              Start Learning <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-stone-300 text-stone-950">
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
