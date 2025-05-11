import Image1 from "@/public/images/project-imgs/about/main-1.jpg";
import Image from "next/image";

function About() {
  return (
    <>
      <div className="relative w-full h-[70dvh] overflow-x-hidden">
        <div className="absolute inset-0">
          <Image
            src={Image1}
            alt="main image"
            fill
            priority
            className="object-cover brightness-[60%] max-md:object-bottom-left"
          />
        </div>

        <div
          className="bg-black/80 absolute text-white font-bold flex items-center       justify-center w-fit 
        left-10 max-xl:left-8 max-lg:left-6 max-md:left-4 max-sm:left-2
        bottom-10 max-xl:bottom-8 max-lg:bottom-6 max-md:bottom-4 max-sm:bottom-2
        px-20 max-xl:px-12 max-lg:px-8 max-md:px-4 
        py-12  max-xl:py-8 max-lg:py-6 max-md:py-4 max-sm:py-2
        text-4xl max-xl:text-2xl max-md:text-xl max-sm:text-lg
        rounded-2xl max-md:rounded-md
        "
        >
          About MetaInvest
        </div>
      </div>

      <div className="bg-stone-50 min-h-[70dvh] pb-30">
        <h3
          className="text-red-600 font-semibold 
         text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-lg text-center 
         py-20 max-lg:py-12 min-xl:py-26
         "
        >
          À propos — L'histoire de MetaInvest
        </h3>
        <ul
          className="
          flex flex-col gap-10 mx-auto 
          text-lg max-md:text-sm
          w-[50dvw] max-xl:w-[60dvw] max-lg:w-[70dvw] max-md:w-[70dvw] max-sm:w-[90dvw]
          list-inside list-disc 
        "
        >
          <li>
            <b>Fondée en 2013,</b> MetaInvest est née d'une idée simple mais
            essentielle : fournir du mobilier métallique robuste et fonctionnel
            pour répondre aux besoins réels des institutions. D'un petit atelier
            local, nous sommes devenus un partenaire fiable pour de nombreuses
            écoles et entreprises de transport à travers la région.
          </li>
          <li>
            Notre équipe est composée de soudeurs, de techniciens et de
            concepteurs passionnés par leur métier. Nous ne produisons pas en
            masse : chaque commande est traitée avec soin, précision et respect
            du client. Chaque chaise, chaque bureau ou siège est le reflet de
            nos valeurs : solidité, qualité et durabilité.
          </li>
          <li>
            Nous sommes fiers de contribuer à l'amélioration de l'éducation et
            du service public. Quand un élève s'assoit sur une de nos chaises ou
            qu'un passager voyage confortablement grâce à nos sièges, nous
            savons que notre travail a un véritable impact.
          </li>
          <li>
            Notre atelier est équipé de machines modernes et respecte des normes
            strictes en matière de sécurité et de qualité. Nous invitons les
            directeurs d'écoles, responsables d'achats et partenaires à visiter
            nos locaux pour découvrir notre savoir-faire.
          </li>
        </ul>
      </div>

      <div className="bg-stone-300 min-h-dvh flex flex-col py-30">
        <h3
          className="text-center font-bold border-b-3 px-2 py-1 border-red-600 w-fit mx-auto
        text-5xl max-xl:text-4xl max-lg:text-3xl 
        "
        >
          Nos valeurs
        </h3>

        <div className="valeurs">
          <div className="flex max-md:flex-col w-[80dvw] max-lg:w-[90dvw] mx-auto gap-20 my-20 justify-evenly">
            <div className="w-92 h-92 bg-stone-800 rounded-md relative font-semibold ">
              <h3 className="absolute left-1/2 top-1/2 translatex-[-50%] translatey-[-50%] text-white">
                Intégrité dans la production.
              </h3>
            </div>
            <div className="w-92 h-92 bg-stone-800 rounded-md relative font-semibold ">
              <h3 className="absolute left-1/2 top-1/2 translatex-[-50%] translatey-[-50%] text-white">
                Intégrité dans la production.
              </h3>
            </div>
            <div className="w-92 h-92 bg-stone-800 rounded-md relative font-semibold ">
              <h3 className="absolute left-1/2 top-1/2 translatex-[-50%] translatey-[-50%] text-white">
                Intégrité dans la production.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
