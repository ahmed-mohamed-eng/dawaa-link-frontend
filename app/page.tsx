import axios from "axios";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import HeroContent from "@/components/home/HeroContent";
import ContactInfo from "@/components/home/ContactInfo";
import AboutUsBrief from "@/components/home/AboutUsBrief";
import Top10Sellers from "@/components/home/Top10Sellers";
import ImagesDivider from "@/components/home/ImagesDivider";
import ClientReviews from "@/components/home/ClientReviews";
import DealsOfTheWeek from "@/components/home/DealsOfTheWeek";
import EmergencyBanner from "@/components/home/EmergencyBanner";
import LatestNewsAndBlog from "@/components/home/LatestNewsAndBlog";
import AwardsSmallSection from "@/components/home/AwardsSmallSection";
import CategorizedProducts from "@/components/home/CategorizedProducts";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";

import BASE_URL from "@/constants/BaseURL";

const getHomePageData = async () => {
  const url = `${BASE_URL}/client/home`;

  try {
    const res = await axios.get(url);
    return res.data?.data;
  } catch (error) {
    console.error(error);
    return;
  }
};

export default async function Home() {
  const data = await getHomePageData();
 
  console.log(data );

  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <AboutUsBrief />
        <ImagesDivider />
        <CategorizedProducts categories={data?.categories || []} />
        <DealsOfTheWeek />
        <Top10Sellers />
        <EmergencyBanner />
        <PlatformFeatureIcons />
        <LatestNewsAndBlog />
        <AwardsSmallSection />
        <ClientReviews />
        <ContactInfo />
      </main>

      <Footer />
    </div>
  );
}
