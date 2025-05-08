"use server";

import { signIn } from "./auth";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account", // redirect to account page after sign in
  });
}
