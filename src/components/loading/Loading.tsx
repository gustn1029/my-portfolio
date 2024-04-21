"use client";

import React from "react";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <SyncLoader color="#A855F7" />
      </div>
    </div>
  );
};

export default Loading;
