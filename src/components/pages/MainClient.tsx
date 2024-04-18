'use client';

import React from "react";
import Profile from "../layout/profile/Profile";

const MainClient = () => {
  return (
    <>
      <div>
        <Profile />
        <div className="h-screen" id="about"></div>
      </div>
    </>
  );
};

export default MainClient;
