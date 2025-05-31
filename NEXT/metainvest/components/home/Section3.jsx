"use client";

import capacity1 from "@/public/images/project-imgs/home/capacity1.jpg";
import capacity2 from "@/public/images/project-imgs/home/capacity2.jpg";
import capacity3 from "@/public/images/project-imgs/home/capacity3.jpg";
import { motion } from "framer-motion";
import { CogIcon, HammerIcon, CircleArrowLeftIcon } from "lucide-react";
import Image from "next/image";

const capacities = [
  {
    title: "Usinage, Tournage et Meulage",
    text: "Nous fabriquons des pièces métalliques simples à moyennes en utilisant différentes techniques d’usinage manuel ou mécanique : fraisage, tournage et meulage selon les besoins du projet.",
    icon: <CogIcon size={35} />,
    img: capacity1,
  },
  {
    title: "Fabrication Métallique de Petite Série",
    text: "Nous réalisons des structures métalliques légères comme des chaises, des bancs ou des cadres, souvent destinées à l'usage scolaire ou au transport, en respectant les normes de solidité et de confort.",
    icon: <HammerIcon size={35} />,
    img: capacity2,
  },
  {
    title: "Finitions",
    text: "Nous collaborons avec des partenaires pour appliquer des traitements de surface adaptés : peinture, zingage, nickelage, ou d'autres finitions sur demande.",
    icon: <CircleArrowLeftIcon size={35} />,
    img: capacity3,
  },
];

function Section3() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const imageItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div
      className="bg-white min-h-[80dvh] py-32 
      flex flex-col items-center justify-center 
        max-lg:px-[5dvw] max-md:px-4 
      gap-6 "
    >
      <h3
        className="text-center font-bold px-2 py-1 
        border-b-2 border-red-600 max-md:border-0
         w-fit mx-auto
        text-5xl max-xl:text-4xl max-lg:text-3xl 
        "
      >
        Nos capacités de fabrication
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex max-md:flex-col w-[80dvw] max-lg:w-[90dvw] mx-auto gap-6   items-center justify-center py-14 max-md:gap-15"
      >
        {capacities.map((capacity, index) => (
          <motion.div
            variants={imageItemVariants}
            // viewport={{ once: true }}
            key={index}
            className="w-96 aspect-square relative"
          >
            {/*  Capacity Image */}

            <Image
              alt={capacity.title}
              src={capacity.img}
              className="object-cover brightness-30 rounded-2xl"
              fill
              quality={100}
            />

            {/*  Capacity Icon */}

            <div className="absolute top-0 left-1/2 transform -translate-1/2 w-18 aspect-square rounded-full bg-stone-50 border border-stone-900  flex items-center justify-center shadow-2xl ">
              {capacity.icon}
            </div>

            {/*  Capacity Data */}

            <div className="flex flex-col justify-center items-center p-4 h-full gap-10 ">
              <h3 className="text-center text-white font-bold text-shadow-lg text-xl z-10">
                {capacity.title}
              </h3>

              <p className="text-sm text-center text-shadow-md text-white z-10">
                {capacity.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Section3;
