import React from "react";
import ProfileImage from "./ProfileImage";
import style from "@/components/layout/profile/Profile.module.css";

const Profile = () => {
  return (
    <div className={`${style.imageBackground} grid grid-rows-[60%_40%] gap-y-[15%] overflow-hidden`}>
      <div>
        <ProfileImage />
      </div>
      <div className="relative z-10 text-[30px] text-center">
        <p>Hello, My name is <span className="font-bold">KIM HYEON SOO</span>,</p>
        <p>{`I'am a `}<span className="font-bold">Frontend developer</span></p>
      </div>
    </div>
  );
};

export default Profile;
