"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui//textarea";
import { Button } from "@/components/ui//button";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  telephone: z
    .string()
    .min(10)
    .max(15, { message: "Numéro de téléphone invalide" }),
  nom: z.string().min(5, { message: "Nom invalide" }),
  entreprise: z
    .string()
    .min(3, { message: "Entreprise / Organisation invalide" }),
  lieu: z.string().min(8, { message: "Lieu de livraison est invalide" }),
  details: z.string().min(10, { message: "Message trop court" }),
  // type: z.string().min(3, { message: "Type de produit est invalide" }),
  quantity: z
    .string()
    .min(2, { message: "Quantité doit être supérieur à 10" })
    .max(5, { message: "Quantité trop grande" }),
  delay: z.string().min(3, { message: "Délai est invalide" }),
  // budget: z.string().min(3, { message: "Budget est invalide" }),
});

function DemandeDevisForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-dvh bg-stone-50 py-20">
      <h2 className="text-center my-10 text-4xl font-bold">Formulaire</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[40rem] max-xl:w-[35rem] max-lg:w-[30rem] max-sm:w-[26rem] rounded-2xl mx-auto border shadow-md"
      >
        <div className="my-10 w-[80%] mx-auto flex flex-col gap-5">
          {/* FULLNAME & ENTEPRISE */}

          <div className="flex gap-2 flex-wrap">
            <div className="w-[48%] max-lg:w-full">
              <Label htmlFor="nom">Nom et prénom</Label>
              <Input type={"text"} {...register("nom")} />
              {errors.nom && (
                <p className="text-red-500 text-sm">{errors.nom.message}</p>
              )}
            </div>

            <div className="w-[48%]  max-lg:w-full">
              <Label htmlFor="telephone">Entreprise / Organisation</Label>
              <Input type={"text"} {...register("entreprise")} />
              {errors.entreprise && (
                <p className="text-red-500 text-sm">
                  {errors.entreprise.message}
                </p>
              )}
            </div>
          </div>

          {/* EMAIL */}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input type={"email"} {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* TELEPHONE */}

          <div>
            <Label htmlFor="telephone">Telephone</Label>
            <Input type={"nmber"} {...register("telephone")} />
            {errors.telephone && (
              <p className="text-red-500 text-sm">{errors.telephone.message}</p>
            )}
          </div>

          <div className="h-[1px] w-2/3 mx-auto bg-stone-600 mt-6 mb-4"></div>

          {/* TYPE DE PRODUIT & QUANTITé */}

          <div className="flex gap-2 flex-wrap">
            <div className="w-[48%] max-lg:w-full">
              <Label htmlFor="type" className="text-sm">
                Type de produit souhaité
              </Label>

              <Select {...register("type")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a type" />
                </SelectTrigger>

                <SelectContent {...register("type")}>
                  <SelectGroup>
                    <SelectLabel>Types</SelectLabel>

                    <SelectItem value="chaises de transport">
                      Chaises de transport
                    </SelectItem>

                    <SelectItem value="table de transport">
                      Table de transport
                    </SelectItem>

                    <SelectItem value="aure">autre...</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* <Input type={"text"} {...register("type")} /> */}
              {errors.type && (
                <p className="text-red-500 text-sm">{errors.type.message}</p>
              )}
            </div>

            <div className="w-[48%]  max-lg:w-full">
              <Label htmlFor="quantity" className="text-sm">
                Quantité estimée
              </Label>
              <Input type={"number"} {...register("quantity")} />
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.quantity.message}
                </p>
              )}
            </div>
          </div>

          {/* LIEU DE LIVRAISON */}

          <div>
            <Label htmlFor="adresse">Lieu de livraison</Label>
            <Input type={"text"} {...register("lieu")} />
            {errors.lieu && (
              <p className="text-red-500 text-sm">{errors.lieu.message}</p>
            )}
          </div>

          {/* Délais & Budget approximatif */}

          <div className="flex gap-2 flex-wrap">
            <div className="w-[48%]  max-lg:w-full">
              <Label htmlFor="delay" className="text-sm">
                Délais souhaités de livraison *
              </Label>
              <Input type={"text"} {...register("delay")} />
              {errors.delay && (
                <p className="text-red-500 text-sm">{errors.delay.message}</p>
              )}
            </div>

            <div className="w-[48%] max-lg:w-full">
              <Label htmlFor="budget" className="text-sm">
                Budget approximatif
              </Label>
              <Input type={"text"} {...register("budget")} />
              {errors.budget && (
                <p className="text-red-500 text-sm">{errors.budget.message}</p>
              )}
            </div>
          </div>

          {/* Détails supplémentaires */}

          <div>
            <Label htmlFor="details">Détails supplémentaires</Label>
            <Textarea {...register("details")} className="min-h-32" />
            {errors.details && (
              <p className="text-red-500 text-sm">{errors.details.message}</p>
            )}
          </div>

          <div>
            <Button type="submit" className="w-full cursor-pointer">
              Envoyee <MoveRight />
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DemandeDevisForm;

// import { zodResolver } from "@hookform/resolvers/zod";
