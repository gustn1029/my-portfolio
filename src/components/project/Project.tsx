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
}: ProjectProps) => {
  return (
    <Section className={`flex gap-x-[70px]`}>
      <article className="flex flex-col justify-between w-1/2">
        <div className="grid gap-y-[20px]">
          <div className="grid gap-y-[10px]">
            <h4 className="break-keep text-[2rem] font-semibold">{title}</h4>
            <p className="text-gray-600 break-keep">{desc}</p>
            <span className="text-purple-500">{period}</span>
          </div>
          <div>
            <strong className="block text-[1.3rem] pb-[10px] mb-[10px] leading-[1] border-b border-b-gray-700">
              사용 스킬
            </strong>
            <ul>
              {skill.split(",").map((el, idx) => (
                <li key={`${el}_${idx}`}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={url} target="_blank" className="flex justify-between">
          <span>View Project</span>
          <span className="animation-project"><FaArrowRightLong /></span>
        </Link>
      </article>
      <article className="max-w-[600px] w-full">
        <Link href={url} target="_blank">
          <figure className="p-[10px] shadow-lg shadow-gray-300">
            <Image src={imageUrl} alt={title} />
          </figure>
        </Link>
      </article>
    </Section>
  );
};

export default Project;
