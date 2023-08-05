import { FC, useState, useRef } from "react";
import { Container } from "./Menu.styled";
import { Burger, MenuMobile } from "..";
import FocusLock from "react-focus-lock";

const Menu: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuId = "main-menu";

  return (
    <Container>
      <div ref={node} id="menu-mobile">
        <FocusLock disabled={!isOpen}>
          <Burger isOpen={isOpen} setOpen={setOpen} aria-controls={menuId} />
          <MenuMobile isOpen={isOpen} id={menuId} />
        </FocusLock>
      </div>
    </Container>
  );
}

export default Menu;

