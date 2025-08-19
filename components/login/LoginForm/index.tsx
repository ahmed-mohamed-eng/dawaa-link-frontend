"use client";

import axios from "axios";
import React from "react";
import { DateTime } from "luxon";
import { useTranslations } from "next-intl";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import BASE_URL from "@/constants/BaseURL";
import TokenName from "@/constants/TokenName";

type FormLoginData = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const t = useTranslations("LoginPage");

  const { register, handleSubmit } = useForm<FormLoginData>();

  const router = useRouter();

  const onSubmitForm: SubmitHandler<FormLoginData> = async (data) => {
    const body = {
      remember_me: data.rememberMe ? 1 : 0,
      email: data.email,
      password: data.password,
    };

    const url = `${BASE_URL}/client/auth/login`;

    const res = await toast.promise(axios.post(url, body), {
      loading: "Login Now",
      success: "Welcome to our website.",
      error: "Can't login to the website.",
    });

    const token = (res.data?.data.token as string) || "";

    if (!token) {
      toast.error("Can't login, please try again later.");
      return;
    }

    const expires = DateTime.now().plus({ days: 14 }).toUTC();
    document.cookie = `${TokenName}=${token};expires=${expires};path=/`;

    router.push("/");
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="w-2/3 p-4 bg-[#00A6FB] rounded-lg flex flex-col items-center justify-start space-y-8"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="w-full flex flex-col items-start justify-start space-y-6">
          {/* Email */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-email"
              className="w-full font-bold text-white text-xl"
            >
              {t("email")}
            </label>
            <input
              id="user-email"
              type="email"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder={t("emailPlaceholder")}
              {...register("email", { required: true })}
            />
          </div>

          {/* Password */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-password"
              className="w-full font-bold text-white text-xl"
            >
              {t("password")}
            </label>
            <input
              id="user-password"
              type="password"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder={t("passwordPlaceholder")}
              {...register("password", { required: true })}
            />
          </div>

          {/* Remember Me */}
          <div className="w-full flex items-center justify-start">
            <label
              htmlFor="user-remember-me"
              className="font-bold text-white text-xl"
            >
              {t("rememberMe")}
            </label>
            <input
              id="user-remember-me"
              className="px-4 py-3 text-lg outline-none rounded-md mx-2"
              type="checkbox"
              {...register("rememberMe")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-8 py-2 text-lg rounded-md bg-[#023E8A] font-bold text-white"
        >
          {t("login")}
        </button>
      </form>

      <Toaster />
    </div>
  );
};

export default LoginForm;
