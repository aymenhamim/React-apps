import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/images/project-imgs/home/main.1.png";
import { Button } from "@/components/ui/button";

const metaData = {
  title: "Home",
  // description: "MetaInvest - build steel chairs and tables ",
};

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        <Image
          src={Image1}
          alt="main image"
          fill
          priority
          className="object-cover brightness-[50%] max-md:object-bottom-left"
        />
      </div>

      <div className="relative z-10 container px-4 h-full flex flex-col justify-center text-white mx-auto min-lg:mx-40">
        <div className="max-w-2xl max-sm:w-full">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wrap mb-6">
            Forger le confort durable de demain
          </h2>

          <p className="text-stone-300 text-lg max-lg:text-md max-sm:text-sm mb-6">
            Nous concevons des solutions métalliques innovantes, alliant
            robustesse, design et responsabilité environnementale pour bâtir un
            avenir plus confortable.
          </p>

          <div className="flex gap-10 flex-wrap max-md:gap-4">
            <Button
              variant="secondary"
              size="lg"
              className={
                "rounded-full px-8 py-6 text-lg max-md:px-4 max-md:py-2 max-md:text-sm "
              }
            >
              <Link href="/contact">Contact</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-6 text-lg max-md:px-4 max-md:py-2 max-md:text-sm"
            >
              <Link href="/demande-devis">Demande de devis</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white h-[400rem] text-white">vkxh</div>
    </div>
  );
}
