"use client";

import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function Form() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Close modal after successful auth (you might want to only close after successful API response)
    e.onClose();

    if (isLogin) {
      // Handle login logic here
      console.log("Logging in with:", { email, password });
      // Add your authentication logic (e.g., with NextAuth.js or a custom solution)
    } else {
      // Handle registration logic here
      console.log("Registering with:", { name, email, password });
      // Add your registration logic
    }

    // Close modal after successful auth (you might want to only close after successful API response)
    onClose();
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isLogin ? "Log in to your account" : "Create an account"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <Label className="mb-2" htmlFor="name">
              Password
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 mt-2 rounded-none"
              required={!isLogin}
            />
          </div>
        )}

        <div>
          <Label htmlFor="email">Email address</Label>

          <Input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mb-4 mt-2 rounded-none"
          />
        </div>

        <div>
          <Label className="mb-2" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mb-4 mt-2 rounded-none"
          />
        </div>

        <Button
          type="submit"
          className="w-full mt-3 rounded-none"
          onClick={() => setIsLogin(!isLogin)}
        >
          {!isLogin ? "Create Account" : "Sign in"}
        </Button>
      </form>

      <div className="mt-4 text-right text-sm pr-4">
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Form;

// <form
//   className="space-y-4 max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md"
//   onSubmit={handleSubmit}
// >
//   <h2 className="text-2xl font-bold text-center mb-4 capitalize">{type}</h2>

//   {isRegister && (
//     <div>
//       <Label className="mb-2" htmlFor="name">
//         Name
//       </Label>
//       <Input
//         id="name"
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         required
//       />
//     </div>
//   )}

//   <div>
//     <Label className="mb-2" htmlFor="email">
//       Email
//     </Label>
//     <Input
//       id="email"
//       name="email"
//       type="email"
//       value={form.email}
//       onChange={handleChange}
//       required
//     />
//   </div>

//   <div>
//     <Label className="mb-2" htmlFor="password">
//       Password
//     </Label>
//     <Input
//       id="password"
//       name="password"
//       type="password"
//       value={form.password}
//       onChange={handleChange}
//       required
//     />
//   </div>

//   <Button type="submit" className="w-full">
//     {isRegister ? "Create Account" : "Login"}
//   </Button>
// </form>;
