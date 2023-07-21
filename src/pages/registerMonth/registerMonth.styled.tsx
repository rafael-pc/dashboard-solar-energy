import styled from "styled-components";

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
      font-size: 1.1rem;
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
    width: 80%;
    margin-left: 0;
    margin: 0 auto;
  }
`;

export const Form = styled.form`
  width: 40%;
  padding: 20px;

  label {
    display: inline-block;
    font-weight: bold;
    margin-top: 18px;
    vertical-align: middle;
    padding: 6px 6px 6px 0;
    color: #3a3a3a;
  }

  @media only screen and (max-width: 1008px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    margin-left: 0;
  }

  @media only screen and (max-width: 641px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-left: 0;
    margin: 0 auto;

    .select {
      width: 100%;
    }

    .button {
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 50px;
    }
  }
`;
