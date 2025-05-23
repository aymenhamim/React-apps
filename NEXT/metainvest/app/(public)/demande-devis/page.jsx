import DemandeDevisForm from "@/components/demande-devis/DemandeDevisForm";
import HeroText from "@/components/demande-devis/HeroText";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image1 from "@/public/images/project-imgs/demande-devis/hero1.jpg";

export const metadata = {
  title: "Demande de devis",
};

function DemendeDevis() {
  return (
    <div className="relative w-full h-dvh overflow-x-hidden">
      <HeroSection image={Image1} postion="right">
        <div className="relative z-10 container px-4 h-dvh flex flex-col justify-center text-white mx-auto ">
          <HeroText />
        </div>
      </HeroSection>

      <DemandeDevisForm />
      <Footer />
    </div>
  );
}

export default DemendeDevis;
