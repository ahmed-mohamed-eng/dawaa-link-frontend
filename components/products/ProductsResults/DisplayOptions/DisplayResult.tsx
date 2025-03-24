import { useTranslations } from "next-intl";
import { FaAngleDown } from "react-icons/fa";

const DisplayResult = () => {
  const t = useTranslations("ProductsPage.DisplayOptions");

  return (
    <div className="flex items-center justify-start space-x-7 rtl:pe-8 ltr:ps-8 py-5 flex-1">
      <div className="flex items-center justify-end space-x-2 flex-1">
        <button className="font-bold text-xs xl:text-base text-[#103178]">
          <span>{t("resultCounts")}</span>
          <span> 12</span>
        </button>
        <FaAngleDown fill="#103178" stroke="#103178" />
      </div>
    </div>
  );
};

export default DisplayResult;
