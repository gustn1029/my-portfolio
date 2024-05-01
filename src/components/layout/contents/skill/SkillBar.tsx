import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const SkillBar = ({ children, className }: IProps) => {
  return (
    <div
      className="w-[70%] m-auto flex items-center gap-x-[70px] 
          phone:gap-x-0 mobile:w-full phone:gap-y-[10px]
          phone:flex-col phone:items-start"
    >
      <div className="flex flex-col phone:flex-row mobile:text-[0.85rem] w-[130px] 
      phone:w-[150px] gap-y-[5px] phone:gap-y-0 phone:gap-x-[10px]">
        {children}
      </div>
      <div className="flex-1 phone:flex-auto phone:w-full relative h-6 overflow-hidden bg-gray-200 rounded-3xl shadow-inner">
        <div
          className={`${className} absolute left-0 top-0 h-6 bg-gradient-to-r rounded-3xl shadow-lg shadow-gray-500 from-violet-500 to-fuchsia-500 transition-all duration-500`}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
