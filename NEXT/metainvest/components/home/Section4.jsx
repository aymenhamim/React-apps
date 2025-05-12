import Image from "next/image";
import Banner from "@/public/images/project-imgs/home/banner.png";

function Section4() {
  return (
    <div className="bg-white min-h-[50dvh] ">
      <div
        className="relative w-[95dvw] 
      h-[40dvh] max-md:h-[30dvh] max-sm:h-[20dvh]
      rounded-4xl max-lg:rounded-2xl max-md:rounded-xl max-sm:rounded-lg
      mx-auto overflow-hidden shadow-2xl"
      >
        <Image
          src={Banner}
          alt="banner"
          quality={100}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export default Section4;
