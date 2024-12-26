import Image from "next/image";

import React from "react";

const AdvertiseImage = () => {
  return (
    <div className="relative w-full h-[30rem]">
      <Image
        className="rounded-xl"
        alt="Image"
        src="/placeholder.png"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default AdvertiseImage;
