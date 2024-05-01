"use client";

import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Post } from "@/type";
import Contact from "./Contact";

const ContactList = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [dataList, setDataList] = useState<Post[]>([]);

  if (status !== "authenticated") {
    router.push("/signin");
    return <></>;
  }

  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data, error, isLoading } = useSWR(`/api/post/1`, fetcher);

  useEffect(() => {
    setDataList([...data]);
  }, [data]);

  return (
    <div>
      <ul className="grid gap-y-[50px]">
        {dataList.map((el, idx) => (
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
