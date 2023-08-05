import { FC, InputHTMLAttributes } from "react";
import { InputStyle, Label } from "./Input.styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
  width?: string | number;
}

const Input: FC<IInputProps> = ({label, ...props }) => {
  return (
    <>
      <Label>{label}</Label>
      <InputStyle        
        {...props}
      />
    </>
  );
};

export default Input;
