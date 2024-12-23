import Image from "next/image";

const ContactInfo = () => {
  return (
    <div className="w-full rounded-t-2xl bg-[#081F48] text-white flex items-center justify-center py-16 divide-x-2 divide-[#707070]">
      {/* Physical Location */}
      <div className="pr-32 font-bold text-4xl flex flex-col items-center justify-start space-y-4">
        <span className="text-sm">Appointment Available</span>
        <p>Whatsapp Number</p>
        <p>1200 - 256 - 48966</p>
      </div>

      {/* Icons */}
      <div className="pl-32 font-bold grid grid-cols-2 gap-8">
        <div className="flex space-x-8">
          <Image
            alt="Physical Address"
            src="/icons/house-round.svg"
            width={75}
            height={75}
          />

          <div className="w-32 font-bold text-white space-y-4">
            <p>Address</p>
            <p>813 Howard Street , Oswego NY 13126, USA</p>
          </div>
        </div>

        <div className="flex space-x-8">
          <Image
            alt="Physical Address"
            src="/icons/phone-round.svg"
            width={75}
            height={75}
          />

          <div className="font-bold text-white space-y-4">
            <p>Phone</p>

            <div className="space-y-4">
              <p>(+02) 258 987 4533</p>
              <p>(+02) 158 456 8895</p>
            </div>
          </div>
        </div>

        <div className="flex space-x-8">
          <Image
            alt="Physical Address"
            src="/icons/email-round.svg"
            width={75}
            height={75}
          />

          <div className="font-bold text-white space-y-4">
            <p>Email</p>
            <p>Contact@Medical.Com</p>
          </div>
        </div>

        <div className="flex space-x-8">
          <Image
            alt="Physical Address"
            src="/icons/web-round.svg"
            width={75}
            height={75}
          />

          <div className="font-bold text-white space-y-4">
            <p>Website</p>
            <p>Contact@Medical.Com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
