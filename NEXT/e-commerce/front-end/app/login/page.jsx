"use client";
import AuthForm from "@/components/AuthForm";

function Login() {
  const handleLogin = (data) => {
    console.log("Login form submitted:", data);
    // Later: call backend API here
  };

  return (
    <div className="mt-20 relative">
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
}

export default Login;
