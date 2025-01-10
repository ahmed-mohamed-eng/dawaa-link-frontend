import Image from "next/image";

const NoteSection = () => {
  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between border-t border-white pt-6 space-y-3 xl:space-y-0">
      <p className="font-bold">© 2023 Medikure+ | Design by DesignThemes. </p>

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-end xl:space-x-5 space-y-6 xl:space-y-0">
        <Image
          alt="Payment Methods"
          src="/companies/payment-methods.png"
          width={300}
          height={23}
        />

        <p className="font-bold text-sm">All Rights Reserved</p>
      </div>
    </div>
  );
};

export default NoteSection;
