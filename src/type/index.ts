import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface NavigationOption {
    text: string;
    url: string;
}

export interface ProjectProps {
    title: string;
    desc: string;
    skill: string;
    url: string;
    imageUrl: StaticImport | string;
    period: string;
  }