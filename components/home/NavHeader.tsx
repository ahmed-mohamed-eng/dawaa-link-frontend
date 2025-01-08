import Link from "next/link";
import Image from "next/image";

const NavHeader = () => {
  return (
    <nav className="w-full flex items-center justify-between py-4 lg:px-20 lg:py-8 space-x-2 lg:space-x-0">
      <Image
        className="hidden lg:inline-block"
        alt="Welcome to DawaaLink"
        src="/logo.svg"
        width={213}
        height={43}
      />

      <Image
        className="inline-block lg:hidden"
        alt="Welcome to DawaaLink"
        src="/logo.svg"
        width={100}
        height={30}
      />

      {/* Search Box */}
      <div className="w-2/3 lg:w-96 p-4 lg:px-8 lg:py-4 rounded-full flex items-center justify-between bg-[#F3F3F3]">
        <input
          type="text"
          className="w-[80%] bg-inherit outline-none text-sm lg:text-base"
          placeholder="Search For Product"
        />

        <button>
          <Image
            className="hidden lg:inline-block"
            alt="Search For Product"
            src="/search.svg"
            width={20}
            height={20}
          />

          <Image
            className="inline-block lg:hidden"
            alt="Search For Product"
            src="/search.svg"
            width={15}
            height={15}
          />
        </button>
      </div>

      {/* nav list */}
      <div className="hidden lg:flex items-center space-x-12 font-bold text-[#023E8A]">
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
      <div className="hidden lg:flex items-center justify-start space-x-4">
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
          <Image alt="Go to Wishlist" src="/heart.svg" width={25} height={25} />
          {/* <span className="w-4 h-4 text-xs bg-[#00A6FB] text-white flex items-center justify-center rounded-full absolute top-0 right-0">
          4
        </span> */}
        </div>
      </div>
    </nav>
  );
};

export default NavHeader;
