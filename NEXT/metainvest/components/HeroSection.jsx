import Image from "next/image";

function HeroSection({ image, postion = "left", children }) {
  return (
    <>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="main image"
          fill
          className={`object-cover brightness-[30%] max-md:object-bottom-${postion}`}
        />
      </div>

      {children}
    </>
  );
}

export default HeroSection;
