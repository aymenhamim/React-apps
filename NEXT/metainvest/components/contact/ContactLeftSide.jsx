"use client";

import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import ContactIcon from "@/components/contact/ContactIcon";
import { motion } from "framer-motion";

function ContactLeftSide() {
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

  const IconItemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="h-dvh max-sm:h-[70dvh] max-lg:h-[50rem] w-[60%] max-lg:w-full flex items-center max-lg:justify-center">
      <div className=" xl:max-w-2xl lg:w-full max-md:mx-4 ">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-wrap mb-6 text-white"
        >
          Contactez-nous
        </motion.h2>
        <motion.p
          className="text-stone-300 text-md max-lg:text-sm  mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
        >
          Une question, une demande de devis ou une visite à planifier ? Nous
          sommes à votre écoute. Chez MetaInvest, la communication est au cœur
          de notre service client. Que vous souhaitiez équiper une école
          complète ou commander quelques pièces sur mesure, nous sommes là pour
          vous accompagner.
        </motion.p>

        <motion.div
          className="mt-10 pl-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <motion.div variants={IconItemVariants}>
            <ContactIcon
              title="Notre emplacement"
              value=" Hay Essasfa Lot N°E 42, Casablanca"
              variants={IconItemVariants}
            >
              <HomeIcon />
            </ContactIcon>
          </motion.div>

          <motion.div variants={IconItemVariants}>
            <ContactIcon
              title="Numéro de Téléphone"
              value="(+212) 634436068 "
              variants={IconItemVariants}
            >
              <PhoneIcon />
            </ContactIcon>
          </motion.div>

          <motion.div variants={IconItemVariants}>
            <ContactIcon
              title="Adresse Email"
              value="contact@metainvest.ma"
              variants={IconItemVariants}
            >
              <MailIcon />
            </ContactIcon>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default ContactLeftSide;
