import Link from "next/link";
import Image from "next/image";

const AwardsSmallSection = () => {
  return (
    <div className="pb-40 w-full">
      <div className="w-full px-20 flex flex-col items-start justify-start space-y-24">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center justify-start space-x-16">
            <h3 className="text-4xl font-bold">Our Awards</h3>
            <p className="w-[28rem] px-11 border-l border-[#565656] text-[#565656]">
              Morbi tristique, felis et ullamcorper fermentum, mi neque pulvinar
              mauris, nec viverra massa dui a lacus. Praesent lobortis nisi eget
              sapien aliquet bibendum.
            </p>
          </div>
          <Link
            href="/awards"
            className="font-bold text-lg text-white bg-[#023E8A] px-5 py-3 rounded-full"
          >
            Our Awards
          </Link>
        </div>

        {/* Logos */}
        <div className="w-full flex items-center justify-between">
          <Image
            alt="Vintage Company"
            src="/companies/vintage.svg"
            width={200}
            height={50}
          />
          <Image
            alt="Burnfox Company"
            src="/companies/burnfox.svg"
            width={200}
            height={50}
          />
          <Image
            alt="Hanly Company"
            src="/companies/hanly.svg"
            width={200}
            height={50}
          />
          <Image
            alt="Hential Company"
            src="/companies/hential.svg"
            width={200}
            height={50}
          />
          <Image
            alt="Extensive Company"
            src="/companies/extensive.svg"
            width={200}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

export default AwardsSmallSection;
