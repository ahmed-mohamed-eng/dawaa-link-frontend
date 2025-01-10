"use client";

import React, { useState } from "react";

export type TabName = "description" | "additional-info" | "reviews";

export interface InformationHeaderProps {
  onChange?: (tn: TabName) => void;
}

const InformationHeader = (props: InformationHeaderProps) => {
  const [selectedTab, setSelectedTab] = useState<TabName>("description");

  const onSelectTab = (tn: TabName) => {
    setSelectedTab(tn);
    props.onChange?.call(null, tn);
  };

  return (
    <div className="w-full flex items-center justify-start border-b border-black space-x-4 xl:space-x-20">
      <TabItem
        tn="description"
        name="Description"
        onClick={onSelectTab}
        currentTN={selectedTab}
      />

      <TabItem
        tn="additional-info"
        name="Additional Information"
        onClick={onSelectTab}
        currentTN={selectedTab}
      />

      <TabItem
        tn="reviews"
        name="Reviews (0)"
        onClick={onSelectTab}
        currentTN={selectedTab}
      />
    </div>
  );
};

export default InformationHeader;

interface TabItemProps {
  name: string;
  tn: TabName;
  currentTN: TabName;
  onClick: (tn: TabName) => void;
}

function TabItem(props: TabItemProps) {
  return (
    <button
      data-selected={props.currentTN === props.tn || undefined}
      className="px-4 pb-4 font-bold text-sm xl:text-xl data-[selected]:border-b data-[selected]:border-[#023E8A] data-[selected]:text-[#023E8A]"
      onClick={() => props.onClick(props.tn)}
    >
      <span>{props.name}</span>
    </button>
  );
}
