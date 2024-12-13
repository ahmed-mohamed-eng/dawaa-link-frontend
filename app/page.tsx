import Link from "next/link";
import Image from "next/image";

import InfoHeader from "@/components/home/InfoHeader";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen p-5">
      <InfoHeader />

      {/* Nav Header */}
      <nav className="w-full flex items-center justify-between px-20 py-8">
        <Image
          alt="Welcome to DawaaLink"
          src="/logo.svg"
          width={213}
          height={43}
        />

        {/* Search Box */}
        <div className="w-96 px-8 py-4 rounded-full flex items-center justify-between bg-[#F3F3F3]">
          <input
            type="text"
            className="w-[80%] bg-inherit outline-none"
            placeholder="Search For Product"
          />

          <button>
            <Image
              alt="Search For Product"
              src="/search.svg"
              width={20}
              height={20}
            />
          </button>
        </div>

        {/* nav list */}
        <div className="flex items-center space-x-12 font-bold text-[#023E8A]">
          <Link
            href="/"
            data-selected={true}
            className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
          >
            {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
            <span>Home</span>
          </Link>
          <Link
            href="/about-us"
            data-selected={true}
            className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
          >
            {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
            <span>About Us</span>
          </Link>
          <Link
            href="/pages"
            data-selected={true}
            className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
          >
            {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
            <span>Pages</span>
          </Link>
          <Link
            href="/products"
            data-selected={true}
            className="data-selected:text-[#FF922E] flex items-center justify-start space-x-2"
          >
            {/* <span className="w-2 h-2 bg-[#FF922E] rounded-full" /> */}
            <span>Products</span>
          </Link>
        </div>

        {/* User Info */}
        <div className="flex items-center justify-start space-x-4">
          {/* Cart */}
          <div className="relative p-2">
            <Link href="/cart">
              <Image alt="Go to Cart" src="/cart.svg" width={25} height={25} />
            </Link>
            <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
              4
            </span>
          </div>

          {/* User */}
          <div className="relative p-2">
            <Link href="/account">
              <Image
                alt="Go to Account"
                src="/account.svg"
                width={25}
                height={25}
              />
            </Link>
            {/* <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
              4
            </span> */}
          </div>

          {/* Wishlist */}
          <div className="relative p-2">
            <Image
              alt="Go to Wishlist"
              src="/heart.svg"
              width={25}
              height={25}
            />
            {/* <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
              4
            </span> */}
          </div>
        </div>
      </nav>

      <main className="w-full flex flex-col">
        {/* Hero Content */}
        <div className="w-full flex flex-col">
          {/* Info */}
          <div className="w-full h-[37rem] relative">
            <Image
              alt="Hero"
              className="rounded-3xl -z-50"
              src="/hero-image.png"
              fill
              style={{ objectFit: "cover" }}
            />

            <div className="h-full w-full flex flex-col items-start justify-center px-48 font-bold">
              <div className="flex flex-col items-start justify-start space-y-2">
                <span>Health Care</span>
                <h1 className="text-5xl w-[38rem] leading-tight">
                  A Dose of Care A World Your Health Commitment
                </h1>
              </div>
              <p className="mt-2 w-[38rem] font-thin">
                Mauris volutpat interdum mauris, ut porttitor urna ullamcorper
                ut. Integer accumsan ligula non metus ornare eleifend. Morbi
                urna massa, commodonec.
              </p>

              <div className="flex items-center justify-start space-x-10 mt-9">
                <button className="bg-[#00A6FB] text-center text-white font-bold px-8 py-4 rounded-full">
                  Join For Free
                </button>

                <div className="flex items-center justify-start space-x-6">
                  <button>
                    <Image
                      alt="Play Video"
                      src="/play-vid.svg"
                      width={50}
                      height={50}
                    />
                  </button>

                  <span>Watch How It Works</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
