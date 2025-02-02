import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";

import TokenName from "@/constants/TokenName";

const getAuthOrRedirect = async () => {
  const cookieStore = await cookies();
  const authToken = cookieStore.get(TokenName);

  if (!authToken) {
    redirect("/login");
  }

  return authToken;
};

export default async function UserAccountPage() {
  const token = await getAuthOrRedirect();

  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">{/*  */}</main>

      <Footer />
    </div>
  );
}
