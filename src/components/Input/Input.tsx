import React, { InputHTMLAttributes } from "react";
import { InputStyle, ErrorMessage, Label } from "./Input.styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
  width?: string | number;
}

const Input: React.FC<InputProps> = ({ errorMessage, label, width, ...props }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputStyle
        errorMessage={errorMessage}
        style={{ width: width }}
        {...props}
      ></InputStyle>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default Input;
