import React from "react";
import LabelLayout from "./LabelLayout";
import { InputProps } from "@/type";
import { ErrorMessage } from "@hookform/error-message";
import ErrorTooltip from "../errorTooltip/ErrorTooltip";

const FormTextarea = (props: InputProps) => {
  return (
    <div className="w-full relative">
      <LabelLayout {...props}>
        <textarea
          {...props.register}
          placeholder={props.placeholder}
          id={props.label}
          className={`${props.inputClassName} resize-none w-full h-[100px] border px-[10px] py-[5px] rounded-lg text-[0.8rem] focus:outline-none`}
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

export default FormTextarea;
