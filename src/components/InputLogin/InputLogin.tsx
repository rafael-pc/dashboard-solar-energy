import React, { InputHTMLAttributes, ReactNode } from "react";
import { Input, Content } from "./InputLogin.styled";

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

const InputLogin: React.FC<InputLoginProps> = ({ icon, ...props }) => {
  return (
    <Content {...props}>
      {icon}
      <Input {...props} />
    </Content>
  );
};

export default InputLogin;
