"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Brain } from "lucide-react"

export default function FeatureShowcase() {
  const { scrollY } = useScroll()
  const showcaseY = useTransform(scrollY, [0, 500], [0, -50])

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-stone-50 rounded-2xl shadow-2xl p-8 border border-stone-200">
            <motion.div
              style={{ y: showcaseY }}
              className="aspect-video bg-gradient-to-br from-stone-100 to-stone-200 rounded-xl flex items-center justify-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

              <div className="text-center z-10">
                <div className="w-16 h-16 bg-stone-950 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-950 mb-2">Interactive Learning Roadmaps</h3>
                <p className="text-stone-600">Master any technology with our AI-guided learning paths</p>
              </div>

              {/* Floating elements for visual interest */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute top-4 left-4 w-3 h-3 bg-stone-500 rounded-full"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                className="absolute bottom-4 right-4 w-2 h-2 bg-stone-700 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
