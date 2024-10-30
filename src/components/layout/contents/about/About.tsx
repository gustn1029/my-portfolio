import SectionTItle from "@/components/title/SectionTItle";
import Image from "next/image";
import React from "react";
import MyProfile from "../../../../../public/images/profile.jpg";
import Career, { CareerOption } from "./Career";
import Section from "../Section";
import useInvitePosition from "@/hook/useInvitePosition";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { useAboutPositionStore } from "@/store/store";
import Link from "next/link";

const About = () => {
  const topPosition = useAboutPositionStore((state) => state.topPosition);
  const wrapHeight = useAboutPositionStore((state) => state.wrapHeight);

  const { isEnter, percentage, inviteHeight, invitePosition } =
    useInvitePosition({ topPosition: topPosition, height: wrapHeight });

  const careerList: CareerOption[] = [
    {
      company: "웹디자인(웹퍼블리셔) 프론트앤드 실무자 양성 과정",
      period: "2020. 06 ~ 2020. 10",
      position: "",
      desc: ["기본적인 퍼블리싱 능력을 키울 수 있었던 국비교육과정"],
      hashTag: "#HTML, #CSS, #JAVASCRIPT, #PHOTOSHOP, #ILLUSTRATOR",
    },
    {
      company: "(주)이앤지테크",
      period: "2021. 03 ~ 2021. 10",
      position: "퍼블리셔",
      desc: [
        "전자정부프레임워크를 활용하여 공공기관프로젝트에 퍼블리셔로 참여",
      ],
      hashTag: "#HTML, #CSS, #JAVASCRIPT, #PHOTOSHOP",
    },
    {
      company: "지역 인재 프론트엔드 개발자 양성 과정",
      period: "2023. 06 ~ 2023. 09",
      position: "",
      desc: ["프론트엔드 개발에 필요한 지식을 습득할 수 있었던 교육 과정"],
      hashTag: "#HTML, #CSS, #JAVASCRIPT, #REACT",
    },
    {
      company: "(주)아이들",
      period: "2023. 08 ~ 2024.06",
      position: "프론트엔드 개발자",
      desc: [
        "아이들 CMS 프로젝트 참여(백엔드, 프론트엔드)",
        "자사 서비스 견적이지 관리자 사이트 제작 참여(프론트엔드)",
        "전자정부프레임워크를 활용하여 공공기관 프로젝트 참여(프론트엔드)",
      ],
      hashTag: "#REACT, #NEXT.JS, #SPRING BOOT, #RESTFUL API, #JSP",
    },
    {
      company: `[EST] 프론트엔드 개발자 양성과정`,
      period: "2024. 06 ~ 2024. 10",
      position: "",
      desc: ["프론트엔드 개발에 필요한 지식을 습득하고, 프로젝트를 통한 실무 능력 습득"],
      hashTag: "#HTML, #CSS, #JAVASCRIPT, #REACT, #TYEPSCRIPT",
    },
  ];

  return (
    <Section
      id="about"
      className={`${
        isEnter ? "opacity-100 translate-y-0" : "opacity-0 translate-x-[-50px]"
      } transition-all duration-300`}
    >
      <SectionTItle text="About Me" desc={`I'm a Frontend developer`} />
      <div className="mb-[30px] break-keep">
        <p className="phone:inline">
          웹 퍼블리셔로 시작하여 현재는 프론트엔드 개발자로서 역량을 키워 나가고
          있는
        </p>
        <p className="phone:inline ml-[3px]">프론트엔드 개발자 김현수입니다.</p>
      </div>
      <article className="flex justify-between gap-x-[70px] mb-[40px] mobile:flex-col mobile:gap-x-0 mobile:gap-y-[20px] mobile:items-center ">
        <figure className="self-baseline tablet:m-auto phone:m-auto max-w-[300px] p-[20px] bg-white rounded-lg shadow-md">
          <Image src={MyProfile} alt="my-image" />
        </figure>
        <div className="flex-1">
          <div>
            <Career careerList={careerList} />
          </div>
        </div>
      </article>
      <div className="animate-pulse hover:animate-none">
        <Link
          href={`/project`}
          className="flex items-center font-bold text-[1.2rem] text-slate-500 border border-slate-500 rounded-3xl py-[10px] justify-center
            phone:bg-slate-500 phone:text-white phone:text-[1rem]
              hover:bg-slate-500 hover:text-white
              transition-all duration-200
            "
        >
          프로젝트 보러 가기
          <span className="ml-[5px] mt-[1px]">
            <MdOutlineDoubleArrow className="text-[1.3em]" />
          </span>
        </Link>
      </div>
    </Section>
  );
};

export default About;
