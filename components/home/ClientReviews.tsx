"use client";

import Image from "next/image";

import Slider, { Settings } from "react-slick";

const ClientReviews = () => {
  const settings: Settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 1,
    arrows: false,
    infinite: true,
  };

  return (
    <div className="pb-3 w-full">
      <div className="relative w-full flex flex-col items-center justify-center space-y-16 px-6 py-32 bg-[#F7F7F7] rounded-xl">
        <Image
          className="w-full h-full -z-50"
          alt="BG"
          src="/reviews-bg.png"
          fill
        />

        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="font-bold text-[#00A6FB] text-xl">Testimonials</span>
          <h2 className="font-bold text-[#081F48] text-5xl">
            Our Clients reviews
          </h2>
        </div>

        {/* Reviews Slider */}
        <div className="w-full slider-container">
          <Slider {...settings}>
            <div>
              <div className="m-10 rounded-xl bg-white p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
                {/* Header */}
                <div className="flex items-center justify-between space-x-52">
                  {/* Client Info */}
                  <div className="flex items-center justify-start space-x-8">
                    {/* Client Image */}
                    <Image
                      className="rounded-full"
                      alt="Person Image"
                      src="/placeholder.png"
                      width={107}
                      height={107}
                    />

                    {/* Client Base Info */}
                    <div className="flex flex-col items-start justify-start space-y-3">
                      <p className="font-bold text-xl whitespace-nowrap">
                        Jhon Mikias <span className="text-sm">- Manager</span>
                      </p>

                      {/* Review Stars */}
                      <div className="flex items-center justify-start space-x-0.5">
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    alt="Customer Quote"
                    src="/icons/big-quote.svg"
                    width={70}
                    height={60}
                  />
                </div>

                {/* Content */}
                <p className="w-full">
                  Nunc nec dui ligula. Nam pretium a mauris vel consequat.
                  Vivamus et neque risus. Ut efficitur neque odio, ullamcorper
                  semper mi convallis eget. Aenean tincidunt turpis orci, a
                  faucibus risus ullamcorper in. Aenean ut orci fermentum,
                  facilisis justo varius, convallis sem. Sed vestibulum
                  consectetur mattis.
                </p>
              </div>
            </div>

            <div>
              <div className="m-10 rounded-xl bg-white p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
                {/* Header */}
                <div className="flex items-center justify-between space-x-52">
                  {/* Client Info */}
                  <div className="flex items-center justify-start space-x-8">
                    {/* Client Image */}
                    <Image
                      className="rounded-full"
                      alt="Person Image"
                      src="/placeholder.png"
                      width={107}
                      height={107}
                    />

                    {/* Client Base Info */}
                    <div className="flex flex-col items-start justify-start space-y-3">
                      <p className="font-bold text-xl whitespace-nowrap">
                        Jhon Mikias <span className="text-sm">- Manager</span>
                      </p>

                      {/* Review Stars */}
                      <div className="flex items-center justify-start space-x-0.5">
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    alt="Customer Quote"
                    src="/icons/big-quote.svg"
                    width={70}
                    height={60}
                  />
                </div>

                {/* Content */}
                <p className="w-full">
                  Nunc nec dui ligula. Nam pretium a mauris vel consequat.
                  Vivamus et neque risus. Ut efficitur neque odio, ullamcorper
                  semper mi convallis eget. Aenean tincidunt turpis orci, a
                  faucibus risus ullamcorper in. Aenean ut orci fermentum,
                  facilisis justo varius, convallis sem. Sed vestibulum
                  consectetur mattis.
                </p>
              </div>
            </div>

            <div>
              <div className="m-10 rounded-xl bg-white p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
                {/* Header */}
                <div className="flex items-center justify-between space-x-52">
                  {/* Client Info */}
                  <div className="flex items-center justify-start space-x-8">
                    {/* Client Image */}
                    <Image
                      className="rounded-full"
                      alt="Person Image"
                      src="/placeholder.png"
                      width={107}
                      height={107}
                    />

                    {/* Client Base Info */}
                    <div className="flex flex-col items-start justify-start space-y-3">
                      <p className="font-bold text-xl whitespace-nowrap">
                        Jhon Mikias <span className="text-sm">- Manager</span>
                      </p>

                      {/* Review Stars */}
                      <div className="flex items-center justify-start space-x-0.5">
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    alt="Customer Quote"
                    src="/icons/big-quote.svg"
                    width={70}
                    height={60}
                  />
                </div>

                {/* Content */}
                <p className="w-full">
                  Nunc nec dui ligula. Nam pretium a mauris vel consequat.
                  Vivamus et neque risus. Ut efficitur neque odio, ullamcorper
                  semper mi convallis eget. Aenean tincidunt turpis orci, a
                  faucibus risus ullamcorper in. Aenean ut orci fermentum,
                  facilisis justo varius, convallis sem. Sed vestibulum
                  consectetur mattis.
                </p>
              </div>
            </div>

            <div>
              <div className="m-10 rounded-xl bg-white p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
                {/* Header */}
                <div className="flex items-center justify-between space-x-52">
                  {/* Client Info */}
                  <div className="flex items-center justify-start space-x-8">
                    {/* Client Image */}
                    <Image
                      className="rounded-full"
                      alt="Person Image"
                      src="/placeholder.png"
                      width={107}
                      height={107}
                    />

                    {/* Client Base Info */}
                    <div className="flex flex-col items-start justify-start space-y-3">
                      <p className="font-bold text-xl whitespace-nowrap">
                        Jhon Mikias <span className="text-sm">- Manager</span>
                      </p>

                      {/* Review Stars */}
                      <div className="flex items-center justify-start space-x-0.5">
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    alt="Customer Quote"
                    src="/icons/big-quote.svg"
                    width={70}
                    height={60}
                  />
                </div>

                {/* Content */}
                <p className="w-full">
                  Nunc nec dui ligula. Nam pretium a mauris vel consequat.
                  Vivamus et neque risus. Ut efficitur neque odio, ullamcorper
                  semper mi convallis eget. Aenean tincidunt turpis orci, a
                  faucibus risus ullamcorper in. Aenean ut orci fermentum,
                  facilisis justo varius, convallis sem. Sed vestibulum
                  consectetur mattis.
                </p>
              </div>
            </div>

            <div>
              <div className="m-10 rounded-xl bg-white p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
                {/* Header */}
                <div className="flex items-center justify-between space-x-52">
                  {/* Client Info */}
                  <div className="flex items-center justify-start space-x-8">
                    {/* Client Image */}
                    <Image
                      className="rounded-full"
                      alt="Person Image"
                      src="/placeholder.png"
                      width={107}
                      height={107}
                    />

                    {/* Client Base Info */}
                    <div className="flex flex-col items-start justify-start space-y-3">
                      <p className="font-bold text-xl whitespace-nowrap">
                        Jhon Mikias <span className="text-sm">- Manager</span>
                      </p>

                      {/* Review Stars */}
                      <div className="flex items-center justify-start space-x-0.5">
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    alt="Customer Quote"
                    src="/icons/big-quote.svg"
                    width={70}
                    height={60}
                  />
                </div>

                {/* Content */}
                <p className="w-full">
                  Nunc nec dui ligula. Nam pretium a mauris vel consequat.
                  Vivamus et neque risus. Ut efficitur neque odio, ullamcorper
                  semper mi convallis eget. Aenean tincidunt turpis orci, a
                  faucibus risus ullamcorper in. Aenean ut orci fermentum,
                  facilisis justo varius, convallis sem. Sed vestibulum
                  consectetur mattis.
                </p>
              </div>
            </div>

            <div>
              <div className="m-10 rounded-xl bg-white p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
                {/* Header */}
                <div className="flex items-center justify-between space-x-52">
                  {/* Client Info */}
                  <div className="flex items-center justify-start space-x-8">
                    {/* Client Image */}
                    <Image
                      className="rounded-full"
                      alt="Person Image"
                      src="/placeholder.png"
                      width={107}
                      height={107}
                    />

                    {/* Client Base Info */}
                    <div className="flex flex-col items-start justify-start space-y-3">
                      <p className="font-bold text-xl whitespace-nowrap">
                        Jhon Mikias <span className="text-sm">- Manager</span>
                      </p>

                      {/* Review Stars */}
                      <div className="flex items-center justify-start space-x-0.5">
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                        <Image
                          alt="Star"
                          src="/star.svg"
                          width={15}
                          height={15}
                        />
                      </div>
                    </div>
                  </div>

                  <Image
                    alt="Customer Quote"
                    src="/icons/big-quote.svg"
                    width={70}
                    height={60}
                  />
                </div>

                {/* Content */}
                <p className="w-full">
                  Nunc nec dui ligula. Nam pretium a mauris vel consequat.
                  Vivamus et neque risus. Ut efficitur neque odio, ullamcorper
                  semper mi convallis eget. Aenean tincidunt turpis orci, a
                  faucibus risus ullamcorper in. Aenean ut orci fermentum,
                  facilisis justo varius, convallis sem. Sed vestibulum
                  consectetur mattis.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
