import { cookies } from "next/headers";
import { redirect } from "@/i18n/routing";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";

import LOGIN_URL from "@/constants/LoginUrl";
import TokenName from "@/constants/TokenName";

const getAuthOrRedirect = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(TokenName);

  if (!authToken) {
    redirect({
      href: LOGIN_URL,
      locale: "ar",
    });
  }

  return authToken;
};

export default async function UserAccountPage() {
  await getAuthOrRedirect();

  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">{/*  */}</main>

      <Footer />
    </div>
  );
}
