"use client";

import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { CardWrapper } from "./card-wrapper";
import { registerSchema } from "@/schemas";
import { register } from "@/actions/register";

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

export const RegisterForm = () => {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    setError("");

    startTransition(async () => {
      try {
        const res = await register(values);

        if (res?.error) {
          setError(res.error);
          return;
        }

        if (res?.success) {
          form.reset();
          router.replace("/auth/login");
          router.refresh();
        }
      } catch {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <div className="mt-8">
      <CardWrapper
        headerLabel="Create an account"
        backButtonLabel="Already have an account?"
        backButtonHref="/auth/login"
        backButtonLink="Login"
        showSocial
        headerTitle="Register here"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your name"
                        type="text"
                        autoComplete="name"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your password"
                        type="password"
                        autoComplete="new-password"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormError message={error} />

            <Button className="w-full" type="submit" disabled={isPending}>
              {isPending ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </Form>
      </CardWrapper>
    </div>
  );
};
