import styled from "styled-components";
import { theme } from "../../styles";

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.neutral_100};
  border-bottom: 3px solid ${theme.colors.bg_primary};

  h2 {
    font-size: ${theme.font.sizes.xs};
    margin-left: 5%;
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    justify-content: center;
    padding-left: 0;
    padding: 12px;
    text-align: center;
    line-height: 2.2rem;

    h2 {
      font-size: ${theme.font.sizes.xxs};
      margin-left: 0;
    }
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    justify-content: center;
    text-align: center;
    line-height: 2.2rem;
    padding: 5px;

    h2 {
      font-size: ${theme.font.sizes.xxxs};
      margin-left: 0;
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    justify-content: center;
    padding: 5px;

    h2 {
      font-size: ${theme.font.sizes.xxxs};
      margin-left: 0;
    }
  }
`;
