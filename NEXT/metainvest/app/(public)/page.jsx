import Image from "next/image";
import Link from "next/link";

import Image1 from "@/public/images/project-imgs/home/main.1.png";

import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import { Button } from "@/components/ui/button";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        <Image
          src={Image1}
          alt="main image"
          fill
          priority
          className="object-cover brightness-[50%] max-md:object-bottom-left"
        />
      </div>

      <Section1 />

      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}
