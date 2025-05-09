"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AuthModal({ isOpen, onClose, children }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-[1px] backdrop-brightness-50"
      onClick={() => onClose()}
    >
      <div
        className="bg-white rounded-lg p-8 w-full max-w-md relative "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {children}
      </div>
    </div>
  );
}
