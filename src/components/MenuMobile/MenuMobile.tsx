import React from "react";
import { StyledMenu } from "./MenuMobile.styled";
import { Link } from "react-router-dom";

interface MenuMobileProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuMobile: React.FC<MenuMobileProps> = ({ open, setOpen, id, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Link to="/dashboard" className="link" tabIndex={tabIndex}>
        Dashboard
      </Link>
      <Link to="/units" className="link" tabIndex={tabIndex}>
        Unidade consumidora
      </Link>
      <Link to="/register_month" className="link" tabIndex={tabIndex}>
        Cadastro de enérgia gerada
      </Link>
    </StyledMenu>
  );
};

export default MenuMobile;
