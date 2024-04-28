import React from "react";
import LabelLayout from "./LabelLayout";
import { InputProps } from "@/type";
import { ErrorMessage } from "@hookform/error-message";
import ErrorTooltip from "../errorTooltip/ErrorTooltip";

const FormInput = (props: InputProps) => {
  return (
    <div className="w-full relative">
      <LabelLayout {...props}>
        <input
          type={props.type}
          {...props.register}
          placeholder={props.placeholder}
          id={props.label}
          className={`${props.inputClassName} w-full h-[40px] border px-[10px] py-[5px] rounded-lg text-[0.8rem] focus:outline-none`}
        />
      </LabelLayout>
      {props.errorView && (
        <ErrorMessage 
            errors={props.error}
            name={props.register.name}
            render={({message}) => <ErrorTooltip message={message} />}
        />
      )}
    </div>
  );
};

export default FormInput;
