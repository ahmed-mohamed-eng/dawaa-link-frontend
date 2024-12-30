import Image from "next/image";

const AboutUsBrief = () => {
  return (
    <div className="w-full pb-16">
      <div className="w-full px-10">
        {/* Content */}
        <div className="w-full grid grid-cols-2">
          {/* Images */}
          <div className="w-full relative">
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
          <div className="flex flex-col items-start justify-start pl-20">
            {/* Header */}
            <div className="flex flex-col items-start justify-start space-y-2">
              <span className="tracking-widest text-[#00A6FB]">About Us</span>

              <h2 className="w-4/5 text-3xl font-bold leading-relaxed">
                Achieving Better Health Care One Patient Time.
              </h2>
            </div>

            <p className="w-full mt-12">
              Maecenas egestas pellentesque odio. Proin et lectus erat. Donec
              ultricies sem id nibh dapibus, quis rutrum odio vulputate. Morbi a
              sem et est congue aliquet quis sed nisl. Mauris dolor felis,
              laoreet eget elementum sed, vehicula id risus.
            </p>

            <p className="w-full mt-6">
              Maecenas egestas pellentesque odio. Proin et lectus erat. Donec
              ultricies sem id nibh dapibus, quis rutrum odio vulputate. Morbi a
              sem et est congue aliquet quis sed nisl.
            </p>

            {/* Feature */}
            <div className="w-full flex items-center justify-between mt-9">
              {/* Feature Display */}
              <div className="flex-1 flex items-center justify-start space-x-5">
                <div className="w-7 h-7 rounded-full border border-[#444444] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#00A6FB]" />
                </div>

                <p className="font-bold">Personalized Consultations</p>
              </div>

              {/* Feature Display */}
              <div className="flex-1 flex items-center justify-start space-x-5">
                <div className="w-7 h-7 rounded-full border border-[#444444] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#00A6FB]" />
                </div>

                <p className="font-bold">Personalized Consultations</p>
              </div>
            </div>

            <button className="mt-16 px-7 py-5 rounded-full bg-[#00A6FB] font-bold text-white">
              Discover More
            </button>
          </div>
        </div>
        {/* Logo of Companies */}
        <div className="mt-24 w-full flex flex-col items-center justify-center space-y-14">
          {/* Companies */}
          <div className="w-full flex items-center justify-center divide-x divide-[#707070]">
            {/* Company */}
            <div className="px-10">
              <div className="relative w-52 h-16">
                <Image
                  className="w-full h-full"
                  alt="Company A"
                  src="/companies/dental.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Company */}
            <div className="px-10">
              <div className="relative w-52 h-16">
                <Image
                  className="w-full h-full"
                  alt="Company A"
                  src="/companies/dental-care.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Company */}
            <div className="px-10">
              <div className="relative w-52 h-16">
                <Image
                  className="w-full h-full"
                  alt="Company A"
                  src="/companies/doctor.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Company */}
            <div className="px-10">
              <div className="relative w-52 h-16">
                <Image
                  className="w-full h-full"
                  alt="Company A"
                  src="/companies/great-dental.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>

            {/* Company */}
            <div className="px-10">
              <div className="relative w-52 h-16">
                <Image
                  className="w-full h-full"
                  alt="Company A"
                  src="/companies/medical-care.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
          {/* Disclaimer */}
          <p className="w-full text-[#2A9BED] text-center">
            Trusted by 10,000+ Companies around the world
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBrief;
