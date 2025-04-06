"use client";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { signUpSchema } from "@/app/api/auth/sign-up/route";
import { useState } from "react";
import UserName from "../_components/UserName";
import Email from "../_components/EmailForm";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter()
  const [step, setStep] = useState<"username" | "emailAndPassword">('username')
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const signUp = async (values: z.infer<typeof signUpSchema>) => {
    try {
      const response = await axios.post("api/auth/sign-up", {
        email: values.email,
        password: values.password,
        username: values.username,
      });

      console.log(response);
      router.push('/sign-in')
    } catch (error) {
      console.log(error);
      form.setError('email', {message:'email already used'})
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(signUp)} className="w-[407px]">
        {step === "username" && (<UserName form={form} setStep={setStep} />)}
        {step === "emailAndPassword" && (<Email form={form}/>)}
      </form>
    </FormProvider>
  );
}
