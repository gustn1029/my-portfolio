"use client";

import React from 'react'
import { SessionProvider } from 'next-auth/react';
import { ChildrenProps } from '@/type';

const Providers = ({children}:ChildrenProps) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Providers