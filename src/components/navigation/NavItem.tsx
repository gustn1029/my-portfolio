import React from 'react';
import { motion } from "framer-motion"
import Link from 'next/link';

interface ItemProps {
  selected: boolean;
  text: string;
  url: string;
  onClick: ()=> void;
}

const NavItem = ({selected, text, url, onClick}:ItemProps) => {
  return (
    <motion.li
      className={`relative`}
      onClick={onClick}
      animate={{opacity: selected ? 1 : 0.5}}
    >
      <Link className='block' href={url}>
        {text}
        {selected && (
          <motion.div 
            className={`absolute bg-white w-full top-full left-0 h-[2px] rounded-sm`}
            layoutId='underline'
          />
        )}
      </Link>
    </motion.li>
  )
}

export default NavItem