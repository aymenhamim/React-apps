"use client"

import { motion } from "framer-motion"
import { Brain, Users, MessageCircle, Map, Zap, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

const features = [
  {
    icon: Brain,
    title: "AI Explanations",
    description: "Get instant, personalized explanations for any topic on your roadmap",
  },
  {
    icon: Zap,
    title: "Interactive Quizzes",
    description: "Test your knowledge with AI-generated quizzes tailored to your progress",
  },
  {
    icon: Users,
    title: "Friend System",
    description: "Connect with fellow learners and track each other's progress",
  },
  {
    icon: MessageCircle,
    title: "Real-time Chat",
    description: "Discuss topics and collaborate with friends in real-time",
  },
  {
    icon: Map,
    title: "Custom Roadmaps",
    description: "Create and share your own learning paths with the community",
  },
  {
    icon: Star,
    title: "Progress Tracking",
    description: "Visualize your learning journey with detailed analytics",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-stone-950 mb-4">Everything you need to master any skill</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Our platform combines the best of roadmap learning with AI assistance and social features
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-stone-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-stone-950" />
                  </div>
                  <CardTitle className="text-xl text-stone-950">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-stone-600">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
