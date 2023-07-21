import React, { InputHTMLAttributes, ReactNode } from "react";
import { Input, ErrorMessage, ContainerInput } from "./InputLogin.styled";

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  errorMessage?: string;
  label?: string;
  width?: string | number;
}

const InputLogin: React.FC<InputLoginProps> = ({
  icon,
  errorMessage,
  width,
  ...props
}) => {
  return (
    <>
      <ContainerInput errorMessage={errorMessage} style={{ width: width }}>
        {icon}
        <Input {...props}></Input>
      </ContainerInput>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};

export default InputLogin;
