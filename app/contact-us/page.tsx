import React from "react";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import HeroContent from "@/components/contact-us/HeroContent";
import ContactContainer from "@/components/contact-us/ContactContainer";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <ContactContainer />
      </main>

      <Footer />
    </div>
  );
}
