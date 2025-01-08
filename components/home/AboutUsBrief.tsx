import Image from "next/image";

const AboutUsBrief = () => {
  return (
    <div className="w-full lg:px-10 pt-10 lg:pt-0">
      {/* Content */}
      <div className="w-full grid grid-cols-2">
        {/* Images */}
        <div className="hidden lg:block w-full relative">
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
        <div className="col-span-2 lg:col-span-1 flex flex-col items-start justify-start lg:pl-20">
          {/* Header */}
          <div className="flex flex-col items-start justify-start space-y-2">
            <span className="tracking-widest text-[#00A6FB]">About Us</span>

            <h2 className="w-full lg:w-4/5 text-2xl lg:text-3xl font-bold leading-relaxed">
              Achieving Better Health Care One Patient Time.
            </h2>
          </div>

          <p className="w-full mt-4 lg:mt-12">
            Maecenas egestas pellentesque odio. Proin et lectus erat. Donec
            ultricies sem id nibh dapibus, quis rutrum odio vulputate. Morbi a
            sem et est congue aliquet quis sed nisl. Mauris dolor felis, laoreet
            eget elementum sed, vehicula id risus.
          </p>

          <p className="w-full mt-6">
            Maecenas egestas pellentesque odio. Proin et lectus erat. Donec
            ultricies sem id nibh dapibus, quis rutrum odio vulputate. Morbi a
            sem et est congue aliquet quis sed nisl.
          </p>

          {/* Feature */}
          <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between space-y-2 lg:space-y-0 mt-9">
            {/* Feature Display */}
            <div className="flex-1 flex items-center justify-start space-x-2 lg:space-x-5">
              <div className="w-7 h-7 rounded-full border border-[#444444] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#00A6FB]" />
              </div>

              <p className="font-bold text-xs lg:text-base">
                Personalized Consultations
              </p>
            </div>

            {/* Feature Display */}
            <div className="flex-1 flex items-center justify-start space-x-2 lg:space-x-5">
              <div className="w-7 h-7 rounded-full border border-[#444444] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[#00A6FB]" />
              </div>

              <p className="font-bold text-xs lg:text-base">
                Personalized Consultations
              </p>
            </div>
          </div>

          <button className="mt-8 lg:mt-16 px-3 lg:px-7 py-2 lg:py-5 text-sm lg:text-base rounded-full bg-[#00A6FB] font-bold text-white">
            Discover More
          </button>
        </div>
      </div>

      {/* Logo of Companies */}
      <div className="mt-12 lg:mt-24 w-full flex flex-col items-center justify-center space-y-14">
        {/* Companies */}
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-8 lg:flex lg:items-center lg:justify-center lg:divide-x lg:divide-[#707070]">
          <CompanyComponent imgSrc="/companies/dental.svg" />
          <CompanyComponent imgSrc="/companies/dental-care.svg" />
          <CompanyComponent imgSrc="/companies/doctor.svg" />
          <CompanyComponent imgSrc="/companies/great-dental.svg" />
          <CompanyComponent imgSrc="/companies/medical-care.svg" />
        </div>
        {/* Disclaimer */}
        <p className="w-full text-[#2A9BED] text-center">
          Trusted by 10,000+ Companies around the world
        </p>
      </div>
    </div>
  );
};

export default AboutUsBrief;

type CompanyComponentProps = {
  imgSrc: string;
};

function CompanyComponent(props: CompanyComponentProps) {
  return (
    <div className="lg:px-10 last:col-span-2 flex lg:block items-center justify-center">
      <div className="relative w-32 lg:w-52 h-10 lg:h-16">
        <Image
          className="w-full h-full"
          alt="Company A"
          src={props.imgSrc}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
