"use client";

import { login } from "@/api/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("aymenhamim@gmail.com");
  const [password, setPassword] = useState("hamim123");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await login({ email, password });

    if (res.status == 200) {
      router.push("/home");
    }

    console.log("Login success:", res.data.user);
  }

  return (
    <div className="max-sm:h-fit w-[60%] max-lg:w-full flex items-center justify-center max-lg:pb-20">
      <form
        className="bg-white w-[30rem] max-xl:w-[25rem] max-lg:w-[30rem] max-sm:w-[28rem]  rounded-2xl shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center my-10 text-3xl font-bold">Login Form</h2>

        <div className="my-10 w-[80%] mx-auto flex flex-col gap-10">
          <div>
            <Input
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* <Label htmlFor="email">Email</Label> */}
            {/* {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )} */}
          </div>

          <div>
            <Input
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* <Label htmlFor="password">password</Label> */}
            {/* {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )} */}

            {/* {loginError && (
              <p className="text-red-500 text-sm mt-2">{loginError}</p>
            )} */}
          </div>

          <div>
            <Button type="submit" className="w-full cursor-pointer">
              Login
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
