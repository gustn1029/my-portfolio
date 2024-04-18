"use client";

import Navigation from "@/components/navigation/Navigation";
import useScrollPosition from "@/hook/useScrollPosition";
import React, { useEffect } from "react";

const Header = () => {
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`fixed flex top-0 left-[50%] translate-x-[-50%] h-[50px] items-center justify-between px-10 
      ${scrollPosition === 0 ? " w-full translate-y-0" : " w-[90%] bg-white bg-opacity-60 translate-y-5 rounded-[30px] shadow-lg"}
      transition-all
      backdrop-blur-sm
      z-[100]
      `}
    >
      <h2 className="dancing-font font-bold text-[20px]">KimHyeonSoo</h2>
      <Navigation />
    </header>
  );
};

export default Header;
