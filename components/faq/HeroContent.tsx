import Image from "next/image";

const HeroContent = () => {
  return (
    <div className="w-full pb-10 xl:pb-20">
      <div className="w-full flex flex-col relative">
        {/* Info */}
        <div className="w-full h-80 relative">
          <Image
            alt="Hero"
            className="rounded-3xl -z-50"
            src="/hero-image.png"
            fill
            style={{ objectFit: "cover" }}
          />

          <div className="h-full w-full flex flex-col items-start justify-center xl:px-48 font-bold">
            <h1 className="w-full text-4xl text-center text-[#023E8A]">FAQ</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
