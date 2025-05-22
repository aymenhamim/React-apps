"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
// import { redirect } from "next/dist/server/api-utils";
import { axiosInstance } from "@/store/slices/productsSlice";
import { createKey } from "next/dist/shared/lib/router/router";
import { useRouter } from "next/navigation";
import { useState } from "react";

const API_BASE_URL = "/backend";

const formSchema = z.object({
  email: z.string().email({ message: "Adresse e-mail invalide" }),
  password: z.string().min(5, { message: "Password invalide" }),
});

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  const router = useRouter();
  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data) => {
    try {
      await axiosInstance.get(`${API_BASE_URL}/sanctum/csrf-cookie`);

      await axiosInstance.post(`${API_BASE_URL}/login`, data);

      // ? Redirect to dashboard
      router.push("/admin/dashboard");
    } catch (error) {
      console.log("Login error:", error);

      if (error.response?.status === 422) {
        const errors = error.response?.data?.message;
        if (errors) {
          setLoginError("Invalid credentials. Please try again.");
        }
      } else {
        setLoginError("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="max-sm:h-fit w-[60%] max-lg:w-full flex items-center justify-center max-lg:pb-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[30rem] max-xl:w-[25rem] max-lg:w-[30rem] max-sm:w-[28rem]  rounded-2xl shadow-lg"
      >
        <h2 className="text-center my-10 text-3xl font-bold">Login Form</h2>

        <div className="my-10 w-[80%] mx-auto flex flex-col gap-10">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type={"email"} {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password">password</Label>
            <Input type={"password"} {...register("password")} />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}

            {loginError && (
              <p className="text-red-500 text-sm mt-2">{loginError}</p>
            )}
          </div>

          <div>
            <Button type="submit" className="w-full cursor-pointer">
              {/* <Link href="/admin/dashboard">Login</Link> */}
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
