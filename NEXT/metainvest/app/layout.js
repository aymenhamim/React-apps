import "./globals.css";

import { Poppins } from "next/font/google";
import { Toaster } from "sonner";

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
      {/* <body className={`min-h-full bg-stone-950 relative ${poppins.className}`}> */}
      <body className={`min-h-full bg-stone-950 relative ${poppins.className}`}>
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
