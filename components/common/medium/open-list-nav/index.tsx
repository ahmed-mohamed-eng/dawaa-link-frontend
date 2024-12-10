"use client";

import React, { useState } from "react";

import Link from "next/link";
import { v4 as uuid } from "uuid";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type OpenListNavProps = {
  name: string;
  url?: string;
  items?: { url: string; name: string }[];
};

export default function OpenListNav(props: OpenListNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Non-Link Name */}
      {!props?.url ? (
        <div
          className="flex items-center justify-start space-x-4 cursor-pointer"
          onClick={setIsOpen.bind(null, !isOpen)}
        >
          <span>{props.name}</span>
          {props.items?.length ? (
            <MdOutlineKeyboardArrowDown
              fontSize={25}
              className="duration-300 ease-in rotate-0 data-[open]:rotate-180"
              data-open={isOpen || undefined}
            />
          ) : null}
        </div>
      ) : null}

      {/* Link Name */}
      {props?.url ? (
        <Link
          href={props.url}
          className="flex items-center justify-start space-x-4 cursor-pointer"
          onClick={setIsOpen.bind(null, !isOpen)}
        >
          <span>{props.name}</span>
          {props.items?.length ? (
            <MdOutlineKeyboardArrowDown
              fontSize={25}
              className="duration-300 ease-in rotate-0 data-[open]:rotate-180"
              data-open={isOpen || undefined}
            />
          ) : null}
        </Link>
      ) : null}

      {/* Items */}
      {props.items?.length ? (
        <div
          data-open={isOpen || undefined}
          onBlur={setIsOpen.bind(null, false)}
          className="flex flex-col space-y-4 text-black font-thin absolute top-10 left-0 bg-slate-100 border shadow-md w-full p-4 rounded-md overflow-auto duration-300 opacity-0 data-[open]:opacity-100 -z-50 data-[open]:z-50 max-h-96"
        >
          {props.items?.map((it) => {
            return (
              <Link key={uuid()} href={it.url}>
                {it.name}
              </Link>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
