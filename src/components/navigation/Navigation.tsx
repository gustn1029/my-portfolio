"use client";

import { NavigationOption } from "@/type";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

const navList: NavigationOption[] = [
  { text: "Home", url: "/#home" },
  { text: "About", url: "/#about" },
  { text: "Skill", url: "/#skill" },
  { text: "Project", url: "/project" },
  { text: "Contact", url: "/contact" },
];

const Navigation = () => {
  const [selected, setSelected] = useState<number>(() => {
    const currentPath = window.location.pathname;
    const foundIndex = navList.findIndex((el) => el.url.includes(currentPath));
    return foundIndex !== -1 ? foundIndex : 0;
  });

  useEffect(() => {
    const pathChange = () => {
      const currentPath = window.location.pathname;
      const foundIndex = navList.findIndex((el) =>
        el.url.includes(currentPath)
      );
      setSelected(foundIndex !== -1 ? foundIndex : 0);
    };

    pathChange();

    window.addEventListener("load", pathChange);

    return () => {
      window.removeEventListener("load", pathChange);
    };
  }, []);

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
