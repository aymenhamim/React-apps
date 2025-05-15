import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 p-10 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Bienvenue sur le portail d'administration
          </h1>
          <p className="mt-2 text-gray-600">
            Veuillez vous connecter pour gérer vos produits
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <Button asChild className="w-full">
            <Link href="/admin/login">Login to Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
