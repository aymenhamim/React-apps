"use client"

import { motion } from "framer-motion"
import { Users, MessageCircle, UserPlus, Send, Heart, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const friends = [
  { name: "Sarah Chen", status: "Learning React", progress: 75, online: true },
  { name: "Alex Rodriguez", status: "Mastering Node.js", progress: 60, online: true },
  { name: "Emily Johnson", status: "DevOps Journey", progress: 40, online: false },
]

export default function FriendChat() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-stone-950 mb-4">Learn Together, Grow Together</h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Connect with fellow learners, share your progress, and collaborate in real-time conversations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Friend Management */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-stone-950 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-950">Friend Management</h3>
              </div>

              <div className="space-y-4">
                <div className="space-y-3">
                  {friends.map((friend, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="w-10 h-10 bg-stone-300 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-stone-700">
                              {friend.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          {friend.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-stone-950">{friend.name}</p>
                          <p className="text-sm text-stone-600">{friend.status}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="w-16 h-2 bg-stone-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-stone-950 rounded-full transition-all duration-300"
                            style={{ width: `${friend.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-stone-500 mt-1">{friend.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-stone-950 hover:bg-stone-800 text-white">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Add Friends
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Chat Conversations */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-stone-950 rounded-lg flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-stone-950">Real-time Chat</h3>
              </div>

              <div className="bg-white rounded-lg border h-64 flex flex-col">
                {/* Chat Header */}
                <div className="p-3 border-b bg-stone-50 rounded-t-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-stone-300 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-stone-700">SC</span>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-stone-950">Sarah Chen</p>
                      <p className="text-xs text-green-600">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                  <div className="flex justify-start">
                    <div className="bg-stone-100 rounded-lg p-2 max-w-xs">
                      <p className="text-sm text-stone-950">Hey! How's your React learning going?</p>
                      <span className="text-xs text-stone-500">2:30 PM</span>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-stone-950 text-white rounded-lg p-2 max-w-xs">
                      <p className="text-sm">
                        Great! Just finished the hooks section. The AI explanations really helped!
                      </p>
                      <span className="text-xs text-stone-300">2:32 PM</span>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-stone-100 rounded-lg p-2 max-w-xs">
                      <p className="text-sm text-stone-950">Awesome! Want to do the quiz together?</p>
                      <span className="text-xs text-stone-500">2:33 PM</span>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="p-3 border-t">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      className="flex-1 px-3 py-2 border border-stone-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-stone-950"
                    />
                    <Button size="sm" className="bg-stone-950 hover:bg-stone-800">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-stone-950" />
              </div>
              <h4 className="text-lg font-bold text-stone-950 mb-2">Study Groups</h4>
              <p className="text-stone-600">Create or join study groups with friends working on similar roadmaps</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-stone-950" />
              </div>
              <h4 className="text-lg font-bold text-stone-950 mb-2">Progress Sharing</h4>
              <p className="text-stone-600">Share achievements, milestones, and celebrate learning wins together</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-stone-950" />
              </div>
              <h4 className="text-lg font-bold text-stone-950 mb-2">Live Discussions</h4>
              <p className="text-stone-600">Get instant help and discuss complex topics in real-time chat</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
