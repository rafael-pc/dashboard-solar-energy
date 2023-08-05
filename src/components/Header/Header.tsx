import { FC } from "react";
import { HeaderStyle } from "./Header.styled";

interface IHeaderProps {
  title: string;
}

const Header: FC<IHeaderProps> = ({ title }) => {
  return (
    <HeaderStyle>
      <h2>{title}</h2>
    </HeaderStyle>
  );
};

export default Header;
