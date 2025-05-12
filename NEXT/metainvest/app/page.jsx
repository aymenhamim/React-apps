import Image from "next/image";
import Link from "next/link";
import Image1 from "@/public/images/project-imgs/home/main.1.png";
import { Button } from "@/components/ui/button";
import { HeaderTitle2 } from "@/components/HeaderTitle";

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

      <div className="bg-white min-h-[70dvh] py-32 flex max-md:flex-col items-center justify-center px-[15dvw] max-xl:px-[10dvw] max-lg:px-[5dvw] max-md:px-4">
        <div className="w-[40%] min-md:w-full h-72 bg-red-700"></div>

        {/* font-semibold 
         text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-lg text-center 
         py-20 max-lg:py-12 min-xl:py-26 */}

        <div className="flex flex-col gap-3 w-[60%] min-md:w-full">
          <h3 className="font-semibold text-red-600 text-3xl">MetaInvest</h3>
          <p>
            Chez MetaInvest, nous allions robustesse, savoir-faire et utilité.
            Reconnue dans le domaine de la fabrication métallique, notre
            entreprise est spécialisée dans la production de chaises, de bureaux
            scolaires et de sièges de transport de haute qualité. Chaque produit
            que nous concevons porte la signature d’une fabrication soignée,
            d’un design fonctionnel et d’un engagement envers la durabilité.
          </p>
        </div>
      </div>
    </div>
  );
}
