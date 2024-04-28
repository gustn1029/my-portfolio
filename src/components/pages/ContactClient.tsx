"use client";

import { Contact } from "@/type";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "../form/FormInput";
import Button from "../button/Button";
import SectionTItle from "../title/SectionTItle";
import { useRouter } from "next/navigation";

const ContactClient = () => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Contact>();

  const onSubmit = async (data: Contact) => {
    const res = await fetch(`/api/post`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("제안해 주셔서 감사합니다. \n확인하는 대로 연락 드리겠습니다!");
      router.push("/")
    } else {
      alert(`데이터 저장에 실패했습니다.\n${res.status}`);
    }
  };
  return (
    <div className="min-h-screen grid place-items-center">
      <section className="section-bg w-full">
        <SectionTItle text="Contact" desc="편하게 제안해주세요." />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-[50px]"
        >
          <article>
            <FormInput
              type="text"
              label="제목"
              placeholder="제목을 입력해주세요."
              register={register("title", {
                maxLength: {
                  value: 30,
                  message: "제목은 최대 30자까지 입력 가능합니다.",
                },
                required: {
                  value: true,
                  message: "제목을 입력해주세요.",
                },
              })}
              error={errors}
              errorView={errors.title}
            />
          </article>
          <article>
            <FormInput
              type="email"
              label="이메일"
              placeholder="이메일을 입력해주세요."
              register={register("email", {
                maxLength: {
                  value: 100,
                  message: "이메일은 최대 100자까지 입력 가능합니다.",
                },
                pattern: {
                  value: /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/,
                  message: "이메일을 올바르게 입력해주세요.",
                },
                required: {
                  value: true,
                  message: "이메일을 입력해주세요.",
                },
              })}
              error={errors}
              errorView={errors.email}
            />
          </article>
          <article>
            <FormInput
              type="text"
              label="내용"
              placeholder="내용을 입력해주세요."
              register={register("content", {
                maxLength: {
                  value: 300,
                  message: "내용은 최대 300자까지 입력 가능합니다.",
                },
                required: {
                  value: true,
                  message: "내용을 입력해주세요.",
                },
              })}
              error={errors}
              errorView={errors.content}
            />
          </article>
          <article>
            <Button type="submit" text="제안하기" />
          </article>
        </form>
      </section>
    </div>
  );
};

export default ContactClient;
