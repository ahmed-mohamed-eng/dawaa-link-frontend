import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/Footer";
import TokenName from "@/constants/TokenName";
import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import RegisterForm from "@/components/register/RegisterForm";

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
    <div className="flex flex-col justify-between min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col py-16">
        <RegisterForm />

        <div className="mt-4 w-full flex items-center justify-center">
          <p>
            <span>If you have an account </span>
            <Link href="/login">Login</Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
