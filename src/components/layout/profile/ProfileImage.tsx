import React from "react";
import ProfileImg from "../../../../public/images/profile.jpg";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const ProfileImage = () => {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotate: -10,
      opacity: 0,
    },
    onscreen: {
      y: 80,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
      <motion.div
        className="m-auto max-w-[230px] max-h-[300px] h-full rounded-full p-[5px] bg-gradient-to-b from-gray-600 to-gray-900 shadow-lg shadow-slate-700"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <motion.figure
          className={`relative w-full h-full rounded-full overflow-hidden`}
        >
          <Image
            className={`absolute top-0 left-[50%] translate-x-[-50%] z-[2]`}
            src={ProfileImg}
            alt="프로필 사진"
          />
        </motion.figure>
      </motion.div>
  );
};

export default ProfileImage;
