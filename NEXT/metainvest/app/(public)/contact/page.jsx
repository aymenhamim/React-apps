import ContactLeftSide from "@/components/contact/ContactLeftSide";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
};

function Contact() {
  return (
    <div className="bg-stone-950">
      <div className="container min-h-dvh flex max-lg:flex-col justify-center mx-auto">
        <ContactLeftSide />

        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
