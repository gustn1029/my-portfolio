"use client";

import ContactClient from "@/components/pages/ContactClient";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import ContactList from "@/components/contact/ContactList";

const Page = () => {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.user?.email !== "gustn1029@gmail.com") {
      router.push("/#home");
    }
  }, [data, router]);

  return <ContactList contactId="1" />;
};

export default Page;
