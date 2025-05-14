"use client";

import pic1 from "@/public/images/project-imgs/home/pic-1.jpg";
import { HeaderTitle2 } from "@/components/HeaderTitle";
import Image from "next/image";
import { motion } from "framer-motion";

function Section2() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const paragraphContent = [
    "Chez MetaInvest, nous allions robustesse, savoir-faire et utilité.",
    "Reconnue dans le domaine de la fabrication métallique, notre entreprise est spécialisée dans la production de chaises, de bureaux scolaires et de sièges de transport de haute qualité.",
    "Chaque produit que nous concevons porte la signature d'une fabrication soignée, d'un design fonctionnel et d'un engagement envers la durabilité.",
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white min-h-[80dvh] py-32 
      flex max-md:flex-col items-center justify-center max-md:items-start
      px-[15dvw] max-xl:px-[10dvw] max-lg:px-[5dvw] max-md:px-4 
      gap-10 min-xl:gap-20"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="w-[20dvw] max-md:w-[70dvw] max-md:self-center h-auto aspect-square relative rounded-lg overflow-hidden shadow-2xl"
      >
        <Image src={pic1} alt="pic-1" fill className="object-cover" />
      </motion.div>

      {/* font-semibold 
         text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-lg text-center 
         py-20 max-lg:py-12 min-xl:py-26 */}

      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-3 w-[60%] max-md:w-full"
      >
        <motion.h3
          variants={textItemVariants}
          className="font-semibold text-red-600 text-3xl"
        >
          MetaInvest
        </motion.h3>
        {paragraphContent.map((text, index) => (
          <motion.p key={index} variants={textItemVariants} className="w-full">
            {text}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Section2;
