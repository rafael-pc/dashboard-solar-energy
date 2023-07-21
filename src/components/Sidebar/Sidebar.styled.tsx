import styled from "styled-components";
import { theme } from "../../styles/theme";

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

  @media only screen and (max-width: 641px) {
    nav {
      //display: inline;
      width: 100vw;
      height: 50px;
    }

    /* #menu {
      display: none;
    } */

    .logo-mobile {
      width: 35px;
      height: 35px;
      border-radius: 2px;
      margin-top: 7px;
      margin-left: 45%;
    }
  }

  @media only screen and (min-width: 642px) {
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

    /* #menu-icon {
      display: none;
    } */
  }
  @media only screen and (min-width: 1008px) {
    width: 20vw;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 30px;
  margin-bottom: 80px;
  border-radius: 5px;
  background-color: ${theme.colors.neutral_100};

  @media only screen and (max-width: 641px) {
    width: 100px;
    height: 100px;
    margin-left: 15px;
  }

  @media only screen and (max-height: 420px) {
    width: 80px;
    height: 80px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

export const Menu = styled.ul`
  @media only screen and (max-width: 641px) {
    display: none;
  }

  @media only screen and (min-width: 642px) {
    #menu-icon {
      display: none;
    }
  }
`;

export const Page = styled.li`
  .link {
    height: 40px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 25px;
    margin-bottom: 40px;
    text-align: left;
    color: ${theme.colors.neutral_100};
  }

  .chart-pie {
    margin-left: 20px;
    font-size: 20px;
  }

  .chart-bar {
    margin-left: 20px;
    font-size: 20px;
  }

  .cog {
    margin-left: 20px;
    font-size: 20px;
  }

  h3 {
    width: 150px;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1.2em;
  }

  @media only screen and (max-width: 1200px) {
    gap: 15px;
  }

  @media only screen and (max-height: 420px) {
    font-size: 0.8em;
    margin-bottom: 10px;
    gap: 10px;

    .chart-pie {
      margin-left: 6px;
      font-size: 15px;
    }
    .chart-bar {
      margin-left: 6px;
      font-size: 15px;
    }
    .cog {
      margin-left: 6px;
      font-size: 15px;
    }
  }
`;
