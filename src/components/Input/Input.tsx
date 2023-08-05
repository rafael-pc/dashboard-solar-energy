import { FC, InputHTMLAttributes } from "react";
import { InputStyle, Label } from "./Input.styled";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
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
