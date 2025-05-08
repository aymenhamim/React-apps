import Providers from "@/redux/Provider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
