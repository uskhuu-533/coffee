/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Coffee } from "lucide-react";
import SignUpForm from "./_features/SignUpForm";
export default function Home() {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-1/2 h-full bg-[#FBBF24] flex items-center justify-center relative">
        <div className="flex gap-3 top-8 left-20 absolute items-center">
          <Coffee size={20} />
          <p className="text-xl font-bold">By me coffee</p>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <img src="logo.svg" alt="logo" className="w-[240px] h-[240px]" />
          <div className="text-lg font-bold">Fund your creative work</div>
          <p className="text-sm w-[445px] text-center">
            Accept support. Start a membership. Setup a shop. It&apos;s easier than
            you think.
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center relative">
        <Button className="absolute top-8 right-20 bg-[#F4F4F5] text-black cursor-pointer">sign in</Button>
        <SignUpForm/>
      </div>
    </div>
  );
}
