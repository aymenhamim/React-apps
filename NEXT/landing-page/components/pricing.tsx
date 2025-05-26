"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

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

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    features: ["Access to public roadmaps", "Basic AI explanations", "Community chat", "Progress tracking"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "per month",
    features: [
      "Everything in Free",
      "Unlimited AI explanations",
      "Custom roadmaps",
      "Advanced quizzes",
      "Friend system",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "per month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "Custom branding",
      "API access",
      "Dedicated support",
    ],
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-stone-950 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-stone-600">Choose the plan that fits your learning goals</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card
                className={`h-full relative border-stone-200 ${plan.popular ? "border-stone-950 shadow-lg scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-stone-950 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-stone-950">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-stone-950">{plan.price}</span>
                    <span className="text-stone-600">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-stone-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? "bg-stone-950 hover:bg-stone-800 text-white" : "border-stone-300"}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
