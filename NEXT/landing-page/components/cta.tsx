"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-stone-950">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to accelerate your learning?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already using mindSprint to master new skills faster than ever.
          </p>
          <Button size="lg" className="bg-white text-stone-950 hover:bg-stone-100 text-lg px-8 py-3">
            Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
