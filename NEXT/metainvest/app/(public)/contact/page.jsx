import ContactLeftSide from "@/components/contact/ContactLeftSide";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
  return (
    <div className="container min-h-dvh flex max-lg:flex-col justify-center mx-auto ">
      <ContactLeftSide />

      <ContactForm />
    </div>
  );
}

export default Contact;
