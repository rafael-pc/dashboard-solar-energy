import { FC } from "react";
import { StyledMenu } from "./MenuMobile.styled";
import { Link } from "react-router-dom";

interface IMenuMobileProps {
  isOpen: boolean;
  id: string;
}

const MenuMobile: FC<IMenuMobileProps> = ({ isOpen, id, ...props }) => {
  const isHidden = isOpen ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={isOpen} id={id} aria-hidden={!isHidden} {...props}>
      <Link to="/dashboard" tabIndex={tabIndex}>
        Dashboard
      </Link>
      <Link to="/units" tabIndex={tabIndex}>
        Unidade consumidora
      </Link>
      <Link to="/register_month" tabIndex={tabIndex}>
        Cadastro de enérgia gerada
      </Link>
    </StyledMenu>
  );
};

export default MenuMobile;
