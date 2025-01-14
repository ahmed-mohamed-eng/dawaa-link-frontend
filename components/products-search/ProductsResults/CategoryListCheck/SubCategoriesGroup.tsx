"use client";

import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import CategoryComp, { CategoryCompProps } from "./CategoryComp";

export interface SubCategoriesGroupProps extends CategoryCompProps {
  groups?: CategoryCompProps[];
}

const SubCategoriesGroup = (props: SubCategoriesGroupProps) => {
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col space-y-4">
      <CategoryComp
        name={props.name}
        value={props.value}
        hasMore={!!props.groups?.length}
        onChange={(v) => setIsGroupsOpen(v === "open")}
      />

      {isGroupsOpen ? (
        <div className="ps-3 flex flex-col space-y-4">
          {props.groups?.map((g) => {
            return <CategoryComp key={uuid()} name={g.name} value={g.value} />;
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SubCategoriesGroup;
