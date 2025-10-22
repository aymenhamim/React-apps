"use client";

// import { login } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "@/store/store";
import { useAppSelector } from "@/store/hooks";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("aymenhamim@gmail.com");
  const [password, setPassword] = useState("hamim123");
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useAppSelector((state) => state.auth);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const resultAction = await dispatch(login({ email, password }));

      if (login.fulfilled.match(resultAction)) {
        router.push("/home");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
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
              {loading ? "loading.." : "Login"}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
