"use client"

import { motion } from "framer-motion"

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

const steps = [
  {
    step: "01",
    title: "Choose Your Path",
    description: "Select from hundreds of curated roadmaps or create your own learning journey",
  },
  {
    step: "02",
    title: "Learn with AI",
    description: "Get personalized explanations and take quizzes to reinforce your knowledge",
  },
  {
    step: "03",
    title: "Connect & Grow",
    description: "Join friends, share progress, and learn together in our collaborative environment",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-stone-950 mb-4">How mindSprint Works</h2>
          <p className="text-xl text-stone-600">Simple steps to accelerate your learning journey</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="text-center">
              <div className="w-16 h-16 bg-stone-950 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.step}
              </div>
              <h3 className="text-xl font-bold text-stone-950 mb-4">{step.title}</h3>
              <p className="text-stone-600">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
