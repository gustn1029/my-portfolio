import React from "react";

export interface CareerOption {
  company: string;
  period: string;
  position: string;
  desc: string[];
  hashTag: string;
}

interface CareerProps {
  careerList: CareerOption[];
  width?: number;
}

const Career = ({ careerList, width }: CareerProps) => {
  return (
    <ul className="flex flex-col gap-y-[20px]">
      {careerList.map((el, idx) => (
        <li
          key={`${el.company}_${idx}`}
          className="flex break-keep gap-x-5 tablet:flex-col target:gap-y-[10px] mobile:flex-col mobile:gap-y-[10px]"
        >
          <p
            className="w-[171px] max-h-[24px] pr-[20px] pb-[3px] text-gray-500 border-r border-r-gray-300"
          >
            {el.period}
          </p>
          <div className="flex-1 flex flex-col gap-y-[10px]">
            <div className="flex gap-x-[10px] items-end">
              <strong style={{ width: `${width}px` }}>{el.company}</strong>
              <span className="text-gray-400 text-[0.9rem]">{el.position}</span>
            </div>
            <div className="grid gap-y-[5px] text-[0.95rem]">
              {el.desc.map((item, idx) => (
                <p key={`${item}_${idx}`}>{item}</p>
              ))}
            </div>
            <div className="flex gap-x-[10px] flex-wrap gap-y-[5px]">
              {el.hashTag.split(", ").map((tag, idx) => {
                return (
                  <div
                    key={`${tag}_${idx}`}
                    className={`border-purple-500 border rounded-lg px-[7px] py-[3px] text-[14px] text-purple-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:text-white transition-all poin cursor-default`}
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Career;
