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

  h3 {
    margin-top: 35px;
    padding: 20px;
    font-size: ${theme.font.sizes.xxs};
    font-weight: ${theme.font.bold};
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100vw;

    h3 {
      width: 90%;
      font-size: ${theme.font.sizes.xxxs};
      text-align: center;
      padding: 15px;
      margin-left: 0;
      margin: 0 auto;
      margin-top: 20px;
    }

    label {
      margin-top: 0;
      padding: 0;
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    h3 {
      margin-top: 10px;
      font-size: ${theme.font.sizes.xxxs};
    }
  }
`;

export const FormContainer = styled.div`
  margin-left: 5%;

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 80%;
    margin-left: 0;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 40%;
  padding: 20px;
  font-family: ${theme.font.family.secondary};

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    width: 100%;
    padding: 3px;
    padding-left: 0;
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xxxxs};
  }

  label {
    display: inline-block;
    font-weight: ${theme.font.bold};
    margin-top: 18px;
    vertical-align: middle;
    padding: 6px 6px 6px 0;
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    margin-left: 0;
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 0;
    margin: 0 auto;

    .unidade {
      width: 100%;
    }

    .button {
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
`;
