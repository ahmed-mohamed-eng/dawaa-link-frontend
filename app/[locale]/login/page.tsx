import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import LoginForm from "@/components/login/LoginForm";

export default function LoginInPage() {
  const t = useTranslations("LoginPage.createAccount");

  return (
    <div className="flex flex-col justify-between min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex ">
        <div className="flex-[2] flex-col py-16">
          <LoginForm />

          <div className="mt-4 w-full flex items-center justify-center">
            <p>
              <span>{t("title")}</span>
              <Link
                href="https://dawaa-link-dashboard.vercel.app/dashboard/auth/register/company"
                className="text-[#00A6FB] mx-1"
              >
                {t("linkName")}
              </Link>
            </p>
          </div>
        </div>

        <div className="flex-1 p-32">
          <div className="w-full h-full relative">
            <Image
              className="w-full h-full"
              src="/dawwa-logo-trans.png"
              fill
              alt="Dawaa Link Logo"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
