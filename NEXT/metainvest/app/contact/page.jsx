import ContactLeftSide from "@/components/contact/ContactLeftSide";
import ContactForm from "@/components/ContactForm";
import ContactIcon from "@/components/ContactIcon";
import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";

function Contact() {
  return (
    <div className="container min-h-dvh flex max-lg:flex-col justify-center mx-auto ">
      <ContactLeftSide />

      <div className="h-dvh w-[60%] max-lg:w-full bg-yellow-600 flex items-center max-lg:justify-center ">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
