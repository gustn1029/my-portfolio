"use client";

import React, { useEffect, useRef } from "react";
import Profile from "../layout/contents/profile/Profile";
import About from "../layout/contents/about/About";
import Skill from "../layout/contents/skill/Skill";
import Loading from "../loading/Loading";
import {
  useIsMountStore,
  useAboutPositionStore,
  useSkillPositionStore,
} from "@/store/store";

const MainClient = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);

  const { isMount, setIsMount } = useIsMountStore();
  const {
    setTopPosition: setAboutTopPosition,
    setWrapHeight: setAboutWrapHeight,
  } = useAboutPositionStore();
  const {
    setTopPosition: setSkillTopPosition,
    setWrapHeight: setSkillWrapHeight,
  } = useSkillPositionStore();

  useEffect(() => {
    setIsMount(true);
  }, []);

  useEffect(() => {
    if (aboutRef.current) {
      setAboutTopPosition(aboutRef.current.offsetTop);
      setAboutWrapHeight(aboutRef.current.clientHeight);
    }

    if (skillRef.current) {
      setSkillTopPosition(skillRef.current.offsetTop);
      setSkillWrapHeight(skillRef.current.clientHeight);
    }
  }, [
    isMount,
    setAboutTopPosition,
    setAboutWrapHeight,
    setSkillTopPosition,
    setSkillWrapHeight,
  ]);

  return !isMount ? (
    <Loading />
  ) : (
    <div className="grid gap-y-[50px]">
      <Profile />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
    </div>
  );
};

export default MainClient;
