import Navbar from "@/components/ui/navbar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  //   return <main className="w-screen min-h-screen">{children}</main>;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
