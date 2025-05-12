import { HomeIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div
      className="w-full bg-stone-950 
    min-h-48 flex gap-20
     justify-center items-center 
    text-white px-20 "
    >
      <div className="flex flex-col max-md:hidden">
        <h4 className="font-bold text-xl mb-4">à propos de nous</h4>
        <p className="text-xs text-stone-300 max-w-[30rem]">
          MetaInvest — Fabrication métallique sur mesure pour l'éducation, le
          transport et l'aménagement. Fiabilité, simplicité et savoir-faire
          local
        </p>
      </div>

      <div className="">
        <h4 className="font-bold text-xl mb-6 max-sm:text-lg">Contact</h4>
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-3 ">
            <li className="flex items-center gap-4 text-sm max-sm:text-xs">
              <span>
                <HomeIcon size={20} />
              </span>
              <span className="text-stone-300">
                Zone Industrielle, Casablanca,
              </span>
            </li>

            <li className="flex items-center gap-4 text-sm max-sm:text-xs">
              <span>
                <PhoneIcon size={20} />
              </span>
              <span className="text-stone-300">(+212) 646055092</span>
            </li>

            <li className="flex items-center gap-4 text-sm max-sm:text-xs">
              <span>
                <MailIcon size={20} />
              </span>
              <span className="text-stone-300">contact@metainvest.ma</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col ">
        <h4 className="font-bold text-xl mb-4 max-sm:text-lg">Pages</h4>
        <ul className="text-sm text-stone-300 max-sm:text-xs">
          <li className="hover:underline">
            <Link href="/">Accueil</Link>
          </li>

          <li className="hover:underline max-sm:py-1">
            <Link href="/about">About</Link>
          </li>

          <li className="hover:underline max-sm:py-1">
            <Link href="/produits">Produits</Link>
          </li>

          <li className="hover:underline max-sm:py-1">
            <Link href="/demande-devis">Demande de devis</Link>
          </li>

          <li className="hover:underline max-sm:py-1">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* <div className="w-[33%]"></div>
      <div className="w-[33%]"></div> */}
    </div>
  );
}

export default Footer;
