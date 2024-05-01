"use client";

import Navigation from "@/components/navigation/Navigation";
import useScrollPosition from "@/hook/useScrollPosition";
import React, { useEffect, useState } from "react";
import { PiSignOutBold } from "react-icons/pi";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useMainSelectedStore } from "@/store/store";
import { usePathname } from "next/navigation";
import Loading from "@/components/loading/Loading";

const Header = () => {
  const scrollPosition = useScrollPosition();
  const { data: session } = useSession();
  const { setMainSelected } = useMainSelectedStore();
  const [isMount, setIsMount] = useState<boolean>(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  const path = usePathname();

  return !isMount ? (
    null
  ) : (
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
      phone:h-[60px]
      phone:gap-x-0
      phone:justify-center
      phone:gap-y-[5px]
      `}
    >
      <h2 className="dancing-font font-bold text-[20px] phone:text-[14px]">
        <Link onClick={() => setMainSelected(true)} href={"/#home"}>
          KimHyeonSoo
        </Link>
      </h2>
      <div className="flex gap-x-[20px] items-end">
        <Navigation />
        {session?.user && (
          <PiSignOutBold
            className="mb-[3px] text-gray-500 hover:text-black cursor-pointer transition-all"
            onClick={() => {
              setMainSelected(path.includes("/contact") ? false : true);
              signOut();
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
