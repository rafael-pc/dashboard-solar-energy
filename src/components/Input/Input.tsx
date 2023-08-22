import { FC, InputHTMLAttributes } from "react";
import * as S from "./Input.styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<IInputProps> = ({label, ...props }) => {
  return (
    <>
      <S.Label>{label}</S.Label>
      <S.InputStyle        
        {...props}
      />
    </>
  );
};

export default Input;
