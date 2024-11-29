"use client";

import React, { useState } from "react";
import axios from "axios";
import { isEmail } from "validator";
import { FaCheck } from "react-icons/fa";
import { SubmitHandler, useForm } from "react-hook-form";

import TitleText from "@/components/common/simple/title-text";
import BorderedBox from "@/components/common/simple/bordered-box";
import BASE_URL from "@/constants/BaseURL";
import IUserData from "@/types/auth/UserData.interface";
import encodeUserData from "@/utils/auth/encodeUserData";
import { useRouter } from "next/navigation";

type FromData = {
  password: string;
  emailOrPhone: string;
};

type LoginResponse = { data: IUserData; message: string; status: boolean };

const LoginForm = () => {
  const { register, handleSubmit } = useForm<FromData>();

  const [rememberMe, setRememberMe] = useState(false);

  const router = useRouter();

  const onSubmitLogin: SubmitHandler<FromData> = async (data) => {
    const rememberMeIndicator = rememberMe ? 1 : 0;

    let userData: IUserData;

    if (isEmail(data.emailOrPhone)) {
      const res = await axios.post<LoginResponse>(
        `${BASE_URL}/client/auth/login`,
        {
          remember_me: rememberMeIndicator,
          password: data.password,
          email: data.emailOrPhone,
        }
      );

      userData = res.data.data;
    } else {
      const res = await axios.post<LoginResponse>(
        `${BASE_URL}/client/auth/login`,
        {
          remember_me: rememberMeIndicator,
          password: data.password,
          phone: data.emailOrPhone,
        }
      );

      userData = res.data.data;
    }

    const encodedUser = encodeUserData(userData);

    if (rememberMe) {
      localStorage.setItem("token", encodedUser);
    } else {
      sessionStorage.setItem("token", encodedUser);
    }

    if (userData?.token) {
      router.push("/");
    }
  };

  return (
    <BorderedBox className="shadow-md w-1/3">
      <form
        className="w-full h-full grid grid-cols-1 gap-x-16 gap-y-12 p-4"
        onSubmit={handleSubmit(onSubmitLogin)}
      >
        <div className="flex flex-col space-y-2">
          <label htmlFor="emailOrPhone">Email or Phone</label>
          <input
            {...register("emailOrPhone", { required: true })}
            placeholder="Enter your email or phone"
            className="border rounded-md p-2 outline-none"
            autoComplete="new-password"
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

        <div className="flex space-x-4 items-center justify-start">
          <button
            onClick={setRememberMe.bind(null, !rememberMe)}
            data-selected={rememberMe || undefined}
            className="w-6 h-6 bg-[#B3D4E5] data-[selected]:bg-[#3F3F3F] rounded-md flex items-center justify-center"
          >
            {rememberMe ? <FaCheck fill="white" fontSize={15} /> : null}
          </button>
          <label htmlFor="remember-me">Remember Me</label>
        </div>

        <button type="submit" className="border border-primary py-3 rounded-md">
          <TitleText sizes="lg" text="Login" />
        </button>
      </form>
    </BorderedBox>
  );
};

export default LoginForm;
