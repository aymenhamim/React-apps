import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-20">
        {/* <Navigation /> */}
        <Navbar />
      </header>
      <main className="m">{children}</main>
    </>
  );
}
