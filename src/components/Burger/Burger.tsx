import React from "react";
import * as S from "./Burger.styled";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ open, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <S.Burger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <span />
      <span />
      <span />
    </S.Burger>
  );
};

export default Burger;
