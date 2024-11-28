"use client";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import BorderedBox from "@/components/common/simple/bordered-box";
import TitleText from "@/components/common/simple/title-text";
import { FaCheck } from "react-icons/fa";

type FromData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  companyName?: string;
};

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<FromData>();

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [confirmPasswordTxt, setConfirmPasswordTxt] = useState("");

  const onSubmitRegister: SubmitHandler<FromData> = (data) => {
    if (confirmPasswordTxt !== data.password) {
      return;
    }
  };

  return (
    <BorderedBox className="shadow-md">
      <form
        className="w-full h-full grid grid-cols-2 gap-x-16 gap-y-12 p-4"
        onSubmit={handleSubmit(onSubmitRegister)}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="name">Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter your name"
            className="border rounded-md p-2 outline-none"
            autoComplete="new-password"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="user-email">Email</label>
          <input
            id="user-email"
            {...register("email", { required: true })}
            placeholder="Enter your email"
            type="email"
            className="border rounded-md p-2 outline-none"
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            placeholder="Enter your password"
            type="password"
            className="border rounded-md p-2 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            name="confirm-password"
            placeholder="Confirm Your Password"
            type="password"
            className="border rounded-md p-2 outline-none"
            required
            onChange={(e) => setConfirmPasswordTxt(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            {...register("phone", { required: true })}
            placeholder="Enter your phone number"
            className="border rounded-md p-2 outline-none"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="companyName">Company Name</label>
          <input
            {...register("companyName")}
            placeholder="Enter your Company Name"
            className="border rounded-md p-2 outline-none"
          />
        </div>

        <div className="flex space-x-4 items-center justify-start">
          <button
            onClick={setAcceptTerms.bind(null, !acceptTerms)}
            data-selected={acceptTerms || undefined}
            className="w-6 h-6 bg-[#B3D4E5] data-[selected]:bg-[#3F3F3F] rounded-md flex items-center justify-center"
          >
            {acceptTerms ? <FaCheck fill="white" fontSize={15} /> : null}
          </button>
          <label htmlFor="usage-terms">Accept Usage Terms</label>
        </div>

        <button
          type="submit"
          className="col-span-2 border border-primary py-3 rounded-md"
        >
          <TitleText sizes="lg" text="Register" />
        </button>
      </form>
    </BorderedBox>
  );
};

export default RegisterForm;
