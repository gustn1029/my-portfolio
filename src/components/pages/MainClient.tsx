'use client';

import React from "react";
import Profile from "../layout/contents/profile/Profile";
import About from "../layout/contents/about/About";

const MainClient = () => {
  return (
    <>
      <div className="grid gap-y-[50px]">
        <Profile />
        <About />
      </div>
    </>
  );
};

export default MainClient;
