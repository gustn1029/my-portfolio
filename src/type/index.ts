import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";
import { FieldError, FieldErrors, UseFormRegisterReturn } from "react-hook-form";

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
  isFile:boolean;
}

export interface InputProps {
  type?: "text" | "number" | "password" | "email";
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn<string>;
  children?: ReactNode;
  error?: FieldErrors<any>;
  isLabelTextHidden?: boolean;
  description?: string;
  errorView?: FieldError;
  disabled?: boolean;
  isRequired?: boolean;
  inputClassName?: string;
  labelClassName?: string;
}

export interface Contact {
  title: string;
  email: string;
  content: string;
}
