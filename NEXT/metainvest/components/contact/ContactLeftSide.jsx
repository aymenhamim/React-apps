import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import ContactIcon from "@/components/ContactIcon";

function ContactLeftSide() {
  return (
    <div className="h-dvh max-lg:h-[50rem] w-[60%] max-lg:w-full flex items-center max-lg:justify-center">
      <div className=" xl:max-w-2xl lg:w-full max-md:mx-4 ">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-wrap mb-6 text-white">
          Contactez-nous
        </h2>
        <p className="text-stone-300 text-md max-lg:text-sm  mb-6">
          Une question, une demande de devis ou une visite à planifier ? Nous
          sommes à votre écoute. Chez MetaInvest, la communication est au cœur
          de notre service client. Que vous souhaitiez équiper une école
          complète ou commander quelques pièces sur mesure, nous sommes là pour
          vous accompagner.
        </p>

        <div className="mt-10 pl-4">
          <ContactIcon
            title="Notre emplacement"
            value=" Zone Industrielle, Casablanca, "
          >
            <HomeIcon />
          </ContactIcon>

          <ContactIcon
            title="Notre emplacement"
            value=" Zone Industrielle, Casablanca, "
          >
            <PhoneIcon />
          </ContactIcon>

          <ContactIcon
            title="Notre emplacement"
            value=" Zone Industrielle, Casablanca, "
          >
            <MailIcon />
          </ContactIcon>
        </div>
      </div>
    </div>
  );
}

export default ContactLeftSide;
