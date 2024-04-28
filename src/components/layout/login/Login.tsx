"use client";

import Button from "@/components/button/Button";
import FormInput from "@/components/form/FormInput";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
      redirect: false,
    });

    if (res?.ok) {
      router.push("/contact");
    } else {
      alert(`로그인에 실패했습니다. ${res?.error} \n ${res?.status}`);
    }
  };

  //   style
  const articleStyle = `flex gap-x-[20px]`;
  return (
    <div className="h-screen grid place-items-center">
      <section>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="section-bg flex flex-col gap-y-[30px]"
        >
          <article>
            <h3 className="text text-[2rem] text-center font-bold">Login</h3>
          </article>
          <article className={`${articleStyle}`}>
            <div className="flex">
              <p className="w-[100px]">email</p>
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
            <div className="flex">
              <p className="w-[100px]">password</p>
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
          <article>
            {session?.user ? (
              <Button type="button" text="signOut" />
            ) : (
              <Button type="submit" text="signin" />
            )}
          </article>
        </form>
      </section>
    </div>
  );
};

export default Login;
