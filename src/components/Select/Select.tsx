import { FC, SelectHTMLAttributes } from "react";
import { InputSelect } from "./Select.styled";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  props?: unknown;
}

const Select: FC<ISelectProps> = ({ ...props }) => {
  return <InputSelect {...props}/>;
};

export default Select;
