import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.div`
  @media only screen and (min-width: ${theme.screen.mobile}) {
    #menu-mobile {
      display: none;
    }
  }
`;
