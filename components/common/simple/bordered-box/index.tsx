import React from "react";

export interface BorderedBoxProps {
  children?: JSX.Element | JSX.Element[];
}

const BorderedBox = (props: BorderedBoxProps) => {
  return (
    <div className="border-2 border-slate-200 rounded-lg p-6">
      {props.children}
    </div>
  );
};

export default BorderedBox;
