import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 600px) {
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
    font-size: 1.3em;
    font-weight: bold;
  }

  @media only screen and (max-width: 641px) {
    width: 100vw;

    h3 {
      width: 90%;
      margin-left: 0;
      text-align: center;
      font-size: 1.1rem;
      padding: 15px;
      padding-left: 20px;
      margin: 0 auto;
      margin-top: 20px;
    }

    label {
      padding: 0;
    }
  }

  @media only screen and (max-height: 420px) {
    h3 {
      margin-top: 10px;
      font-size: 1.1rem;
    }
  }
`;

export const FormContainer = styled.div`
  margin-left: 5%;

  @media only screen and (max-width: 641px) {
    width: 95%;
    margin-left: 0;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 40%;
  padding: 20px;

  label {
    font-family: ${theme.font.input};
    font-size: 1rem;
    //font-weight: bold;
    margin-top: 15px;
    display: inline-block;
    vertical-align: middle;
    padding: 6px 6px 6px 0;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-right: 10px;
    vertical-align: middle;
  }

  @media only screen and (max-width: 1008px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    width: 60%;
  }

  @media only screen and (max-width: 641px) {
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

  @media only screen and (max-height: 420px) {
    font-size: 0.9em;
  }
`;
