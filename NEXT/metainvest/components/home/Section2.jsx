import pic1 from "@/public/images/project-imgs/home/pic-1.jpg";
import { HeaderTitle2 } from "@/components/HeaderTitle";
import Image from "next/image";

function Section2() {
  return (
    <div
      className="bg-white min-h-[80dvh] py-32 
      flex max-md:flex-col items-center justify-center max-md:items-start
      px-[15dvw] max-xl:px-[10dvw] max-lg:px-[5dvw] max-md:px-4 
      gap-10 min-xl:gap-20"
    >
      <div className="w-[20dvw] max-md:w-[70dvw] max-md:self-center h-auto aspect-square relative rounded-lg overflow-hidden shadow-2xl ">
        <Image src={pic1} alt="pic-1" fill className="object-cover" />
      </div>

      {/* font-semibold 
         text-4xl max-xl:text-3xl max-lg:text-xl max-md:text-lg text-center 
         py-20 max-lg:py-12 min-xl:py-26 */}

      <div className="flex flex-col gap-3 w-[60%] max-md:w-full">
        <h3 className="font-semibold text-red-600 text-3xl">MetaInvest</h3>
        <p className="w-full">
          Chez MetaInvest, nous allions robustesse, savoir-faire et utilité.
          Reconnue dans le domaine de la fabrication métallique, notre
          entreprise est spécialisée dans la production de chaises, de bureaux
          scolaires et de sièges de transport de haute qualité. Chaque produit
          que nous concevons porte la signature d'une fabrication soignée, d'un
          design fonctionnel et d'un engagement envers la durabilité.
        </p>
      </div>
    </div>
  );
}

export default Section2;
