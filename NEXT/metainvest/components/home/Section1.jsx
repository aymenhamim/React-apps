"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

function Section1() {
  return (
    <div className="relative z-10 container px-4 h-full flex flex-col justify-center text-white mx-auto min-lg:mx-40">
      <div className="max-w-2xl max-sm:w-full">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-wrap mb-6"
        >
          Forger le confort durable de demain
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
          className="text-stone-300 text-lg max-lg:text-md max-sm:text-sm mb-6"
        >
          Nous concevons des solutions métalliques innovantes, alliant
          robustesse, design et responsabilité environnementale pour bâtir un
          avenir plus confortable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
          className="flex gap-10 flex-wrap max-md:gap-4"
        >
          <Button
            variant="secondary"
            size="lg"
            className={
              "rounded-full px-8 py-6 text-lg max-md:px-4 max-md:py-2 max-md:text-sm "
            }
          >
            <Link href="/contact">Contact</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg max-md:px-4 max-md:py-2 max-md:text-sm"
          >
            <Link href="/demande-devis">Demande de devis</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default Section1;
