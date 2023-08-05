import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: ${theme.screen.mobile}) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  overflow-y: auto;

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100vw;
  }
`;