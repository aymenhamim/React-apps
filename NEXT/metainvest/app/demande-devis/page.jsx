import ContactForm from "@/components/contact/ContactForm";
import DemandeDevisForm from "@/components/demande-devis/DemandeDevisForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Image1 from "@/public/images/project-imgs/demande-devis/hero1.jpg";

function DemendeDevis() {
  return (
    <div className="relative w-full h-dvh overflow-x-hidden">
      <HeroSection image={Image1} postion="right">
        <div className="relative z-10 container px-4 h-dvh flex flex-col justify-center text-white mx-auto ">
          <div className="max-w-4xl mx-auto w-fit min-xl:mb-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wrap mb-6 min-xl:my-10 text-center">
              Une solution sur mesure
            </h2>

            <p className="text-stone-300 text-lg max-lg:text-md max-sm:text-sm mb-6 text-center text-shadow-lg text-shadow-black">
              Une question, une demande de devis ou une visite à planifier ?
              Nous sommes à votre écoute. Chez MetaInvest, la communication est
              au cœur de notre service client. Que vous souhaitiez équiper une
              école complète ou commander quelques pièces sur mesure, nous
              sommes là pour vous accompagner.
            </p>
          </div>
        </div>
      </HeroSection>

      <DemandeDevisForm />
      <Footer />
    </div>
  );
}

export default DemendeDevis;
