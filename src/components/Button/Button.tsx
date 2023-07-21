import React from "react";
import * as S from "./Button.styled";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: string | number;
  children: React.ReactNode;
}


const Button: React.FC<ButtonProps> = ({ width, children, ...props }) => {
  return <S.Button style={{ width: width }} {...props}>{children}</S.Button>;
};

export default Button;
