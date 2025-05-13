import Image from "next/image";

const metaData = {
  title: "MetaInvest - Demande de devis",
  description:
    "Demandez un devis personnalisé pour votre projet de mobilier métallique.",
};

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
