"use client";
import AuthForm from "@/components/AuthForm";

export default function RegisterPage() {
  const handleRegister = (data) => {
    console.log("Register form submitted:", data);
    // Later: call backend API here
  };

  return (
    <div className="mt-12">
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
}
