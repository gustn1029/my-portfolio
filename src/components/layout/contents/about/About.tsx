import SectionTItle from "@/components/title/SectionTItle";
import Image from "next/image";
import React from "react";
import MyProfile from "../../../../../public/images/profile.jpg";

const About = () => {
  return (
    <section className="pt-[10%]">
      <article className="flex justify-between">
        <figure className="p-[20px] bg-white rounded-lg shadow-md">
          <Image src={MyProfile} alt="my-image" />
        </figure>
        <div>
          <SectionTItle text="About Me" />
          text
        </div>
      </article>
    </section>
  );
};

export default About;
