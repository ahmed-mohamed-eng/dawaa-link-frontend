import React from "react";
import { v4 as uuid } from "uuid";

import TitleText from "../../simple/title-text";

export interface NavigationListProps {
  title: string;
  items: string[];
}

const NavigationList = (props: NavigationListProps) => {
  return (
    <div className="flex flex-col items-start justify-start space-y-3">
      <TitleText sizes="xl" text={props.title} />
      <div className="flex flex-col items-start justify-start space-y-2">
        {props.items.map((name) => {
          return (
            <p
              key={uuid()}
              className="flex items-center space-x-4 text-primary font-medium text-lg"
            >
              <span className="w-2 h-2 inline-block rounded-full bg-[#D9D9D9]" />
              <span>{name}</span>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationList;
