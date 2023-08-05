import { FC } from "react";
import * as S from "./Burger.styled";

interface IBurgerProps {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const Burger: FC<IBurgerProps> = ({ isOpen, setOpen, ...props }) => {
  const isExpanded = isOpen ? true : false;

  return (
    <S.Burger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={isOpen}
      onClick={() => setOpen(!isOpen)}
      {...props}
    >
      <span />
      <span />
      <span />
    </S.Burger>
  );
};

export default Burger;
