import { InputProps } from "@/type";
import React from "react";

const InputFiled = ({ label, children, labelClassName, isLabelTextHidden }: InputProps) => {
  return (
    <div>
      <label htmlFor={label} className={`${labelClassName}`}>
        <span className={isLabelTextHidden ? "hidden" : "block mb-[5px] text-[0.95rem] text-gray-600"}>{label}</span>
        <div>{children}</div>
      </label>
    </div>
  );
};

export default InputFiled;
