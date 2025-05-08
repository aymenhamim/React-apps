"use server";

import { signIn, signOut } from "./auth";

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account", // redirect to account page after sign in
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
