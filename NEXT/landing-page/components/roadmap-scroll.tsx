"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const roadmaps = [
  { name: "Frontend", description: "React, Vue, Angular", color: "bg-blue-500" },
  { name: "Backend", description: "Node.js, Python, Java", color: "bg-green-500" },
  { name: "DevOps", description: "Docker, Kubernetes, AWS", color: "bg-orange-500" },
  { name: "Full Stack", description: "MERN, MEAN, Django", color: "bg-purple-500" },
  { name: "Mobile", description: "React Native, Flutter", color: "bg-pink-500" },
  { name: "Data Science", description: "Python, R, Machine Learning", color: "bg-cyan-500" },
  { name: "UI/UX Design", description: "Figma, Adobe XD, Sketch", color: "bg-red-500" },
  { name: "Database", description: "SQL, MongoDB, PostgreSQL", color: "bg-yellow-500" },
  { name: "Blockchain", description: "Solidity, Web3, DeFi", color: "bg-indigo-500" },
  { name: "Game Development", description: "Unity, Unreal Engine", color: "bg-teal-500" },
  { name: "Cybersecurity", description: "Ethical Hacking, Pentesting", color: "bg-gray-600" },
  { name: "AI/ML", description: "TensorFlow, PyTorch", color: "bg-emerald-500" },
]

export default function RoadmapScroll() {
  return (
    <section className="py-16 overflow-hidden bg-stone-50">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-stone-950 mb-4">Explore Learning Roadmaps</h2>
        <p className="text-stone-600">Choose from our comprehensive collection of technology roadmaps</p>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="flex space-x-6"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex space-x-6 min-w-max">
              {roadmaps.map((roadmap, index) => (
                <Card
                  key={`${setIndex}-${index}`}
                  className="w-64 bg-white border-stone-200 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${roadmap.color} rounded-lg flex items-center justify-center mb-4`}>
                      <div className="w-6 h-6 bg-white rounded opacity-80"></div>
                    </div>
                    <h4 className="font-bold text-lg text-stone-950 mb-2">{roadmap.name}</h4>
                    <p className="text-sm text-stone-600 mb-4">{roadmap.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-stone-500">12 weeks</span>
                      <ArrowRight className="w-4 h-4 text-stone-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
