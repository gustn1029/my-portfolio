import Image from "next/image";
import React from "react";
import MyProfile from "../../../../../public/images/visual.png";
import style from "@/components/layout/contents/profile/Profile.module.css";

const ProfileImage = () => {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="font-bold text-[2.5rem] pl-[100px]">
        <p className="text-[1.5em]">Hello,</p>
        <p>
          My name is{" "}
          <span className="text-purple-500 drop-shadow-sm">Kim Hyeon Soo</span>
        </p>
        <p>{`I'm Frontend developer`}</p>
      </div>
      <figure className={`max-w-[500px] w-full pr-[50px] pb-[50px] ${style.imageBackground}`}>
        <Image className="relative z-[1] shadow-sm shadow-black" src={MyProfile} alt="my-image" />
      </figure>
    </div>
  );
};

export default ProfileImage;
