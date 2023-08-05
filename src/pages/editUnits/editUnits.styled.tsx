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
    font-size: ${theme.font.sizes.xxs};
    font-weight: ${theme.font.bold};
    padding: 20px;
    margin-top: 35px;
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100vw;

    h3 {
      width: 90%;
      font-size: ${theme.font.sizes.xxs};
      padding: 15px;
      text-align: center;
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
    width: 95%;
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
    width: 100%;
    padding: 3px;
    padding-left: 0;
    gap: 5px;
    color: ${theme.colors.error};
    font-size: ${theme.font.sizes.xxxxs};
  }

  label {
    font-size: ${theme.font.sizes.xxxs};
    display: inline-block;
    margin-top: 15px;
    vertical-align: middle;
    padding: 6px 6px 6px 0;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    vertical-align: middle;
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 60%;
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 90%;
    margin: 0 auto;

    .button {
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: ${theme.font.sizes.xxxxs};
  }
`;
