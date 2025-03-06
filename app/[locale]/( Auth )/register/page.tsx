import React from "react";
import Image from "next/image";
import { Link, redirect } from "@/i18n/routing";
import { cookies } from "next/headers";

import Footer from "@/components/Footer";
import TokenName from "@/constants/TokenName";
import NavHeader from "@/components/home/NavHeader";
import RegisterForm from "@/components/register/RegisterForm";

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

export default async function RegisterPage() {
  await checkAuthOrRedirect();

  return (
    <div className="flex flex-col justify-between min-h-screen p-5">
      <NavHeader />

      <main className="mb-12 w-full py-16 bg-[#00A6FB] rounded-xl grid grid-cols-6 gap-4">
        <div className="flex flex-col items-end justify-start space-y-4 col-span-3">
          <RegisterForm />
          <div className="px-8 w-full flex items-center justify-start">
            <p>
              <span>If you have an account ? </span>
              <Link href="/login" className="text-white font-bold">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center col-span-3">
          <Link href="/" className="bg-white p-4 rounded-lg">
            <Image
              className="hidden xl:inline-block"
              alt="Welcome to DawaaLink"
              src="/logo.svg"
              width={213}
              height={43}
            />

            <Image
              className="inline-block xl:hidden"
              alt="Welcome to DawaaLink"
              src="/logo.svg"
              width={100}
              height={30}
            />
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
