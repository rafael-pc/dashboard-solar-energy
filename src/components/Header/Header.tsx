import React from "react";
import { HeaderStyle } from "./Header.styled";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderStyle>
      <h2>{title}</h2>
    </HeaderStyle>
  );
};

export default Header;
