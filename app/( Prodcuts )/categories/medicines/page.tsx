import React from "react";

import Footer from "@/components/common/complex/footer";
import NavigationHeader from "@/components/home/navigation-header";

export default function MedicinesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationHeader />

      <main className="w-full px-8 flex flex-col"></main>

      <Footer />
    </div>
  );
}
