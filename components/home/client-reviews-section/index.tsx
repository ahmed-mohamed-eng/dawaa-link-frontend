import React from "react";

import NavCircles from "@/components/common/simple/nav-circles";
import ClientReviewBox from "@/components/common/complex/client-review-box";

const ClientReviewsSection = () => {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex items-center justify-center space-x-4">
        <ClientReviewBox
          clientImgURL="/person.png"
          clientName="Esther Howard"
          clientReview="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
        />

        <ClientReviewBox
          clientImgURL="/person.png"
          clientName="Esther Howard"
          clientReview="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
        />

        <ClientReviewBox
          clientImgURL="/person.png"
          clientName="Esther Howard"
          clientReview="Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque."
        />
      </div>

      <NavCircles pageCount={3} />
    </div>
  );
};

export default ClientReviewsSection;
