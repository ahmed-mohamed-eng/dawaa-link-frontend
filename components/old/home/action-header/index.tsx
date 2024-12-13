"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  IoPersonOutline,
  IoHeartOutline,
  IoCartOutline,
} from "react-icons/io5";

const ActionHeader = () => {
  const router = useRouter();

  const onSearchSubmit = () => {
    router.push(`/search`);
  };

  const onSearchInput = () => {};

  return (
    <div className="p-8 flex items-center justify-between w-full bg-primary">
      {/* Logo and Search */}
      <div className="flex items-center justify-start space-x-28">
        <Link href="/">
          <Image alt="Logo" src="/logo.png" width={140} height={40} />
        </Link>

        <div className="bg-white flex items-center rounded-3xl pl-2">
          <input
            onChange={onSearchInput}
            className="px-1.5 py-1 outline-none"
            placeholder="Search anything"
          />
          <button
            onClick={onSearchSubmit}
            className="px-5 py-3.5 rounded-3xl bg-secondary text-white"
          >
            Search
          </button>
        </div>
      </div>

      {/* User Actions */}
      <div className="flex items-center justify-start space-x-8 text-white">
        <UserAction
          linkURL="/register"
          Icon={<IoPersonOutline fontSize={25} />}
          name="Sign Up"
        />
        <UserAction
          linkURL="/wish-list"
          Icon={<IoHeartOutline fontSize={25} />}
          name="Whish List"
        />
        <UserAction
          linkURL="/cart"
          Icon={<IoCartOutline fontSize={25} />}
          name="Cart"
        />
      </div>
    </div>
  );
};

type UserActionProps = {
  Icon: React.ReactNode;
  name: string;
  /** Notification of details. */
  nod?: number;
  linkURL: string;
};

function UserAction(props: UserActionProps) {
  return (
    <Link
      href={props.linkURL}
      className="relative flex items-center space-x-2 text-white"
    >
      {props.Icon}

      <div className="flex items-center space-x-1">
        {props.nod ? (
          <span className="text-white bg-secondary rounded-full w-4 h-4 text-xs flex items-center justify-center absolute -top-4 left-1/4">
            {props.nod}
          </span>
        ) : null}
        <p>{props.name}</p>
      </div>
    </Link>
  );
}

export default ActionHeader;
