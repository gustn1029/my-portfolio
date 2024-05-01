"use client";

import ContactClient from '@/components/pages/ContactClient'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

const page = () => {
  const {data} = useSession();
  const router = useRouter();

  useEffect(() => {
    if (data?.user?.email === "admin@gmail.com") {
      router.push("/contact/1")
    }
  }, [data])

  return (
    <ContactClient />
  )
}

export default page