import Header from "@/components/header";
import ActionHeader from "@/components/home/action-header";
import HeroSection from "@/components/home/hero-section";
import NavigationHeader from "@/components/home/navigation-header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ActionHeader />
      <NavigationHeader />

      <main className="w-full px-8 flex flex-col">
        <HeroSection />
      </main>
    </div>
  );
}
