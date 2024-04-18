import { ReactNode } from "react";

export interface ChildrenProps {
    children: ReactNode;
}

export interface NavigationOption {
    text: string;
    url: string;
}