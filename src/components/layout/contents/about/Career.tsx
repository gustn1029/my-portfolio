import React from "react";

export interface CareerOption {
  company: string;
  period: string;
  position: string;
  desc: string;
}

interface CareerProps {
  careerList: CareerOption[];
  width?: number;
}

const Career = ({ careerList, width }: CareerProps) => {
  return (
    <ul className="flex flex-col gap-y-[10px]">
      {careerList.map((el, idx) => (
        <li key={`${el.company}_${idx}`} className="flex gap-x-5">
          <p className="w-[150px]">{el.period}</p>
          <div>
            <div>
              <strong style={{ width: `${width}px` }}>{el.company}</strong>
              <span>{el.position}</span>
            </div>
            <p>{el.desc}</p>
            <dl>
                <dt></dt>
                <div>
                    <dd></dd>
                    <dd></dd>
                    <dd></dd>
                </div>
            </dl>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Career;
