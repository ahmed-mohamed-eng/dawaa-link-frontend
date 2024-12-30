import React from "react";
import type { Metadata } from "next";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import HeroContent from "@/components/contact-us/HeroContent";
import OurLocationMap from "@/components/contact-us/OurLocationMap";
import ContactContainer from "@/components/contact-us/ContactContainer";

export const metadata: Metadata = {
  title: "Dawaa Link - Contact Us",
  description: "Find Us We ARE Near You.",

};

export default function ContactUsPage() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <ContactContainer />
        <OurLocationMap />
      </main>

      <Footer />
    </div>
  );
}
