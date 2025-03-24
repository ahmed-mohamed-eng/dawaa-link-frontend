"use client";

import Image from "next/image";
import { v4 as uuid } from "uuid";
import { useTranslations } from "next-intl";

import Slider, { Settings } from "react-slick";

const ClientReviews = () => {
  const t = useTranslations("AboutUsPage.ClientReviews");

  const settings: Settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesPerRow: 1,
    arrows: false,
    infinite: true,

    responsive: [
      {
        breakpoint: 720,
        settings: {
          dots: true,
          speed: 500,
          slidesToShow: 1,
          slidesPerRow: 1,
          arrows: false,
          infinite: true,
        },
      },
      {
        breakpoint: 1080,
        settings: {
          dots: true,
          speed: 500,
          slidesToShow: 1,
          slidesPerRow: 3,
          arrows: false,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="pb-3 w-full">
      <div className="relative w-full flex flex-col items-center justify-center xl:space-y-16 px-6 py-16 xl:py-32 bg-[#F7F7F7] rounded-xl">
        <Image
          className="w-full h-full -z-50"
          alt="BG"
          src="/reviews-bg.png"
          fill
        />

        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="font-bold text-[#00A6FB] text-xl">{t("title")}</span>
          <h2 className="font-bold text-[#081F48] text-5xl text-center xl:text-left">
            {t("description")}
          </h2>
        </div>

        {/* Reviews Slider */}
        <div className="mt-10 xl:mt-0 w-full slider-container">
          <Slider {...settings}>
            <ReviewCardItem
              rating={3.2}
              role="Manager"
              name="Jhon Mikias"
              imageSrc="/placeholder.png"
              reviewText="Nunc nec dui ligula. Nam pretium a mauris vel consequat. Vivamus et neque risus. Ut efficitur neque odio, ullamcorper semper mi convallis eget. Aenean tincidunt turpis orci, a faucibus risus ullamcorper in. Aenean ut orci fermentum, facilisis justo varius, convallis sem. Sed vestibulum consectetur mattis."
            />

            <ReviewCardItem
              rating={3.2}
              role="Manager"
              name="Jhon Mikias"
              imageSrc="/placeholder.png"
              reviewText="Nunc nec dui ligula. Nam pretium a mauris vel consequat. Vivamus et neque risus. Ut efficitur neque odio, ullamcorper semper mi convallis eget. Aenean tincidunt turpis orci, a faucibus risus ullamcorper in. Aenean ut orci fermentum, facilisis justo varius, convallis sem. Sed vestibulum consectetur mattis."
            />

            <ReviewCardItem
              rating={3.2}
              role="Manager"
              name="Jhon Mikias"
              imageSrc="/placeholder.png"
              reviewText="Nunc nec dui ligula. Nam pretium a mauris vel consequat. Vivamus et neque risus. Ut efficitur neque odio, ullamcorper semper mi convallis eget. Aenean tincidunt turpis orci, a faucibus risus ullamcorper in. Aenean ut orci fermentum, facilisis justo varius, convallis sem. Sed vestibulum consectetur mattis."
            />

            <ReviewCardItem
              rating={3.2}
              role="Manager"
              name="Jhon Mikias"
              imageSrc="/placeholder.png"
              reviewText="Nunc nec dui ligula. Nam pretium a mauris vel consequat. Vivamus et neque risus. Ut efficitur neque odio, ullamcorper semper mi convallis eget. Aenean tincidunt turpis orci, a faucibus risus ullamcorper in. Aenean ut orci fermentum, facilisis justo varius, convallis sem. Sed vestibulum consectetur mattis."
            />

            <ReviewCardItem
              rating={3.2}
              role="Manager"
              name="Jhon Mikias"
              imageSrc="/placeholder.png"
              reviewText="Nunc nec dui ligula. Nam pretium a mauris vel consequat. Vivamus et neque risus. Ut efficitur neque odio, ullamcorper semper mi convallis eget. Aenean tincidunt turpis orci, a faucibus risus ullamcorper in. Aenean ut orci fermentum, facilisis justo varius, convallis sem. Sed vestibulum consectetur mattis."
            />

            <ReviewCardItem
              rating={3.2}
              role="Manager"
              name="Jhon Mikias"
              imageSrc="/placeholder.png"
              reviewText="Nunc nec dui ligula. Nam pretium a mauris vel consequat. Vivamus et neque risus. Ut efficitur neque odio, ullamcorper semper mi convallis eget. Aenean tincidunt turpis orci, a faucibus risus ullamcorper in. Aenean ut orci fermentum, facilisis justo varius, convallis sem. Sed vestibulum consectetur mattis."
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;

type ReviewCardItemProps = {
  imageSrc: string;
  name: string;
  role: string;
  rating: number;
  reviewText: string;
};

function ReviewCardItem(props: ReviewCardItemProps) {
  const reviewsCount = props.rating >= 5 ? 5 : Math.floor(props.rating);

  return (
    <div>
      <div className="xl:m-10 rounded-xl bg-white p-4 xl:p-10 flex flex-col items-start justify-start space-y-9 group hover:bg-[#00A6FB] hover:text-white">
        {/* Header */}
        <div className="w-full flex flex-col xl:flex-row items-center justify-between space-y-6 xl:space-y-0 xl:space-x-52">
          {/* Client Info */}
          <div className="w-full flex flex-col xl:flex-row items-center justify-center xl:justify-start space-y-6 xl:space-y-0 xl:space-x-8">
            {/* Client Image */}
            <Image
              className="rounded-full"
              alt="Person Image"
              src={props.imageSrc}
              width={107}
              height={107}
            />

            {/* Client Base Info */}
            <div className="w-full flex flex-col items-center xl:items-start justify-start space-y-3">
              <p className="font-bold text-xl whitespace-nowrap">
                {props.name} <span className="text-sm">- {props.role}</span>
              </p>

              {/* Review Stars */}
              <div className="flex items-center justify-start space-x-0.5">
                {[...Array(reviewsCount)].map(() => {
                  return (
                    <Image
                      key={uuid()}
                      alt="Star"
                      src="/star.svg"
                      width={15}
                      height={15}
                    />
                  );
                })}

                {[...Array(5 - reviewsCount)].map(() => {
                  return (
                    <Image
                      key={uuid()}
                      alt="Star"
                      src="/star-empty.svg"
                      width={15}
                      height={15}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="hidden xl:block">
            <Image
              alt="Customer Quote"
              src="/icons/big-quote.svg"
              width={70}
              height={60}
            />
          </div>
        </div>

        {/* Content */}
        <p className="w-full text-center xl:text-left">{props.reviewText}</p>
      </div>
    </div>
  );
}
