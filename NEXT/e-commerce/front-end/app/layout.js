import Providers from "@/redux/Provider";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "E-Commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-dvh">
        <Navbar />
        <Providers>
          <div className="h-full ">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
