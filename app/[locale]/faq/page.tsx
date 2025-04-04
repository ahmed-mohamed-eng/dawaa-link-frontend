import React from "react";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import HeroContent from "@/components/faq/HeroContent";
import FAQContainer from "@/components/faq/FAQContainer";

const FAQPage = () => {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <FAQContainer />
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage;
