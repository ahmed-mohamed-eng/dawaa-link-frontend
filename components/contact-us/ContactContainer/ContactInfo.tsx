import Image from "next/image";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="w-full pb-16 flex flex-col space-y-16 border-b border-black">
      {/* Title */}
      <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-8 xl:space-y-0">
        <div className="flex flex-col space-y-3 flex-1">
          <span className="capitalize text-[#00A6FB] tracking-[0.25rem] font-bold">
            contact us
          </span>

          <h1 className="capitalize font-bold text-4xl">Our head Offices</h1>
        </div>

        <div className="flex-1 pl-6 xl:border-l border-black font-thin">
          Nam ultricies metus et purus laoreet aliquam. Aliquam lectus urna,
          tempus ac lectus egravida bibendum nisi. Nulla consequat turpis vitae
          purus ultricies luctus. Phasellus leo tortor, blandit nec consequat
          eget, rhoncus ac nisl. Duis pellentesque, est non tempor varius, urna
          leo pharetra nisi.
        </div>
      </div>

      {/* Contact Boxes */}
      <div className="w-full flex flex-col xl:flex-row space-y-8 xl:space-y-0 xl:space-x-10">
        <ContactInfoBox
          imgSrc="/contact-location.svg"
          title="Our Location"
          info="45 Folgate Street Canberra Looloith E1 6GL"
        />

        <ContactInfoBox
          imgSrc="/contact-phone.svg"
          title="Mobile Number"
          info="+00 (0)12 3456 789 - +00 (0)12 3456 789"
        />

        <ContactInfoBox
          imgSrc="/contact-site.svg"
          title="Have Quires ?"
          info="Seestrasse St, Zurich, CH"
        />

        <ContactInfoBox
          imgSrc="/contact-email.svg"
          title="Contact Support"
          info="info@example.com - info@example.com"
        />
      </div>
    </div>
  );
};

export default ContactInfo;

function ContactInfoBox(props: {
  title: string;
  info: string;
  imgSrc: string;
}) {
  return (
    <div className="flex items-start justify-start space-x-3 flex-1">
      <Image alt="Our location" src={props.imgSrc} width={60} height={60} />
      <div className="flex flex-col space-y-2">
        <h4 className="font-bold text-[#023E8A]">{props.title}</h4>
        <p className="text-[#5E5E5E]">{props.info}</p>
      </div>
    </div>
  );
}
