"use client";

import { NavigationOption } from "@/type";
import React, { useState } from "react";
import NavItem from "./NavItem";

const navList: NavigationOption[] = [
  { text: "Home", url: "#home" },
  { text: "About", url: "#about" },
  { text: "Skill", url: "#skill" },
  { text: "Project", url: "/project/idl" },
  { text: "Contact", url: "#contact" },
];

const Navigation = () => {
  const [selected, setSelected] = useState(0);

  return (
    <ul className="flex gap-x-[20px] items-center">
      {navList.map((el, idx) => (
        <NavItem
          key={`${el.text}_${idx}`}
          text={el.text}
          url={el.url}
          selected={selected === idx}
          onClick={() => setSelected(idx)}
        />
      ))}
    </ul>
  );
};

export default Navigation;
