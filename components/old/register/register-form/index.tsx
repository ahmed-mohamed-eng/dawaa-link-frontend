"use client";

import React, { useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";

import TitleText from "@/components/common/simple/title-text";
import BorderedBox from "@/components/common/simple/bordered-box";
import convertBufferToBase64 from "@/utils/convertBufferToBase64";
import ILangLocale from "@/types/lang-locale.interface";
import BASE_URL from "@/constants/BaseURL";
import { useRouter } from "next/navigation";

type FromData = {
  name: string;
  phone: string;
  email: string;
  password: string;
  commercialRegister: FileList;
  passwordConfirmation: string;
  companyName?: string;
  photo?: FileList;
};

type CreateUserResponse = {
  status: boolean;
  message: string;
};

const RegisterForm = ({ locale }: ILangLocale) => {
  const { register, handleSubmit } = useForm<FromData>();

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [imageFileName, setImageFileName] = useState("");
  const [vatFileName, setVatFileName] = useState("");
  const [loading, setLoading] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  const router = useRouter();

  const onSubmitRegister: SubmitHandler<FromData> = async (data) => {
    setLoading(true);

    if (data.passwordConfirmation !== data.password) {
      setLoading(false);
      return;
    }

    const body: { [k: string]: string | number | object } = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.passwordConfirmation,
      lang: locale || "ar",
      terms: acceptTerms ? 1 : 0,
    };

    if (data.commercialRegister?.[0]) {
      body.commercial_register = data.commercialRegister[0];
    }

    if (data?.photo?.[0]) {
      body.photo = data.photo;
    }

    if (data?.phone) {
      body.phone = data.phone;
    }

    if (data?.companyName) {
      body.company_name = data.companyName;
    }

    try {
      const res = await axios.postForm<CreateUserResponse>(
        `${BASE_URL}/client/auth/register`,
        body
      );

      if (res.data.status) {
        router.push(`/${locale || "en"}/login`);
      }
    } catch {
      console.error("Couldn't Register The User");
    }

    setLoading(false);
  };

  const onSelectImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0];

    if (!file) {
      return;
    }

    if (file.size >= 2_000_000) {
      return;
    }

    const filedata = await file.arrayBuffer();
    const encodedFileData = convertBufferToBase64(filedata);

    if (imgRef?.current) {
      imgRef.current.src = `data:${file.type};base64,${encodedFileData}`;
      imgRef.current.srcset = `data:${file.type};base64,${encodedFileData}`;
    }

    setImageFileName(file.name);
  };

  return (
    <BorderedBox className="shadow-md w-1/2">
      <form
        className="w-full h-full grid grid-cols-2 gap-x-10 gap-y-8 p-4"
        onSubmit={handleSubmit(onSubmitRegister)}
        encType="multipart/"
      >
        <div className="col-span-2 flex flex-col space-y-3 items-center justify-center">
          <input
            type="file"
            className="hidden"
            id="photo"
            accept="image/png, image/jpeg, image/jpg, image/gif"
            {...register("photo", { onChange: onSelectImage })}
          />

          <label
            htmlFor="photo"
            className="relative border p-2 outline-none w-24 h-24 cursor-pointer rounded-full flex items-center justify-center"
          >
            <Image
              ref={imgRef}
              alt="User Uploaded Data"
              src="/person.png"
              className="rounded-full w-full h-full"
              fill
              style={{ objectFit: "contain" }}
            />
          </label>

          <p>{imageFileName || "Select Image File"}</p>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="user-name">Name</label>
          <input
            id="user-name"
            placeholder="Enter your name"
            className="border rounded-md p-2 outline-none"
            autoComplete="new-password webauthn"
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="user-email">Email</label>
          <input
            id="user-email"
            placeholder="Enter your email"
            type="email"
            className="border rounded-md p-2 outline-none"
            autoComplete="new-password webauthn"
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="user-password">Password</label>
          <input
            id="user-password"
            placeholder="Enter your password"
            type="password"
            className="border rounded-md p-2 outline-none"
            autoComplete="new-password webauthn"
            {...register("password", { required: true })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            placeholder="Confirm Your Password"
            type="password"
            className="border rounded-md p-2 outline-none"
            required
            autoComplete="new-password webauthn"
            {...register("passwordConfirmation", { required: true })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            placeholder="Enter your phone number"
            className="border rounded-md p-2 outline-none"
            {...register("phone", { required: true })}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            placeholder="Enter your Company Name"
            className="border rounded-md p-2 outline-none"
            {...register("companyName")}
          />
        </div>

        <div className="col-span-2 flex flex-col space-y-3 items-center justify-center">
          <input
            type="file"
            className="hidden"
            id="vat-file"
            accept="application/pdf"
            {...register("commercialRegister", {
              required: true,
              onChange: (e) => setVatFileName(e.target.files?.[0].name || ""),
            })}
          />

          <label
            htmlFor="vat-file"
            className="relative border p-2 outline-none cursor-pointer flex items-center justify-center w-full"
          >
            <p>{vatFileName || "Select File"}</p>
          </label>
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
          disabled={loading || undefined}
          type="submit"
          className="col-span-2 border border-primary py-3 rounded-md"
        >
          <TitleText sizes="lg" text={loading? "Creating Account" :"Register"} />
        </button>
      </form>
    </BorderedBox>
  );
};

export default RegisterForm;
