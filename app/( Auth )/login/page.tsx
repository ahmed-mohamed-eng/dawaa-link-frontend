import React from "react";

import LoginForm from "@/components/login/login-form";
import TitleText from "@/components/common/simple/title-text";

type Props = {
  params: Promise<{ lang: string }>;
};

export default async function LoginInPage(props: Props) {
  const params = await props.params;

  return (
    <div className="flex flex-col w-screen h-screen">
      <main className="flex flex-col items-center justify-center space-y-8 w-full h-full">
        <TitleText sizes="3xl" text="Dawaa Link" />
        <LoginForm locale={params.lang} />
      </main>
    </div>
  );
}
