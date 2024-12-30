import React from "react";

import { TbHandClick } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";
import { PiPhoneCallLight } from "react-icons/pi";

import ContactInfo from "./ContactInfo";

const ContactContainer = () => {
  return (
    <div className="w-full pb-24">
      <div className="w-full px-16 flex flex-col space-y-20">
        <ContactInfo />

        {/* Contact Form */}
        <div className="w-full pb-16 flex space-x-16 border-b border-black">
          {/* Form */}
          <form className="flex-1 bg-[#DCDCDC] rounded-xl px-11 py-9 flex flex-col space-y-8">
            <input
              className="w-full bg-white text-black px-8 py-4 placeholder:text-black"
              placeholder="Your name"
            />

            <input
              className="w-full bg-white text-black px-8 py-4 placeholder:text-black"
              placeholder="Your phone"
            />

            <input
              className="w-full bg-white text-black px-8 py-4 placeholder:text-black"
              placeholder="Your email"
              type="email"
            />

            <textarea
              rows={10}
              className="w-full bg-white text-black px-8 py-4 placeholder:text-black"
              placeholder="Message Here"
            />

            <button
              type="submit"
              className="w-fit text-white text-lg rounded-full bg-[#FF922E] px-16 py-4 font-bold"
            >
              Let&apos;s talks
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col items-start justify-start space-y-16">
            <h3 className="font-bold text-4xl capitalize">
              Our New York Branch
            </h3>

            <p>
              Nam ultricies metus purus laoreet aliquam. Aliquam lectus urna,
              tempus ac lectus Mauris sit amet lorem sagittis, convallis.
            </p>

            <div className="w-full flex flex-col items-start justify-start space-y-10">
              <div className="w-full px-12 py-7 rounded-xl bg-[#00A6FB] flex items-start justify-start space-x-6">
                <TbHandClick fontSize={50} stroke="white" />

                <div className="flex flex-col items-start justify-start space-y-1 text-lg text-white">
                  <h4 className="font-bold">Chat to us</h4>
                  <p>Info@medipharm.com</p>
                </div>
              </div>

              <div className="w-full px-12 py-7 rounded-xl bg-black flex items-start justify-start space-x-6">
                <LuMapPin fontSize={50} stroke="white" />

                <div className="flex flex-col items-start justify-start space-y-1 text-lg text-white">
                  <h4 className="font-bold capitalize">
                    Visit our Office Branch
                  </h4>
                  <p>800 Nicollet Mall, Minneapolis, MN 55402, United States</p>
                </div>
              </div>

              <div className="w-full px-12 py-7 rounded-xl bg-black flex items-start justify-start space-x-6">
                <PiPhoneCallLight fontSize={50} color="white" />

                <div className="flex flex-col items-start justify-start space-y-1 text-lg text-white">
                  <h4 className="font-bold capitalize">Call Us</h4>
                  <p>+1 502-240-6226 | +20 589 248 3698</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
