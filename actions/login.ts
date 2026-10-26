"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { loginSchema } from "@/schemas";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (
  values: z.infer<typeof loginSchema>,
  callbackUrl?: string | null,
) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Invalid credentials" };
  }

  // Prevent open redirects by accepting only local application paths.
  const safeCallbackUrl =
    callbackUrl &&
    callbackUrl.startsWith("/") &&
    !callbackUrl.startsWith("//") &&
    !callbackUrl.includes("\\")
      ? callbackUrl
      : DEFAULT_LOGIN_REDIRECT;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: safeCallbackUrl,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    // Auth.js redirects are thrown and must not be swallowed.
    throw error;
  }
};
