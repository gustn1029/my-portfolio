"use client";

import Button, { ButtonStye } from "@/components/button/Button";
import FormInput from "@/components/form/FormInput";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

interface LoginEntity {
  userName: string;
  password: string;
}

const Login = () => {
  const router = useRouter();

  const { data: session } = useSession();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginEntity>();

  const onSubmit = async (data: LoginEntity) => {
    const res = await signIn("credentials", {
      userName: data.userName,
      password: data.password,
      redirect: true,
      callbackUrl: "/contact",
    });

    return res;
  };

  //   style
  const articleStyle = `flex gap-x-[20px] phone:gap-x-[0] phone:flex-col phone:gap-y-[10px] phone:text-[0.95rem]`;
  return (
    <div className="h-screen grid place-items-center">
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="section-bg flex flex-col gap-y-[30px] phone:gap-y-[15px]"
        >
          <article className="flex flex-col gap-y-[10px]">
            <h3 className="text text-[2rem] text-center font-bold">Login</h3>
            <div className="flex gap-x-[30px]">
              <p>
                <span className="text-gray-500">email:</span> user@gmail.com
              </p>
              <p>
                <span className="text-gray-500">password:</span> user123
              </p>
            </div>
            <p className="text-gray-400 text-[0.7rem]">
              회원가입 폼은 추 후 업데이트 예정입니다.
            </p>
          </article>
          <article className={`${articleStyle}`}>
            <div className="flex items-center">
              <p className="w-[100px]  phone:w-auto">email</p>
              <span>:</span>
            </div>
            <FormInput
              label="email"
              type="email"
              isLabelTextHidden
              placeholder="이메일을 입력해 주세요."
              register={register("userName")}
              error={errors}
              errorView={errors.userName}
            />
          </article>
          <article className={`${articleStyle}`}>
            <div className="flex items-center">
              <p className="w-[100px] phone:w-auto">password</p>
              <span>:</span>
            </div>
            <FormInput
              label="password"
              type="password"
              isLabelTextHidden
              placeholder="**********"
              register={register("password")}
              error={errors}
              errorView={errors.userName}
            />
          </article>
          <article className="flex flex-col gap-y-[15px]">
            <Button type="submit">signin</Button>
            <Button
              type="button"
              style={ButtonStye.NOMAL}
              onClick={() =>
                signIn("google", { redirect: true, callbackUrl: "/contact" })
              }
            >
              <p className="flex gap-x-[10px] items-center justify-center">
                <FcGoogle />
                <span className="mt-[-3px]">Google Login</span>
              </p>
            </Button>
          </article>
        </form>
      </section>
    </div>
  );
};

export default Login;
