"use client";

import { DateTime } from "luxon";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";

import CountDown from "react-countdown";

const DEFAULT_OFFSET = 1_000_000_000;

export interface CountDownContainerProps {
  endDate?: string;
}

const CountDownContainer = (props: CountDownContainerProps) => {
  const t = useTranslations("HomePage.DealsOfTheWeek");

  const endDate = useMemo(() => {
    if (!props.endDate) {
      return Date.now() + DEFAULT_OFFSET;
    }

    const dueDate = DateTime.fromISO(props.endDate);
    const currentDate = DateTime.now();

    return dueDate > currentDate
      ? dueDate.toMillis()
      : currentDate.toMillis() + DEFAULT_OFFSET;
  }, [props.endDate]);

  return (
    <div className="w-full flex flex-col xl:flex-row xl:items-center xl:justify-between space-y-6 xl:space-y-0">
      <h3 className="font-bold text-4xl text-black flex-1">{t("header")}</h3>

      {/* Count Down */}
      <CountDown
        date={endDate}
        renderer={({ days, hours, minutes, seconds }) => {
          return (
            <div className="w-full flex-1 flex rtl:flex-row-reverse items-center justify-start space-x-2 xl:space-x-9">
              <CountBoxItem name={t("countDown.days")} num={days} />

              <span className="font-black text-3xl xl:text-6xl">:</span>

              <CountBoxItem name={t("countDown.hours")} num={hours} />

              <span className="font-black text-3xl xl:text-6xl">:</span>

              <CountBoxItem name={t("countDown.minutes")} num={minutes} />

              <span className="font-black text-3xl xl:text-6xl">:</span>

              <CountBoxItem name={t("countDown.seconds")} num={seconds} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default CountDownContainer;

function CountBoxItem({ num, name }: { num: number; name: string }) {
  return (
    <div className="w-16 xl:w-24 h-16 xl:h-24 bg-white font-black xl:text-4xl flex flex-col items-center justify-center space-y-1 rounded-lg">
      <span>{num}</span>
      <span className="font-thin text-xs xl:text-sm">{name}</span>
    </div>
  );
}
