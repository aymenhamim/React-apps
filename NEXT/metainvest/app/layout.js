import Navigation from "@/components/Navigation";
import "./globals.css";

import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    default: "Metainvest",
    template: "%s | Metainvest",
  },
  description: "MetaInvest - build steel chairs and tables ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-full bg-stone-950 relative ${poppins.className}`}>
        <header className="absolute top-0 left-0 right-0 z-20">
          {/* <Navigation /> */}
          <Navbar />
        </header>
        <main className="m">{children}</main>
      </body>
    </html>
  );
}
