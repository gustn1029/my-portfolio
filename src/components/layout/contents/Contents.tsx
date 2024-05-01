"use client";

import Loading from "@/components/loading/Loading";
import { ChildrenProps } from "@/type";
import React, { useEffect, useState } from "react";

const Contents = ({ children }: ChildrenProps) => {
  const [isMount, setIsMount] = useState<boolean>(false);
  useEffect(()=> {
    setIsMount(true);
  },[])

  return (
    !isMount ? <Loading /> : (
      <main className="!pt-[50px] common-px" id="home">
      {children}
    </main>
    )
  );
};

export default Contents;
