import MetaInvestInfos from "@/components/about/MetaInvestInfos";
import Footer from "@/components/Footer";
import Image1 from "@/public/images/project-imgs/about/main-1.jpg";

import Image2 from "@/public/images/project-imgs/about/pic-2.jpg";
import Image3 from "@/public/images/project-imgs/about/pic-3.jpg";
import Image4 from "@/public/images/project-imgs/about/pic-4.jpg";

import Image from "next/image";

export const metadata = {
  title: "About",
};

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
          className="bg-black/80 absolute text-white font-bold flex items-center  justify-center w-fit 
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
        <MetaInvestInfos />
      </div>

      <div className="bg-stone-300 min-h-[80dvh] flex flex-col py-30">
        <h3
          className="text-center font-bold border-b-3 px-2 py-1 border-red-600 w-fit mx-auto
        text-5xl max-xl:text-4xl max-lg:text-3xl 
        "
        >
          Nos valeurs
        </h3>

        <div className="flex max-md:flex-col w-[80dvw] max-lg:w-[90dvw] mx-auto gap-2 my-20  items-center max-md:gap-8 justify-center">
          <div className="w-92 h-92  bg-stone-800 rounded-md relative font-semibold  overflow-hidden">
            <h3 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
              Intégrité dans la production.
            </h3>
            <Image
              src={Image2}
              alt="main image"
              fill
              className="object-cover brightness-[46%] max-md:object-bottom-left hover:scale-110 hover:saturate-50 hover:rotate-3 transition-all duration-200"
            />
          </div>

          <div className="w-92 h-92 bg-stone-800 rounded-md relative font-semibold overflow-hidden">
            <h3 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 ">
              Précision dans le design
            </h3>
            <Image
              src={Image3}
              alt="main image"
              fill
              className="object-cover brightness-[46%] max-md:object-bottom-left hover:scale-110 hover:saturate-50 hover:rotate-3 transition-all duration-200 "
            />
          </div>

          <div className="w-92 h-92 bg-stone-800 rounded-md relative font-semibold overflow-hidden ">
            <h3 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10 ">
              Respect de chaque client.
            </h3>
            <Image
              src={Image4}
              alt="main image"
              fill
              priority
              className="object-cover brightness-[46%] max-md:object-bottom-left  hover:scale-110 hover:saturate-50 hover:rotate-3 transition-all duration-200"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
