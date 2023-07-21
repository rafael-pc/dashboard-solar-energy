import styled from "styled-components";
import LogoImage from "../../assets/logo.png";
import LoginImage from "../../assets/image.png";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .image-content {
    width: 50%;
    height: 100vh;
    background: #fff;
  }

  @media only screen and (max-width: 1008px) {
    .image-content {
      display: none;
    }
  }

  @media only screen and (max-height: 601px) {
    .image-content {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 30px;
  background: url(${LogoImage});
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 641px) {
    width: 250px;
    height: 250px;
  }

  @media only screen and (max-height: 601px) {
    margin-top: 0;
    width: 150px;
    height: 150px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${LoginImage}) no-repeat;
`;

export const Content = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    //font-size: 1rem;
    width: 257.48px;
    height: 48.75px;
    line-height: 32px;
    text-align: center;
    color: #374557;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: 100vh;
  }

  @media only screen and (max-width: 1008px) {
    width: 100%;
    height: 100vh;
  }

  @media only screen and (max-height: 641px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2{
      display: none;
    }
  }

  @media only screen and (max-width: 460px) {
    .login {
      width: 90%;
    }
    .login-content {
      width: 80%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin-top: 20px;

  @media only screen and (max-width: 641px) {
    width: 100%;
  }

  @media only screen and (max-height: 641px) {
    width: 60%;
    margin-top: 0;
  }
`;
