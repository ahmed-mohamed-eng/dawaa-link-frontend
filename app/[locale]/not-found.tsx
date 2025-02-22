import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import HeroContent from "@/components/not-found/HeroContent";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
