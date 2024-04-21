import React from "react";
import Section from "../Section";
import SectionTItle from "@/components/title/SectionTItle";
import SkillBar from "./SkillBar";
import useInvitePosition from "@/hook/useInvitePosition";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { useSkillPositionStore } from "@/store/store";

const Skill = () => {

  const topPosition = useSkillPositionStore((state) => state.topPosition);
  const wrapHeight = useSkillPositionStore((state) => state.wrapHeight);

  const { isEnter, percentage, inviteHeight, invitePosition } =
    useInvitePosition({ topPosition: topPosition, height: wrapHeight });

  //   style
  const barTextStyle = `flex gap-x-[10px] items-center text-gray-400 0.9rem`;
  const barPercentStyle = `leading-[1] mt-[-3px] transition-all duration-200`;

  return (
    <Section
      id="skill"
      className={`${
        isEnter ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[50px]"
      } transition-all duration-300`}
    >
      <div>
        <SectionTItle text="Skills" />
        <article className="grid gap-y-[30px]">
          <SkillBar className={`${percentage >= -20 ? "w-[85%]" : "w-0"}`}>
            <p>HTML</p>
            <div className={`${barTextStyle}`}>
              <SiHtml5 className="text-orange-500" />
              <span
                className={`${barPercentStyle} ${
                  percentage >= -20 ? "opacity-100" : "opacity-0"
                }`}
              >
                85%
              </span>
            </div>
          </SkillBar>
          <SkillBar className={`${percentage >= -20 ? "w-[85%]" : "w-0"}`}>
            <p>CSS</p>
            <div className={`${barTextStyle}`}>
              <SiCss3 className="text-blue-500" />
              <span
                className={`${barPercentStyle} ${
                  percentage >= -20 ? "opacity-100" : "opacity-0"
                }`}
              >
                85%
              </span>
            </div>
          </SkillBar>
          <SkillBar className={`${percentage >= -20 ? "w-[75%]" : "w-0"}`}>
            <p>JAVASCRIPT</p>
            <div className={`${barTextStyle}`}>
              <SiJavascript className="text-yellow-400" />
              <span
                className={`${barPercentStyle} ${
                  percentage >= -20 ? "opacity-100" : "opacity-0"
                }`}
              >
                75%
              </span>
            </div>
          </SkillBar>
          <SkillBar className={`${percentage >= -20 ? "w-[70%]" : "w-0"}`}>
            <p>REACT</p>
            <div className={`${barTextStyle}`}>
              <SiReact className="text-sky-500" />
              <span
                className={`${barPercentStyle} ${
                  percentage >= -20 ? "opacity-100" : "opacity-0"
                }`}
              >
                70%
              </span>
            </div>
          </SkillBar>
          <SkillBar className={`${percentage >= -20 ? "w-[70%]" : "w-0"}`}>
            <p>NEXT.JS</p>
            <div className={`${barTextStyle}`}>
              <SiNextdotjs className="text-black" />
              <span
                className={`${barPercentStyle} ${
                  percentage >= -20 ? "opacity-100" : "opacity-0"
                }`}
              >
                70%
              </span>
            </div>
          </SkillBar>
          <SkillBar className={`${percentage >= -20 ? "w-[75%]" : "w-0"}`}>
            <p>TAILWIND CSS</p>
            <div className={`${barTextStyle}`}>
              <SiTailwindcss className="text-blue-500" />
              <span
                className={`${barPercentStyle} ${
                  percentage >= -20 ? "opacity-100" : "opacity-0"
                }`}
              >
                75%
              </span>
            </div>
          </SkillBar>
        </article>
      </div>
    </Section>
  );
};

export default Skill;
