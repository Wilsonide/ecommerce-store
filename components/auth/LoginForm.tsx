"use client";

import React, { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "./card-wrapper";
import { loginSchema } from "@/schemas";
import { login } from "@/actions/login";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const LoginForm = () => {
  const searchParams = useSearchParams();

  // Support both callback parameter names for compatibility.
  const callbackUrl =
    searchParams.get("callbackUrl") ?? searchParams.get("callback");

  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with a different provider"
      : "";

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          }
        })
        .catch(() => {
          setError("Something went wrong");
        });
    });
  };

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonLink="Signup"
      backButtonHref="/auth/register"
      showSocial
      headerTitle="Login here"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your email address"
                      type="email"
                      autoComplete="email"
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>

                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="h-auto px-0 font-normal"
                    >
                      <Link href="/auth/reset">Forgot password?</Link>
                    </Button>
                  </div>

                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter your password"
                      type="password"
                      autoComplete="current-password"
                      disabled={isPending}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error || urlError} />
          <FormSuccess message={success} />

          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
