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
    font-size: 1.3em;
    font-weight: bold;
    padding: 20px;
    margin-top: 35px;
  }

  @media only screen and (max-width: 641px) {
    width: 100vw;

    h3 {
      width: 90%;
      font-size: 1.1rem;
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
    display: inline-block;
    margin-top: 15px;
    vertical-align: middle;
    padding: 6px 6px 6px 0;
    //color: #3a3a3a;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-right: 8px;
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
    font-size: 0.9rem;
  }
`;
