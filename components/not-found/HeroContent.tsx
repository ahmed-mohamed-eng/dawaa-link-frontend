import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col relative">
      {/* Info */}
      <div className="w-full h-[55rem] relative">
        <Image
          alt="Hero"
          className="rounded-3xl -z-50"
          src="/hero-image.png"
          fill
          style={{ objectFit: "cover" }}
        />

        <div className="h-full w-full flex flex-col items-center justify-center px-48 font-bold space-y-8">
          <Image
            alt="No page with the given name"
            src="/not-found.svg"
            width={825}
            height={360}
          />
          <h1 className="w-full text-5xl text-center text-[#023E8A]">
            Opps ! The Page Not Found.
          </h1>
          <p className="w-full text-lg text-center text-[#023E8A] font-thin">
            Proin non eros elementum, sagittis diam at, feugiat nunc. Ut velit
            arcu, posuere at neque quis, vestibulum vehicula dui. Praesent at
            felis ante. Cras sed ultricies risus. Nullam porta fermentum
            egestas. Praesent quis mauris ultrices.
          </p>

          <Link
            href="/"
            className="bg-[#2A9BED] px-12 py-3 rounded-md font-black text-white text-xl capitalize"
          >
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
