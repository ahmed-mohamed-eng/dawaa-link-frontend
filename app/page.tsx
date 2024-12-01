import Footer from "@/components/common/complex/footer";
import Header from "@/components/common/medium/header";
import ActionHeader from "@/components/home/action-header";
import AdBanner from "@/components/home/ad-banner";
import HeroSection from "@/components/home/hero-section";
import MainCategories from "@/components/home/main-categories";
import NavigationHeader from "@/components/home/navigation-header";
import PopularProducts from "@/components/home/popular-products";
import SelectedProducts from "@/components/home/selected-products";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
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

      <Footer />
    </div>
  );
}
