"use client";

import React, { useEffect, useRef, useState } from "react";
import Profile from "../layout/contents/profile/Profile";
import About from "../layout/contents/about/About";
import Skill from "../layout/contents/skill/Skill";
import Loading from "../loading/Loading";

const MainClient = () => {
  const [isMount, setIsMount] = useState<boolean>(false);
  const [topPosition, setTopPosition] = useState<number>(0);
  const [wrapHeight, setWrapHeight] = useState<number>(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (skillRef.current) {
      setTopPosition(skillRef.current.offsetTop);
      setWrapHeight(skillRef.current.clientHeight);
    }
  }, [isMount]);

  return !isMount ? (
    <Loading />
  ) : (
    <div className="grid gap-y-[50px]">
      <Profile />
      <About />
      <div ref={skillRef}>
        <Skill topPosition={topPosition} wrapHeight={wrapHeight} />
      </div>
    </div>
  );
};

export default MainClient;
