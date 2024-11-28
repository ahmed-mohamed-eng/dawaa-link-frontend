import React from "react";

import Sizes from "@/types/Sizes.type";
import IValue from "@/types/value.interface";
import IOnClickComponent from "@/types/user-actions/onClickComponent.interface";
import getFontSize from "@/utils/getFontSizeOfSize";

export interface ActionButtonProps extends IValue<string>, IOnClickComponent {
  size: Sizes;
  variant: "take-action" | "update" | "delete";
}

const ActionButton = (props: ActionButtonProps) => {
  return (
    <button
      className="font-bold flex items-center justify-center rounded-full border border-solid"
      style={{
        backgroundColor: getBgColor(props.variant),
        color: getTextColor(props.variant),
        borderColor: getBorderColor(props.variant),
        fontSize: getFontSize(props.size),
        paddingLeft: getHPadding(props.size),
        paddingRight: getHPadding(props.size),
        paddingTop: getVPadding(props.size),
        paddingBottom: getVPadding(props.size),
      }}
    >
      {props.value}
    </button>
  );
};

export default ActionButton;

function getBgColor(variant: string) {
  switch (variant) {
    case "take-action":
      return "#EDA415";

    case "update":
      return "#FFFFFF";

    case "delete":
      return "#FFFFFF";
    default:
      return "#EDA415";
  }
}

function getTextColor(variant: string) {
  switch (variant) {
    case "take-action":
      return "#FFFFFF";

    case "update":
      return "#A9A9A9";

    case "delete":
      return "#C33131";
    default:
      return "#FFFFFF";
  }
}

function getBorderColor(variant: string) {
  switch (variant) {
    case "take-action":
      return "#FFFFFF";

    case "update":
      return "#A9A9A9";

    case "delete":
      return "#C33131";
    default:
      return "#FFFFFF";
  }
}

function getHPadding(size: Sizes) {
  switch (size) {
    case "2xs":
      return "0.75rem";
    case "xxs":
      return "0.85rem";
    case "xs":
      return "1rem";
    case "sm":
      return "1.5rem";
    case "lg":
      return "2rem";
    case "xl":
      return "2.5rem";
    case "2xl":
      return "3.5rem";
    case "3xl":
      return "4rem";

    default:
      return "1rem";
  }
}

function getVPadding(size: Sizes) {
  switch (size) {
    case "2xs":
      return "0.25rem";
    case "xxs":
      return "0.5rem";
    case "xs":
      return "0.75rem";
    case "sm":
      return "0.85rem";
    case "lg":
      return "1rem";
    case "xl":
      return "1.5rem";
    case "2xl":
      return "2rem";
    case "3xl":
      return "2.5rem";

    default:
      return "1rem";
  }
}
