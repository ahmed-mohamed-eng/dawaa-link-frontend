import axios from "axios";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import HeroContent from "@/components/home/HeroContent";
import ContactInfo from "@/components/home/ContactInfo";
import AboutUsBrief from "@/components/home/AboutUsBrief";
import Top10Sellers from "@/components/home/Top10Sellers";
import DealsOfTheWeek from "@/components/home/DealsOfTheWeek";
import CategorizedProducts from "@/components/home/CategorizedProducts";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";

import BASE_URL from "@/constants/BaseURL";
import HomePageData from "@/types/pages-data/HomePageData.type";

type HomeDataResponse = {
  data: HomePageData;
  message: string;
  status: string | boolean;
};

const getHomePageData = async () => {
  const url = `${BASE_URL}/client/home`;

  try {
    const res = await axios.get<HomeDataResponse>(url);
    return res.data?.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export default async function Home() {
  const data = await getHomePageData();

  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent products={data?.products || []} />
        <AboutUsBrief />
        <CategorizedProducts
          categories={data?.categories || []}
          products={data?.products || []}
        />
        <DealsOfTheWeek offeredProducts={data?.offers || []} />
        <Top10Sellers products={data?.top_product || []} />
        <PlatformFeatureIcons />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}
