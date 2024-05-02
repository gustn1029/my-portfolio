import React from "react";
import Section from "../layout/contents/Section";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/type";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = ({
  title,
  desc,
  skill,
  url,
  imageUrl,
  period,
  isFile,
}: ProjectProps) => {
  const fileDown = async (path: string) => {
    if (isFile) {
      try {
        const res = await fetch(path);
        const blob = await res.blob();

        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = path.split("/").pop() as string;
        a.click();

        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error(`파일 다운로드 중 오류 발생: ${error}`);
      }
    }
  };
  return (
    <Section className={`flex gap-x-[70px] 
    tablet:gap-x-[0] phone:gap-x-[0]
    tablet:flex-col-reverse phone:flex-col-reverse
    tablet:gap-y-[30px] phone:gap-y-[30px]
    `}>
      <article className="flex flex-col justify-between w-1/2 tablet:w-full phone:w-full">
        <div className="grid gap-y-[20px] phone:gap-y-[10px]">
          <div className="grid gap-y-[10px]">
            <h4 className="text-[2rem] tablet:text-[1.6rem] phone:text-[1.3rem] font-semibold tablet:break-keep phone:break-keep phone-sm:!break-all">{title}</h4>
            <p className="text-gray-600 break-keep phone:text-[0.85rem]">{desc}</p>
            <span className="text-purple-500">{period}</span>
          </div>
          <div className="phone:mb-[10px]">
            <strong className="block text-[1.3rem] phone:text-[1rem] pb-[10px] mb-[10px] leading-[1] border-b border-b-gray-700">
              사용 스킬
            </strong>
            <ul>
              {skill.split(",").map((el, idx) => (
                <li key={`${el}_${idx}`} className="phone:text-[0.8rem]">{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link
          href={isFile ? "#" : url}
          target={isFile ? "_self" : "_blank"}
          onClick={() => fileDown(url)}
          className="flex justify-between phone:bg-purple-500 phone:rounded-md py-[5px] phone:px-[10px] phone:text-white"
          download={isFile ? true : false}
        >
          <span>View Project</span>
          <span className="animation-project">
            <FaArrowRightLong className="tablet:rotate-[-90deg] phone:rotate-[-90deg]" />
          </span>
        </Link>
      </article>
      <article className="max-w-[600px] tablet:m-auto phone:m-auto w-full">
        <Link
          href={isFile ? "#" : url}
          target={isFile ? "_self" : "_blank"}
          onClick={() => fileDown(url)}
          download={isFile ? true : false}
        >
          <figure className="p-[10px] phone:p-0 shadow-lg shadow-gray-300">
            <Image src={imageUrl} alt={title} />
          </figure>
        </Link>
      </article>
    </Section>
  );
};

export default Project;
