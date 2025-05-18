"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Nom invalide" })
    .max(50, { message: "Nom trop long" }),
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  telephone: z
    .string()
    .min(10)
    .max(15, { message: "Numéro de téléphone invalide" }),
  adresse: z.string().min(5, { message: "Adresse invalide" }),
  text: z.string().min(10, { message: "Message trop court" }),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);

    const sendEmail = async () => {
      const toastId = toast.loading("Sending message...");

      try {
        const response = await axios.post("http://localhost:3000/api/mail", {
          email: "cnlff21@gmail.com",
          CustomerEmail: data.email,
          telephone: data.telephone,
          adresse: data.adresse,
          message: data.text,
          name: data.name,
        });
        toast.success("Message sent successfully!");

        // console.log("Email sent successfully:", response.data);
        reset();
      } catch (error) {
        // Show error toast
        toast.error("Failed to send message. Please try again.");
      } finally {
        toast.dismiss(toastId);
      }
    };

    sendEmail();
  };

  return (
    <div className="max-sm:h-fit w-[60%] max-lg:w-full flex items-center justify-center max-lg:pb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[30rem] max-xl:w-[25rem] max-lg:w-[30rem] max-sm:w-[28rem] rounded-2xl "
      >
        <h2 className="text-center my-10 text-3xl font-bold">Contactez-nous</h2>

        <div className="my-10 w-[80%] mx-auto flex flex-col gap-2">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type={"text"} {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type={"email"} {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="telephone">Telephone</Label>
            <Input type={"nmber"} {...register("telephone")} />
            {errors.telephone && (
              <p className="text-red-500 text-sm">{errors.telephone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="adresse">Adresse</Label>
            <Input type={"text"} {...register("adresse")} />
            {errors.adresse && (
              <p className="text-red-500 text-sm">{errors.adresse.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="text">Comment pouvons-nous vous aider ?</Label>
            <Textarea {...register("text")} className="max-h-[7rem]" />
            {errors.text && (
              <p className="text-red-500 text-sm">{errors.text.message}</p>
            )}
          </div>

          <div>
            <Button type="submit" className="w-full cursor-pointer">
              Envoyee
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
