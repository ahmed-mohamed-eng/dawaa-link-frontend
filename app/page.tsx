import Header from "@/components/common/medium/header";
import ActionHeader from "@/components/home/action-header";
import AdBanner from "@/components/home/ad-banner";
import HeroSection from "@/components/home/hero-section";
import MainCategories from "@/components/home/main-categories";
import NavigationHeader from "@/components/home/navigation-header";
import PopularProducts from "@/components/home/popular-products";
import SelectedProducts from "@/components/home/selected-products";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <Header />
      <ActionHeader />
      <NavigationHeader />

      <main className="w-full px-8 flex flex-col">
        <HeroSection />
        <MainCategories />
        <PopularProducts />
        <AdBanner />
        <SelectedProducts />
      </main>
    </div>
  );
}
