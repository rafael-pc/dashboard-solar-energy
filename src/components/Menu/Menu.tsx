import React, { useState, useRef } from "react";
import { Container } from "./Menu.styled";
import { Burger, MenuMobile } from "..";
import FocusLock from "react-focus-lock";

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuId = "main-menu";

  return (
    <Container>
      <div ref={node} id="menu-mobile">
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <MenuMobile open={open} setOpen={setOpen} id={menuId} />
        </FocusLock>
      </div>
    </Container>
  );
}

export default Menu;

