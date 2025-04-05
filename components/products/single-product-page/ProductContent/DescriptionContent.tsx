import { useLocale } from "next-intl";

export interface DescriptionContentProps {
  descriptionEn?: string;
  descriptionsAr?: string;
}

const DescriptionContent = ({
  descriptionEn,
  descriptionsAr,
}: DescriptionContentProps) => {
  const locale = useLocale();

  const description = locale.match("ar")?.length
    ? descriptionsAr
    : descriptionEn;

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-10">
      <p className="w-full text-xs xl:text-base">{description}</p>
    </div>
  );
};

export default DescriptionContent;
