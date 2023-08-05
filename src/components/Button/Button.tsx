import { FC } from "react";
import * as S from "./Button.styled";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <S.Button type="submit"{...props}>
      {children}
    </S.Button>
  );
};

export default Button;
