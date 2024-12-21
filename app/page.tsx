import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import HeroContent from "@/components/home/HeroContent";
import AboutUsBrief from "@/components/home/AboutUsBrief";
import Top10Sellers from "@/components/home/Top10Sellers";
import ImagesDivider from "@/components/home/ImagesDivider";
import DealsOfTheWeek from "@/components/home/DealsOfTheWeek";
import CategorizedProducts from "@/components/home/CategorizedProducts";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <AboutUsBrief />
        <ImagesDivider />
        <CategorizedProducts />
        <DealsOfTheWeek />
        <Top10Sellers />
      </main>
    </div>
  );
}
