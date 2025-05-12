import capacity1 from "@/public/images/project-imgs/home/capacity1.jpg";
import capacity2 from "@/public/images/project-imgs/home/capacity2.jpg";
import capacity3 from "@/public/images/project-imgs/home/capacity3.jpg";
import Image from "next/image";

const capacities = [
  {
    title: "Usinage, Tournage et Meulage",
    text: "Nous fabriquons des pièces métalliques simples à moyennes en utilisant différentes techniques d’usinage manuel ou mécanique : fraisage, tournage et meulage selon les besoins du projet.",
    icon: "xsq",
    img: capacity1,
  },
  {
    title: "Fabrication Métallique de Petite Série",
    text: "Nous réalisons des structures métalliques légères comme des chaises, des bancs ou des cadres, souvent destinées à l’usage scolaire ou au transport, en respectant les normes de solidité et de confort.",
    icon: "xsq",
    img: capacity2,
  },
  {
    title: "Finitions",
    text: "Nous collaborons avec des partenaires pour appliquer des traitements de surface adaptés : peinture, zingage, nickelage, ou d’autres finitions sur demande.",
    icon: "xsq",
    img: capacity3,
  },
];

function Section3() {
  return (
    <div
      className="bg-white min-h-[80dvh] py-32 
      flex flex-col items-center justify-center 
      px-[15dvw] max-xl:px-[10dvw] max-lg:px-[5dvw] max-md:px-4 
      gap-10 min-xl:gap-20"
    >
      <h3
        className="text-center font-bold px-2 py-1 
        border-b-3 border-red-600 max-md:border-0
         w-fit mx-auto
        text-5xl max-xl:text-4xl max-lg:text-3xl 
        "
      >
        Nos capacités de fabrication
      </h3>

      <div className="flex max-md:flex-col w-[80dvw] max-lg:w-[90dvw] mx-auto gap-2 my-20  items-center max-md:gap-8 justify-center">
        {capacities.map((capacity) => (
          <div className="w-92 h-92  bg-stone-800 rounded-md relative font-semibold  overflow-hidden">
            <h3 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
              {capacity.title}
            </h3>

            <p className="absolute left-1/2 top-[80%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
              {capacity.text}
            </p>

            <Image
              src={capacity.img}
              alt="main image"
              fill
              priority
              className="object-cover brightness-[46%] max-md:object-bottom-left hover:scale-110 hover:saturate-50 hover:rotate-3 transition-all duration-200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
