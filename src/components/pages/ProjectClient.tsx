"use client";

import React from "react";
import Project from "../project/Project";
import { ProjectProps } from "@/type";
import Hwangso from "../../../public/images/project/hwangso.jpg";
import Gum from "../../../public/images/project/gum.jpg";
import Quotationeasy from "../../../public/images/project/quotationeasy.png";
import Gwhealth from "../../../public/images/project/gwhealth.png";
import Alllida from "../../../public/images/project/alllida.png";
import CmsImage from "../../../public/images/project/cmsImage.png";
import SectionTItle from "../title/SectionTItle";

const ProjectClient = () => {
  const projectList: ProjectProps[] = [
    {
      title: "황소닭갈비",
      desc: "퍼스트몰을 활용하여 디자인에 맞게 쇼핑몰을 제작하였습니다.",
      imageUrl: Hwangso,
      url: "https://hwangsodakgalbi.com",
      skill: "HTML,CSS & SCSS,JAVASCRIPT",
      period: "",
      isFile: false
    },
    {
      title: "횡성굼벵이마을",
      desc: "퍼스트몰을 활용하여 디자인에 맞게 쇼핑몰을 제작하였습니다.",
      imageUrl: Gum,
      url: "https://kgumbeng.kr",
      skill: "HTML,CSS & SCSS,JAVASCRIPT",
      period: "",
      isFile: false
    },
    {
      title: "강원특별자치도 통합건강증진사업지원단",
      desc: "전자정부프레임워크를 적용하여 웹 사이트를 제작하였습니다.",
      imageUrl: Gwhealth,
      url: "https://gwhealth.kr",
      skill: "HTML,CSS,JAVASCRIPT,JSP",
      period: "2023.11.16 ~ 2023.12.13",
      isFile: false
    },
    {
      title: "견적이지 관리자",
      desc: "자사 서비스 견적이지의 관리자 사이트 제작 프로젝트에서 프론트엔드 작업을 진행했습니다.",
      imageUrl: Quotationeasy,

      url: "./pdf/quotationeasy.pdf",
      skill: "NEXT.JS,TAILWIND CSS,RESTFUL API,REACT-CHARTJS-2",
      period: "2023.10.26 ~ 2024.01.09",
      isFile: true
    },
    {
      title: "모두알리다 홈페이지",
      desc: "자사 서비스 모두알리다의 웹 사이트 제작 프로젝트에서 다른 개발자 1명과 공동으로 프론트엔드 작업에 참여했습니다.",
      imageUrl: Alllida,
      url: "https://alllida.com/",
      skill: "NEXT.JS,TAILWIND CSS, FRAMER-MOTION",
      period: "2023.11.22 ~ 2024.01.12",
      isFile: false
    },
    {
      title: "IDL CMS",
      desc: "자사 CMS 제작 프로젝트에서 프론트엔드, 백엔드 작업을 진행했습니다.",
      imageUrl: CmsImage,
      url: "./pdf/idl_cms.pdf",
      skill: "SPRING BOOT,NEXT.JS,TAILWIND CSS,RESTFUL API,REACT-CHARTJS-2",
      period: "2024.01.22 ~ 2024.03.20",
      isFile: true
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
            isFile={el.isFile}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectClient;
