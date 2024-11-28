import React from "react";

import TitleText from "@/components/common/simple/title-text";
import RegisterForm from "@/components/register/register-form";

export default function RegisterPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <main className="flex flex-col items-center justify-center space-y-8 w-full h-full">
        <TitleText sizes="3xl" text="Dawaa Link" />

        <RegisterForm />
      </main>
    </div>
  );
}
