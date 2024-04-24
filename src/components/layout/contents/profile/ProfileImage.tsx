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
    <div className="flex w-full justify-between items-center overflow-hidden mobile:flex-col">
      <Section>
        <div className="font-bold text-[2.5rem]">
          <p className="text-[1.5em]">Hello,</p>
          <p>
            My name is{" "}
            <span className="text-purple-500 drop-shadow-sm animate-pulse">
              Kim Hyeon Soo
            </span>
          </p>
          <p>{`I'm a Frontend developer`}</p>
        </div>
      </Section>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.figure
          variants={cardVariants}
          className={`max-w-[400px] w-full pr-[50px] pb-[50px] ${style.imageBackground} mobile:max-w-[250px]`}
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
