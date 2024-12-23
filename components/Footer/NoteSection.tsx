import Image from "next/image";

const NoteSection = () => {
  return (
    <div className="w-full flex items-center justify-between border-t border-white pt-6">
      <p className="font-bold">© 2023 Medikure+ | Design by DesignThemes. </p>

      <div className="flex items-center justify-end space-x-5">
        <Image alt="Payment Methods" src="/companies/payment-methods.png" width={300} height={23} />

        <p className="font-bold text-sm">All Rights Reserved</p>
      </div>
    </div>
  );
};

export default NoteSection;
