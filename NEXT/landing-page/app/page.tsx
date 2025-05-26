"use client"
import Hero from "@/components/hero"
import FeatureShowcase from "@/components/feature-showcase"
import RoadmapScroll from "@/components/roadmap-scroll"
import FriendChat from "@/components/friend-chat"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Pricing from "@/components/pricing"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import Header from "@/components/header"

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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeatureShowcase />
      <RoadmapScroll />
      <FriendChat />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}
