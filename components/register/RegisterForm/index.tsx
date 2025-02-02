"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import BASE_URL from "@/constants/BaseURL";

type FormRegisterData = {
  name: string;
  phone: string | number;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
  companyName: string;
  commercialRegister: File;
  photo: File;
};

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<FormRegisterData>();

  const [photoName, setPhotoName] = useState<string>();
  const [photoUri, setPhotoUri] = useState<string>();
  const [commercialName, setCommercialName] = useState<string>();

  const router = useRouter();

  const onSubmitForm: SubmitHandler<FormRegisterData> = async (data) => {
    const lang = navigator.language.replace("-Us", "");

    const body = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
      terms: data.terms ? 1 : 0,
      company_name: data.companyName,
      photo: data.photo,
      commercial_register: data.commercialRegister,
      lang,
    };

    const url = `${BASE_URL}/client/auth/register`;

    const res = await toast.promise(axios.post(url, body), {
      loading: "Registering Now",
      success: "Welcome to our website.",
      error: "Can't register to the website.",
    });

    if (!res.data) {
      toast.error("Can't register, please try again later.");
      return;
    }

    router.push("/login");
  };

  const onUploadPhotoChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    const fileData = await file?.arrayBuffer();

    if (!fileData) {
      return;
    }

    const base64String = btoa(String.fromCharCode(...new Uint8Array(fileData)));

    setPhotoName(file?.name);
    setPhotoUri(base64String);
  };

  const onUploadCommercialChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    setCommercialName(file?.name);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <form
        className="p-4 bg-[#00A6FB] rounded-lg flex flex-col items-center justify-start space-y-8"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-8">
          {/* User Photo */}
          <div className="w-full col-span-2 flex flex-col items-center justify-start space-y-3">
            <h1 className="w-full font-bold text-white text-xl text-center">
              User Photo
            </h1>

            <label
              htmlFor="user-photo"
              className="flex items-center justify-center w-20 h-20 rounded-full border bg-white text-sm overflow-hidden p-2"
            >
              {photoUri ? (
                <div className="relative w-full h-full">
                  <Image
                    alt={photoName || ""}
                    src={`data:image/jpeg;base64,${photoUri}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="w-full h-full"
                  />
                </div>
              ) : null}
            </label>

            <span className="text-sm text-slate-600">{photoName}</span>

            <input
              id="user-photo"
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/avif"
              className="hidden w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Your Email"
              {...register("photo", {
                required: true,
                onChange: onUploadPhotoChange,
              })}
            />
          </div>

          {/* User Name */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-name"
              className="w-full font-bold text-white text-xl"
            >
              Name
            </label>
            <input
              id="user-name"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Your Name"
              {...register("name", { required: true })}
            />
          </div>

          {/* Phone */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-phone"
              className="w-full font-bold text-white text-xl"
            >
              Mobile Phone
            </label>
            <input
              id="user-phone"
              type="tel"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Your Number"
              {...register("phone")}
            />
          </div>

          {/* Email */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-email"
              className="w-full font-bold text-white text-xl"
            >
              Email
            </label>
            <input
              id="user-email"
              type="email"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Your Email"
              {...register("email", { required: true })}
            />
          </div>

          {/* Company Name */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-company-name"
              className="w-full font-bold text-white text-xl"
            >
              Company Name
            </label>
            <input
              id="user-company-name"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Your Company Name"
              {...register("companyName", { required: true })}
            />
          </div>

          {/* Password */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-password"
              className="w-full font-bold text-white text-xl"
            >
              Password
            </label>
            <input
              id="user-password"
              type="password"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Password"
              {...register("password", { required: true })}
            />
          </div>

          {/* Confirmation Password */}
          <div className="w-full flex flex-col items-start justify-start space-y-2">
            <label
              htmlFor="user-password-confirmation"
              className="w-full font-bold text-white text-xl"
            >
              Confirm Password
            </label>
            <input
              id="user-password-confirmation"
              type="password"
              className="w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Password"
              {...register("password", { required: true, deps: ["password"] })}
            />
          </div>

          {/* Commercial Register */}
          <div className="w-full col-span-2 flex flex-col items-center justify-start space-y-3">
            <label
              htmlFor="user-commercial-photo"
              className="flex items-center justify-center w-full px-12 py-2 bg-white rounded-md cursor-pointer"
            >
              {commercialName || "Commercial Register"}
            </label>

            <input
              id="user-commercial-photo"
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp, image/avif, application/pdf"
              className="hidden w-full px-4 py-3 text-lg outline-none rounded-md"
              placeholder="Please Enter Your Email"
              {...register("commercialRegister", {
                required: true,
                onChange: onUploadCommercialChange,
              })}
            />
          </div>

          {/* Terms */}
          <div className="w-full col-span-2 flex items-center justify-start space-x-4">
            <label
              htmlFor="website-terms"
              className="font-bold text-white text-xl"
            >
              Our Terms and Conditions
            </label>
            <input
              id="website-terms"
              className="px-4 py-3 text-lg outline-none rounded-md"
              type="checkbox"
              {...register("terms")}
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-8 py-2 text-lg rounded-md bg-[#023E8A] font-bold text-white"
        >
          Register
        </button>
      </form>

      <Toaster />
    </div>
  );
};

export default RegisterForm;
