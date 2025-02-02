import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import TitleText from "@/components/common/simple/title-text";
import TokenName from "@/constants/TokenName";

const checkAuthOrRedirect = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(TokenName);

  if (authToken) {
    redirect("/account");
  }

  return;
};

export default async function RegisterPage() {
  await checkAuthOrRedirect();

  return (
    <div className="flex flex-col w-screen h-screen">
      <main className="flex flex-col items-center justify-center space-y-8 w-full h-full">
        <TitleText sizes="3xl" text="Dawaa Link" />
      </main>
    </div>
  );
}
