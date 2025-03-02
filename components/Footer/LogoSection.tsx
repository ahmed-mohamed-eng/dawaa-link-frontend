import Image from "next/image";
import { Link } from "@/i18n/routing";

const LogoSection = () => {
  return (
    <div className="flex flex-1 flex-col items-start justify-start">
      <Link href="/">
        <Image
          alt="Company Logo"
          src="/white-logo.svg"
          width={285}
          height={57}
        />
      </Link>

      <div className="space-y-1 w-full mt-6">
        <p className="w-full">Cras eu pulvinar felis, vitae aliquet metus.</p>
        <p className="w-full">aptent taciti sociosqu torquentper.</p>
      </div>

      <div className="w-full flex items-center justify-start space-x-8 mt-11">
        <Image
          alt="Twitter Logo"
          src="/companies/twitter-white.svg"
          width={20}
          height={20}
        />
        <Image
          alt="Insta Logo"
          src="/companies/insta-white.svg"
          width={20}
          height={20}
        />
        <Image
          alt="Facebook Logo"
          src="/companies/facebook-white.svg"
          width={20}
          height={20}
        />
        <Image
          alt="Youtube Logo"
          src="/companies/yt-white.svg"
          width={20}
          height={20}
        />
        <Image
          alt="LinkedIn Logo"
          src="/companies/linkedin-white.svg"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default LogoSection;
