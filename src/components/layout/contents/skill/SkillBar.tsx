import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const SkillBar = ({children, className }: IProps) => {
  return (
    <div className="w-[70%] m-auto flex items-center gap-x-[70px] mobile:flex-col mobile:gap-y-[10px] mobile:gap-x-0 mobile:w-full">
      <div className="grid w-[130px] gap-y-[5px]">{children}</div>
      <div className="flex-1 relative h-6 overflow-hidden bg-gray-200 rounded-3xl shadow-inner">
        <div
          className={`${className} absolute left-0 top-0 h-6 bg-gradient-to-r rounded-3xl shadow-lg shadow-gray-500 from-violet-500 to-fuchsia-500 transition-all duration-500`}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
