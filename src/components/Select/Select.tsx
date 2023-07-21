import React, { SelectHTMLAttributes } from "react";
import { Input, ErrorMessage } from "./Select.styled";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  errorMessage?: string;
  label?: string;
  width?: string | number;
}

const Select: React.FC<SelectProps> = ({ errorMessage, label, width, ...props }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <Input
        errorMessage={errorMessage}
        style={{ width: width }}
        {...props}
      ></Input>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default Select;
