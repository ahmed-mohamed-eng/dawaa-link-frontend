import React from "react";
import { Link, redirect } from "@/i18n/routing";
import { headers } from "next/headers";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import LoginForm from "@/components/login/LoginForm";

import LOGIN_URL from "@/constants/LoginUrl";

const checkAuthOrRedirect = async () => {
  const headerData = await headers();
  const lang = headerData.get("Accept-Language") || "";

  redirect({
    href: LOGIN_URL,
    locale: lang.includes("en") ? "en" : "ar",
  });

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
            <Link
              href="https://dawaa-link-dashboard.vercel.app/dawwaLink_dashboard/auth/register/company"
              className="text-[#00A6FB]"
            >
              Create Account
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
