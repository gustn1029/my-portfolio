"use client";

import Navigation from "@/components/navigation/Navigation";
import useScrollPosition from "@/hook/useScrollPosition";
import React, { useEffect } from "react";
import { PiSignOutBold } from "react-icons/pi";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const { data: session } = useSession();

  return (
    <header
      className={`fixed flex top-0 left-[50%] translate-x-[-50%] h-[50px] items-center justify-between common-px 
      ${
        scrollPosition === 0
          ? " w-full translate-y-0"
          : " w-[90%] bg-white bg-opacity-60 translate-y-5 rounded-[30px] shadow-lg"
      }
      transition-all
      backdrop-blur-sm
      z-[100]
      phone:flex-col
      phone:gap-x-0
      phone:justify-center
      phone:gap-y-[10px]
      `}
    >
      <h2 className="dancing-font font-bold text-[20px] phone:text-[16px]">
        <Link href={"/#home"}>KimHyeonSoo</Link>
      </h2>
      <div className="flex gap-x-[20px] items-end">
        <Navigation />
        {session?.user && <PiSignOutBold className="mb-[3px] text-gray-500 hover:text-black cursor-pointer transition-all" onClick={() => signOut()} />}
      </div>
    </header>
  );
};

export default Header;
