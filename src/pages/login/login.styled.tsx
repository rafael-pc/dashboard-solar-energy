import styled from "styled-components";
import LogoImage from "../../assets/logo.png";
import LoginImage from "../../assets/image.png";
import { theme } from "../../styles";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  .image-content {
    width: 50%;
    height: 100vh;
    background: ${theme.colors.neutral_100};
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    .image-content {
      display: none;
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    .image-content {
      display: none;
    }
  }
`;

export const Logo = styled.div`
  width: 300px;
  height: 300px;
  background: url(${LogoImage});
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 250px;
    height: 250px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
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
  background-color: ${theme.colors.neutral_100};

  h2 {
    font-style: normal;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxs};
    width: 257.48px;
    height: 48.75px;
    line-height: 32px;
    text-align: center;
    color: ${theme.colors.dark_light};
  }
  .skeleton-logo{
    margin-top: 70px;
  }

  .skeleton-title{
    margin-top: 20px;
  }

  .skeleton-button{
    margin-top: 20px;
  }

  .login-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 100vh;
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    width: 100%;
    height: 100vh;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2 {
      display: none;
    }
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
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
  font-family: ${theme.font.family.secondary};

  .button {
    width: 100%;
  }

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

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100%;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    width: 60%;
    margin-top: 0;
  }
`;
