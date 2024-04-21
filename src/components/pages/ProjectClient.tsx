"use client";

import React from "react";
import Project from "../project/Project";
import { ProjectProps } from "@/type";
import Hwangso from "../../../public/images/project/hwangso.jpg";
import Gum from "../../../public/images/project/gum.jpg";
import Gwhealth from "../../../public/images/project/gwhealth.png";
import QutationEasy from "../../../public/images/project/quotationeasy.png";
import SectionTItle from "../title/SectionTItle";

const ProjectClient = () => {
  const projectList: ProjectProps[] = [
    {
      title: "황소닭갈비",
      desc: "퍼스트몰을 활용하여 디자인에 맞게 쇼핑몰을 제작하였습니다.",
      imageUrl: Hwangso,
      url: "https://hwangsodakgalbi.com/",
      skill: "HTML,CSS & SCSS,JAVASCRIPT",
      period: "",
    },
    {
      title: "횡성굼벵이마을",
      desc: "퍼스트몰을 활용하여 디자인에 맞게 쇼핑몰을 제작하였습니다.",
      imageUrl: Gum,
      url: "https://kgumbeng.kr/",
      skill: "HTML,CSS & SCSS,JAVASCRIPT",
      period: "",
    },
    {
      title: "강원특별자치도 통합건강증진사업지원단",
      desc: "전자정부프레임워크를 적용하여 웹 사이트를 제작하였습니다.",
      imageUrl: Gwhealth,
      url: "https://hwangsodakgalbi.com/",
      skill: "HTML,CSS,JAVASCRIPT,JSP",
      period: "2023.11.16 ~ 2023.12.13",
    },
    {
      title: "견적이지 관리자",
      desc: "자사 서비스 견적이지의 관리자 사이트 제작 프로젝트에서 프론트엔드 작업을 진행했습니다.",
      imageUrl: QutationEasy,
      url: "/project",
      skill: "NEXT.JS,TAILWIND CSS,RESTFUL API,REACT-CHARTJS-2",
      period: "2023.10.02 ~ 2023.12.29",
    },
  ];

  return (
    <div className="mt-[50px]">
      <SectionTItle text="Projects" desc="직접 작업한 프로젝트를 소개합니다." />
      <div className="grid gap-y-[50px]">
        {projectList.map((el, idx) => (
          <Project
            key={`${el.title}_${idx}`}
            title={el.title}
            desc={el.desc}
            imageUrl={el.imageUrl}
            url={el.url}
            skill={el.skill}
            period={el.period}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectClient;
