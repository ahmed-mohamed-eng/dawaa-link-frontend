import { useTranslations } from "next-intl";
import Image from "next/image";

const AboutUsBrief = () => {
  const t = useTranslations("HomePage.AboutUs");

  return (
    <div className="w-full xl:px-10 pt-10 xl:pt-0">
      {/* Content */}
      <div className="w-full grid grid-cols-2 rtl:gap-4 xl:rtl:gap-12">
        {/* Images */}
        <div className="hidden h-96 xl:block w-full relative">
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
        <div className="col-span-2 xl:col-span-1 flex flex-col items-start justify-start xl:pl-20">
          {/* Header */}
          <div className="flex flex-col items-start justify-start space-y-2">
            <span className="tracking-widest text-[#00A6FB]">{t("title")}</span>

            <h2 className="w-full xl:w-4/5 text-2xl xl:text-3xl font-bold leading-relaxed">
              {t("header")}
            </h2>
          </div>

          <p className="w-full mt-4 xl:mt-12">{t("pp1")}</p>

          <p className="w-full mt-6">{t("pp2")}</p>
        </div>
      </div>

      {/* Logo of Companies */}
      <div className="mt-12 xl:mt-24 w-full flex flex-col items-center justify-center space-y-14">
        {/* Companies */}
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-8 xl:flex xl:rtl:flex-row-reverse xl:items-center xl:justify-center xl:divide-x xl:divide-[#707070]">
          <CompanyComponent imgSrc="/companies/dental.svg" />
          <CompanyComponent imgSrc="/companies/dental-care.svg" />
          <CompanyComponent imgSrc="/companies/doctor.svg" />
          <CompanyComponent imgSrc="/companies/great-dental.svg" />
          <CompanyComponent imgSrc="/companies/medical-care.svg" />
        </div>
        {/* Disclaimer */}
        <p className="w-full text-[#2A9BED] text-center">{t("disclaimer")}</p>
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
    <div className="w-full xl:px-8 last:col-span-2 flex xl:block items-center justify-center">
      <div className="relative w-32 xl:w-full h-10 xl:h-16">
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
