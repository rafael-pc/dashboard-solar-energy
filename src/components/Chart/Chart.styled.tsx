import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerChart = styled.div`
  margin: 0 auto;
  margin-bottom: 50px;
  width: 71%;
  height: 70%;
  background-color: ${theme.colors.neutral_100};
  border-radius: 8px;
  margin-top: 20px;

  .line {
    border: 1px solid ${theme.colors.neutral_400};
    border-radius: 8px;
    padding: 10px;
  }

  @media only screen and (max-width: 1200px) {
    width: 80%;
    height: 50%;
    margin-top: 50px;
  }

  @media only screen and (max-width: 992px) {
    width: 85%;
    height: 40%;
    margin-top: 40px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 576px) {
    /* width: 85%;
    height: 40%; */
    margin-top: 25px;
    margin-bottom: 30px;
  }

  @media only screen and (max-height: 576px) {
    margin-top: 30px;
    margin-bottom: 50px;
    width: 85%;
    height: 80%;
  }

  /* @media only screen and (max-height: 992px) {
    margin-top: 30px;
    margin-bottom: 30px;
    width: 80%;
    height: 60%;
  } */
`;
