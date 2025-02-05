import React from "react";

import Footer from "@/components/Footer";
import NavHeader from "@/components/home/NavHeader";
import ContactInfo from "@/components/home/ContactInfo";
import ClientReviews from "@/components/home/ClientReviews";
import EmergencyBanner from "@/components/home/EmergencyBanner";
import LatestNewsAndBlog from "@/components/home/LatestNewsAndBlog";
import AwardsSmallSection from "@/components/home/AwardsSmallSection";
import PlatformFeatureIcons from "@/components/home/PlatformFeatureIcons";

import AboutUsBrief from "@/components/home/AboutUsBrief";
import HeroContent from "@/components/about-us/HeroContent";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />
        <AboutUsBrief />
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
