"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Post } from "@/type";
import Contact, { ContactOption } from "./Contact";
import Loading from "../loading/Loading";

interface Props {
  contactId: string;
}

const ContactList = ({contactId}:Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const id = contactId;

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const {
    data: ContactList,
    error,
    isLoading,
  } = useSWR<ContactOption[]>(
    status === "authenticated" ? `/api/contact/${id}` : null,
    fetcher
  ); // 수정: 조건부로 useSWR 호출

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <ul className="grid gap-y-[50px]">
        {ContactList?.map((el, idx) => (
          <Contact
            key={`${el.title}_${idx}`}
            title={el.title}
            email={el.email}
            content={el.content}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
