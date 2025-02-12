import Link from "next/link";

import LogoSection from "./LogoSection";

const Content = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-start xl:justify-between space-y-6 xl:space-y-0">
      {/* Logo */}
      <LogoSection />

      {/* Company Info Nav Section */}
      <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
        <p className="font-bold text-2xl">Company</p>

        <div className="flex flex-col items-start justify-start space-y-2 xl:space-y-5">
          <Link href="/about">About</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/policy">Privacy Policy</Link>
          <Link href="/terms">Terms of use</Link>
        </div>
      </div>

      {/* Company Info Nav Section */}
      <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
        <p className="font-bold text-2xl">Help & Support</p>

        <div className="flex flex-col items-start justify-start space-y-2 xl:space-y-5">
          <Link href="/support">Support</Link>
          <Link href="/location">Locate us</Link>
          <Link href="/contact-us">Contact Us</Link>
          <Link href="/login">Login</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </div>

      {/* Company Info Nav Section */}
      <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
        <p className="font-bold text-2xl">Services Cities</p>

        <div className="flex flex-col items-start justify-start space-y-2 xl:space-y-5">
          <Link href="/location">New York</Link>
          <Link href="/location">Los Angeles</Link>
          <Link href="/location">Chicago</Link>
          <Link href="/location">Houston</Link>
          <Link href="/location">Washington</Link>
        </div>
      </div>
    </div>
  );
};

export default Content;
