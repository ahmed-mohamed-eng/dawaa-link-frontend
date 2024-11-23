import React from "react";

export interface BorderedBoxProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const BorderedBox = (props: BorderedBoxProps) => {
  const classStyle = props.className || "";

  return (
    <div className={`border-2 border-slate-200 rounded-lg p-6 ${classStyle}`}>
      {props.children}
    </div>
  );
};

export default BorderedBox;
