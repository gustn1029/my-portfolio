import SectionTItle from "@/components/title/SectionTItle";
import Image from "next/image";
import React from "react";
import MyProfile from "../../../../../public/images/profile.jpg";
import Career, { CareerOption } from "./Career";

const About = () => {

  const careerList: CareerOption[] = [
    {company:"웹디자인(웹퍼블리셔) 프론트앤드 실무자 양성 과정", period: "2020. 06 ~ 2020. 10", position: "", desc:"퍼블리싱 업무에 필요한 기본적인 디자인 편집 능력, \n 퍼블리싱 능력을 키울 수 있었던 국비교육과정"},
    {company:"망고트리", period: "2020. 11 ~ 2021. 02", position: "", desc:""},
    {company:"(주)이앤지테크", period: "2021. 03 ~ 2021. 10", position: "", desc:""},
    {company:"지역 인재 프론트엔드 개발자 양성 과정", period: "2023. 06 ~ 2023. 09", position: "", desc:""},
    {company:"(주)아이들", period: "2023. 08 ~ 재직중", position: "", desc:""},
  ];

  return (
    <section className="pt-[10%]">
      <article className="flex justify-between gap-x-10">
        <figure className="max-w-[300px] p-[20px] bg-white rounded-lg shadow-md">
          <Image src={MyProfile} alt="my-image" />
        </figure>
        <div className="flex-1">
          <SectionTItle text="About Me" desc={`I'm a Frontend developer`} />
          <div>
            <p>웹 퍼블리셔로 시작하여 현재는 프론트엔드 개발자로서 역량을 키워 나가고 있는</p>
            <p>프론트엔드 개발자 김현수입니다.</p>
          </div>
          <Career careerList={careerList} />
        </div>
      </article>
    </section>
  );
};

export default About;
