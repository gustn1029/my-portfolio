import Image from "next/image";
import React from "react";
import MyProfile from "../../../../../public/images/visual.jpg";
import style from "@/components/layout/contents/profile/Profile.module.css";
import { motion, Variants } from "framer-motion";
import Section from "../Section";

const ProfileImage = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotate: -10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      opacity: 100,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="relative mobile:h-screen mobile:pb-[40px] flex w-full gap-x-5 justify-between items-center overflow-hidden mobile:flex-col mobile:items-end">
      <Section className="mobile:bg-transparent mobile:shadow-none">
        <div className="font-bold text-[2.5rem] tablet:text-[2rem] phone:text-[2rem] mobile:absolute left-0 top-[50px] z-10">
          <p className="text-[1.5em]">Hello,</p>
          <p className="phone:flex phone:flex-col">
            My name is{" "}
            <span className="text-purple-500 drop-shadow-sm animate-pulse">
              Kim Hyeon Soo
            </span>
          </p>
          <p>{`I'm a Frontend developer`}</p>
        </div>
      </Section>
      <motion.div
        className="mobile:opacity-50"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.figure
          variants={cardVariants}
          className={`max-w-[400px] tablet:max-w-[300px] phone:max-w-[280px] w-full pr-[50px] pb-[50px] phone:pr-[40px] phone:pb-[30px] ${style.imageBackground}`}
        >
          <Image
            className="relative z-[1] shadow-lg shadow-gray-500"
            src={MyProfile}
            alt="my-image"
          />
        </motion.figure>
      </motion.div>
    </div>
  );
};

export default ProfileImage;
