export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   return <main className="w-screen min-h-screen">{children}</main>;
  return (
    <main className="w-screen min-h-screen flex justify-center">
      {/* <div>hello from </div> */}
      {children}
    </main>
  );
}
