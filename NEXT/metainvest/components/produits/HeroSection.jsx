import Image1 from "@/public/images/project-imgs/about/main-1.jpg";
import Image from "next/image";

function HeroSectionProduct() {
  return (
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
  );
}

export default HeroSectionProduct;
