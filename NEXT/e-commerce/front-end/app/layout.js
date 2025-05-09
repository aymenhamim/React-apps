import Providers from "@/redux/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthModal from "@/components/AuthModal";
import HandleModal from "@/components/HandleModal";

export const metadata = {
  title: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-dvh">
        <Providers>
          <div className="h-full ">
            <Navbar />

            {children}
          </div>
          {/* <AuthModal isOpen={true} /> */}
          <HandleModal />
        </Providers>
      </body>
    </html>
  );
}
