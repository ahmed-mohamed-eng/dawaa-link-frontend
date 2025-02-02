import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/Footer";
import LoginForm from "@/components/login/LoginForm";
import InfoHeader from "@/components/home/InfoHeader";

import TokenName from "@/constants/TokenName";

const checkAuthOrRedirect = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(TokenName);

  if (authToken) {
    redirect("/account");
  }

  return;
};

export default async function LoginInPage() {
  await checkAuthOrRedirect();

  return (
    <div className="flex flex-col justify-between min-h-screen p-5">
      <InfoHeader />

      <main className="w-full flex flex-col py-16">
        <LoginForm />

        <div className="mt-4 w-full flex items-center justify-center">
          <p>
            If you don&apos;t have an account{" "}
            <Link href="/register">Create Account</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
