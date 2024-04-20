import Link from 'next/link';
import React from 'react';
import { SiGithub } from "react-icons/si";
import { SiVelog } from "react-icons/si";

const Footer = () => {
  return (
    <div className=''>
      <ul className='flex gap-x-[30px] text-[2rem] justify-center'>
        <li><Link href={`https://github.com/gustn1029`} target='_blank'><SiGithub /></Link></li>
        <li><Link href={'https://velog.io/@gustn1029/posts'} target='_blank'><SiVelog /></Link></li>
      </ul>
      <p className='text-[0.7rem] text-gray-500 pt-[50px] pb-[20px] text-center'>Copyright ⓒ 2024 KimHyeonSoo all rights reserved.</p>
    </div>
  )
}

export default Footer