"use client";

import { motion } from "framer-motion";

function MetaInvestInfos() {
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
  return (
    <motion.ul
      variants={textContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="
            flex flex-col gap-10 mx-auto 
            text-lg max-md:text-sm
            w-[50dvw] max-xl:w-[60dvw] max-lg:w-[70dvw] max-md:w-[70dvw] max-sm:w-[90dvw]
            list-inside list-disc 
          "
    >
      <motion.li variants={textItemVariants}>
        <b>Fondée en 2013,</b> MetaInvest est née d'une idée simple mais
        essentielle : fournir du mobilier métallique robuste et fonctionnel pour
        répondre aux besoins réels des institutions. D'un petit atelier local,
        nous sommes devenus un partenaire fiable pour de nombreuses écoles et
        entreprises de transport à travers la région.
      </motion.li>
      <motion.li variants={textItemVariants}>
        Notre équipe est composée de soudeurs, de techniciens et de concepteurs
        passionnés par leur métier. Nous ne produisons pas en masse : chaque
        commande est traitée avec soin, précision et respect du client. Chaque
        chaise, chaque bureau ou siège est le reflet de nos valeurs : solidité,
        qualité et durabilité.
      </motion.li>
      <motion.li variants={textItemVariants}>
        Nous sommes fiers de contribuer à l'amélioration de l'éducation et du
        service public. Quand un élève s'assoit sur une de nos chaises ou qu'un
        passager voyage confortablement grâce à nos sièges, nous savons que
        notre travail a un véritable impact.
      </motion.li>
      <motion.li variants={textItemVariants}>
        Notre atelier est équipé de machines modernes et respecte des normes
        strictes en matière de sécurité et de qualité. Nous invitons les
        directeurs d'écoles, responsables d'achats et partenaires à visiter nos
        locaux pour découvrir notre savoir-faire.
      </motion.li>
    </motion.ul>
  );
}

export default MetaInvestInfos;
