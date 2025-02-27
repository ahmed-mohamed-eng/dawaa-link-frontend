import React from "react";
import { Link, redirect } from "@/i18n/routing";
import { cookies } from "next/headers";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import LoginForm from "@/components/login/LoginForm";

import TokenName from "@/constants/TokenName";

const checkAuthOrRedirect = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(TokenName);

  if (authToken) {
    redirect({
      href: "/account",
      locale: "en",
    });
  }

  return;
};

export default async function LoginInPage() {
  await checkAuthOrRedirect();

  return (
    <div className="flex flex-col justify-between min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col py-16">
        <LoginForm />

        <div className="mt-4 w-full flex items-center justify-center">
          <p>
            <span> If you don&apos;t have an account </span>
            <Link href="/register">Create Account</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
