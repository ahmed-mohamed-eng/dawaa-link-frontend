import Image from "next/image";
import { Link } from "@/i18n/routing";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col relative">
      {/* Info */}
      <div className="w-full h-96 xl:h-[55rem] relative">
        <Image
          alt="Hero"
          className="rounded-3xl -z-50"
          src="/hero-image.png"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="h-full w-full flex flex-col items-center justify-center px-4 xl:px-48 font-bold space-y-4 xl:space-y-8">
          <Image
            className="hidden xl:block"
            alt="No page with the given name"
            src="/not-found.svg"
            width={825}
            height={360}
          />

          <Image
            className="block xl:hidden"
            alt="No page with the given name"
            src="/not-found.svg"
            width={200}
            height={125}
          />

          <h1 className="w-full text-xl xl:text-5xl text-center text-[#023E8A]">
            Opps ! The Page Not Found.
          </h1>

          <p className="w-full text-xs xl:text-lg text-center text-[#023E8A] font-thin">
            Proin non eros elementum, sagittis diam at, feugiat nunc. Ut velit
            arcu, posuere at neque quis, vestibulum vehicula dui. Praesent at
            felis ante. Cras sed ultricies risus. Nullam porta fermentum
            egestas. Praesent quis mauris ultrices.
          </p>

          <Link
            href="/"
            className="bg-[#2A9BED] px-12 py-2 xl:py-3 rounded-md font-black text-white text-sm xl:text-xl capitalize"
          >
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
