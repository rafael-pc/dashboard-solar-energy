import styled from "styled-components";
import { theme } from "../../styles/theme";

export const HeaderStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.neutral_100};
  border-bottom: 3px solid ${theme.colors.bg_primary};

  h2 {
    font-size: 1.6rem;
    font-weight: ${theme.font.bolder};
    margin-left: 5%;
  }

  /* @media only screen and (max-width: 1200px) {
    padding: 15px;
    
    h2 {
      font-size: 1.3rem;
    }
  } */

  @media only screen and (max-width: 900px) {
    justify-content: center;
    padding-left: 0;
    padding: 12px;
    font-size: 0.7rem;
    text-align: center;
    line-height: 2.2rem;

    h2 {
      font-size: 1.3rem;
      margin-left: 0;
    }
  }

  @media only screen and (max-width: 641px) {
    justify-content: center;
    text-align: center;
    line-height: 2.2rem;
    padding: 5px;

    h2 {
      font-size: 1.2rem;
      margin-left: 0;
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: 0.7rem;
    padding: 5px;

    h2 {
      font-size: 1.2rem;
      margin-left: 0;
    }
  }
`;
