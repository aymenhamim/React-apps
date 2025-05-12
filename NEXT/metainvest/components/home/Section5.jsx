import Image from "next/image";
import Banner from "@/public/images/project-imgs/home/pic-1.jpg";

function Section5() {
  return (
    <div className="min-h-[70dvh] w-full bg-stone-300 flex items-center max-sm:py-15">
      {/* Left Side  */}

      <div className="w-[100%] block max-xl:hidden">
        <div
          className="relative mx-auto rounded-md overflow-auto shadow-2xl
            aspect-video w-3/4 
        "
        >
          <Image
            src={Banner}
            alt="img-2"
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side  */}

      <div className="flex flex-col gap-10 h-[100%]">
        <h3
          className="text-red-600 font-semibold 
         text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-lg  max-xl:text-center 
         "
        >
          À propos — L'histoire de MetaInvest
        </h3>
        <div className="max-w-[80%] flex flex-col gap-10 max-xl:mx-auto max-xl:w-[95%] max-xl:text-center">
          <p>
            Notre réputation repose sur la qualité et la fiabilité. Nous
            utilisons des matériaux de premier choix, respectons des contrôles
            qualité rigoureux et proposons des options personnalisées selon vos
            besoins. Nous avons eu l'honneur de collaborer avec de nombreuses
            écoles et établissements à travers la région, leur fournissant du
            mobilier solide et durable, parfaitement adapté à leur usage
            quotidien.
          </p>
          <p>
            Créez avec nous des environnements d'apprentissage et de transport
            fonctionnels, confortables et durables. Découvrez notre catalogue ou
            demandez un devis personnalisé.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section5;
