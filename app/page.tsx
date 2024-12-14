import Link from "next/link";
import Image from "next/image";

import NavHeader from "@/components/home/NavHeader";
import InfoHeader from "@/components/home/InfoHeader";
import HeroContent from "@/components/home/HeroContent";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />
      <NavHeader />

      <main className="w-full flex flex-col">
        <HeroContent />

        {/* About Us Brief */}
        <div className="w-full px-10">
          {/* Content */}
          <div className="w-full grid grid-cols-2">
            {/* Images */}
            <div className="w-full h-[26rem] relative">
              <Image
                className="absolute top-0 left-0 -z-50"
                alt="Normal Image"
                src="/placeholder.png"
                width={350}
                height={350}
              />

              <Image
                className="absolute top-4 right-12 -z-50"
                alt="Normal Image"
                src="/dots.svg"
                width={270}
                height={50}
              />

              <div className="w-[30rem] h-72 absolute bottom-0 right-6 -z-40 border-4 border-white shadow-md rounded-2xl">
                <Image
                  className="w-full h-full rounded-2xl"
                  alt="Normal Image"
                  src="/placeholder.png"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col items-start justify-start pl-20 space-y-6">
              {/* Header */}
              <div className="flex flex-col items-start justify-start space-y-2">
                <span className="tracking-widest text-[#00A6FB]">About Us</span>

                <h2 className="w-4/5 text-3xl font-bold leading-relaxed">
                  Achieving Better Health Care One Patient Time.
                </h2>
              </div>

              <p className="w-full">
                Maecenas egestas pellentesque odio. Proin et lectus erat. Donec
                ultricies sem id nibh dapibus, quis rutrum odio vulputate. Morbi
                a sem et est congue aliquet quis sed nisl. Mauris dolor felis,
                laoreet eget elementum sed, vehicula id risus.
              </p>

              <p className="w-full">
                Maecenas egestas pellentesque odio. Proin et lectus erat. Donec
                ultricies sem id nibh dapibus, quis rutrum odio vulputate. Morbi
                a sem et est congue aliquet quis sed nisl.
              </p>
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
