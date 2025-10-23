export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-screen min-h-screen flex justify-center">
      {children}
    </main>
  );
}
