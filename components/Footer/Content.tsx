import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import LogoSection from "./LogoSection";

const Content = () => {
  const t = useTranslations("FooterComponent");

  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-start xl:justify-between space-y-6 xl:space-y-0">
      {/* Logo */}
      <LogoSection />

      <div className="flex-[2] grid grid-cols-3 gap-x-4 gap-y-8">
        {/* Company Info Nav Section */}
        <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
          <p className="font-bold text-2xl">{t("company.name")}</p>

          <div className="flex flex-col items-start justify-start space-y-2 xl:space-y-5">
            <Link href="/about-us">{t("company.about")}</Link>
            <Link href="/plans">{t("company.plans")}</Link>
            <Link href="/services">{t("company.services")}</Link>
            <Link href="/products">{t("company.products")}</Link>
            <Link href="/policy">{t("company.privacy&policy")}</Link>
            <Link href="/terms">{t("company.termsOfUse")}</Link>
          </div>
        </div>

        {/* Company Info Nav Section */}
        <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
          <p className="font-bold text-2xl">{t("help&support.name")}</p>

          <div className="flex flex-col items-start justify-start space-y-2 xl:space-y-5">
            <Link href="/support">{t("help&support.support")}</Link>
            <Link href="/contact-us">{t("help&support.location")}</Link>
            <Link href="/contact-us">{t("help&support.contact")}</Link>
            <Link href="/login">{t("help&support.login")}</Link>
            <Link href="/faq">{t("help&support.faq")}</Link>
          </div>
        </div>

        {/* Company Info Nav Section */}
        <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
          <p className="font-bold text-2xl">{t("Services&Cities.name")}</p>

          <div className="flex flex-col items-start justify-start space-y-2 xl:space-y-5">
            <Link href="/contact-us">{t("Services&Cities.locations.0")}</Link>
            <Link href="/contact-us">{t("Services&Cities.locations.1")}</Link>
            <Link href="/contact-us">{t("Services&Cities.locations.2")}</Link>
            <Link href="/contact-us">{t("Services&Cities.locations.3")}</Link>
            <Link href="/contact-us">{t("Services&Cities.locations.4")}</Link>
          </div>
        </div>

        {/* Join Us Options */}
        <div className="flex flex-col items-start justify-start space-y-4 xl:space-y-7 text-white">
          <p className="font-bold text-2xl">{t("JoinUs.title")}</p>

          <div className="flex rtl:flex-row-reverse items-center justify-start space-x-4">
            <Link
              href="/login"
              className="px-10 py-2 border border-white rounded-md whitespace-nowrap font-bold"
            >
              {t("JoinUs.joinAsClient")}
            </Link>
            <span>{t("JoinUs.or")}</span>
            <Link
              href="/login"
              className="px-10 py-2 border border-white rounded-md whitespace-nowrap font-bold"
            >
              {t("JoinUs.joinAsProvider")}
            </Link>
          </div>

          <div className="flex items-center justify-start ltr:space-x-4">
            <p className="text-lg">{t("JoinUs.createAccountName")}</p>
            <Link href="/login" className="rtl:mr-4">
              {t("JoinUs.login")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
