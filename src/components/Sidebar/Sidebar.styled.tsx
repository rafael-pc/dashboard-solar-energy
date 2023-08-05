import styled from "styled-components";
import { theme } from "../../styles";

export const Container = styled.aside`
  a {
    text-decoration: none;
    transition: 200ms;
  }

  ul {
    padding: 0;
    list-style-type: none;
  }
`;

export const Content = styled.div`
  background-color: ${theme.colors.bg_primary};

  @media only screen and (max-width: ${theme.screen.mobile}) {
    nav {
      width: 100vw;
      height: 50px;
    }

    .logo-mobile {
      width: 35px;
      height: 35px;
      border-radius: ${theme.border.radius.xs};
      margin-top: 7px;
      margin-left: 15px;
    }
  }

  @media only screen and (min-width: ${theme.screen.mobile}) {
    display: flex;
    width: 30vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    text-align: center;

    .logo-mobile {
      display: none;
    }
  }
  @media only screen and (min-width: ${theme.screen.desktop}) {
    width: 20vw;
  }
`;

export const Menu = styled.ul`
  @media only screen and (max-width: ${theme.screen.mobile}) {
    display: none;
  }

  @media only screen and (min-width: ${theme.screen.mobile}) {
    #menu-icon {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 30px;
  margin-bottom: 80px;
  border-radius: ${theme.border.radius.m};
  background-color: ${theme.colors.neutral_100};

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100px;
    height: 100px;
    margin-left: 15px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

export const Page = styled.li`
  .link {
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    text-align: left;
    color: ${theme.colors.neutral_100};
  }

  .chart-pie {
    margin-left: 20px;
  }

  .chart-bar {
    margin-left: 20px;
  }

  .cog {
    margin-left: 20px;
  }

  h3 {
    width: 150px;
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxs};
    line-height: 1.2em;
  }

  @media only screen and (max-width: ${theme.screen.large_desktop}) {
    gap: 15px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    gap: 10px;

    h3 {
      font-size: ${theme.font.sizes.xxxxs};
    }

    .link {
      margin-bottom: 10px;
    }

    .chart-pie {
      margin-left: 6px;
    }
    .chart-bar {
      margin-left: 6px;
    }
    .cog {
      margin-left: 6px;
    }
  }
`;
