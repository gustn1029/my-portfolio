import React from "react";
import ProfileImage from "./ProfileImage";

const Profile = () => {
  return (
    <div className={`w-full h-[calc(100vh-50px)] flex justify-between items-center`}>
      <div className="w-full">
        <ProfileImage />
      </div>
    </div>
  );
};

export default Profile;
