"use client";

import { motion } from "framer-motion";

function HeroText() {
  return (
    <div className="max-w-4xl mx-auto w-fit min-xl:mb-32">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-wrap mb-6 min-xl:my-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Une solution sur mesure
      </motion.h2>

      <motion.p
        className="text-stone-100 text-lg max-lg:text-md max-sm:text-sm mb-6 text-center text-shadow-lg "
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
      >
        Une question, une demande de devis ou une visite à planifier ? Nous
        sommes à votre écoute. Chez MetaInvest, la communication est au cœur de
        notre service client. Que vous souhaitiez équiper une école complète ou
        commander quelques pièces sur mesure, nous sommes là pour vous
        accompagner.
      </motion.p>
    </div>
  );
}

export default HeroText;
