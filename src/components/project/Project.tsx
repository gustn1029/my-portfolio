import React from "react";
import Section from "../layout/contents/Section";
import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/type";

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
      <article className="flex flex-col justify-between">
        <div className="grid gap-y-[20px]">
          <div className="grid gap-y-[10px]">
            <h4 className="break-keep text-[2rem] font-semibold">{title}</h4>
            <p className="text-gray-600">{desc}</p>
            <span className="text-purple-500">{period}</span>
          </div>
          <div>
            <strong className="block text-[1.3rem] pb-[10px] mb-[10px] leading-[1] border-b border-b-gray-700">사용 스킬</strong>
            <ul>
              {skill.split(",").map((el, idx) => (
                <li key={`${el}_${idx}`}>{el}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link href={url} target="_blank">
          View Project
        </Link>
      </article>
      <article>
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
