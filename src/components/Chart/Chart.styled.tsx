import styled from "styled-components";
import { theme } from "../../styles";

export const ContainerChart = styled.div`
  width: 71%;
  height: 70%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
  background-color: ${theme.colors.neutral_100};
  border-radius: ${theme.border.radius.s};

  .line {
    border: 1px solid ${theme.colors.neutral_400};
    border-radius: ${theme.border.radius.s};
    padding: 10px;
  }

  @media only screen and (max-width: ${theme.screen.large_desktop}) {
    width: 80%;
    height: 45%;
    margin-top: 50px;
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    width: 85%;
    height: 40%;
    margin-top: 80px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    margin-top: 30px;
    margin-bottom: 50px;
    width: 85%;
    height: 80%;
  }
`;
