import { ChildrenProps } from "@/type";
import React from "react";

const Contents = ({ children }: ChildrenProps) => {
  return (
    <main className="!pt-[50px] common-px" id="home">
      {children}
    </main>
  );
};

export default Contents;
