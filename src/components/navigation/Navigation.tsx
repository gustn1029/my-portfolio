"use client";

import { NavigationOption } from "@/type";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useMainSelectedStore } from "@/store/store";

const navList: NavigationOption[] = [
  { text: "Home", url: "/#home" },
  { text: "About", url: "/#about" },
  { text: "Skill", url: "/#skill" },
  { text: "Project", url: "/project" },
  { text: "Contact", url: "/contact" },
];

const Navigation = () => {
  const [selected, setSelected] = useState<number>(() => {
    const currentPath =
      typeof window !== "undefined" && window.location.pathname;
    const foundIndex = navList.findIndex((el) =>
      el.url.includes(currentPath as string)
    );
    return foundIndex !== -1 ? foundIndex : 0;
  });

  const {setMainSelected} = useMainSelectedStore();
  const mainSelect = useMainSelectedStore((state)=> state.mainSelect);

  useEffect(() => {
    const pathChange = () => {
      const currentPath = window.location.pathname;
      const foundIndex = navList.findIndex((el) =>
        el.url.includes(currentPath)
      );
      const contactPath = currentPath.includes("/contact") || currentPath.includes("signin");
      setSelected(contactPath ? 4 : (foundIndex !== -1 ? foundIndex : 0));
    };

    pathChange();

    window.addEventListener("load", pathChange);

    return () => {
      window.removeEventListener("load", pathChange);
    };
  }, []);

  useEffect(()=> {
    if(mainSelect === true) {
      setSelected(0)
    }
  },[mainSelect])

  return (
    <ul className="flex gap-x-[20px] items-center phone:gap-x-[15px]">
      {navList.map((el, idx) => (
        <NavItem
          key={`${el.text}_${idx}`}
          text={el.text}
          url={el.url}
          selected={selected === idx}
          onClick={() => {
            setSelected(idx)
            setMainSelected(false)
          }}
        />
      ))}
    </ul>
  );
};

export default Navigation;
