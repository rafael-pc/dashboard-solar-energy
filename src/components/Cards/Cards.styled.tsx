import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 85%;
  gap: 30px;
  margin: 0 auto;
  margin-top: 30px;

  .card {
    display: flex;
    flex-basis: 195px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 140px;
    padding: 20px;
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.dark};
    border: 1px solid ${theme.colors.neutral_400};
    background-color: ${theme.colors.neutral_100};
  }

  .card:hover {
    color: ${theme.colors.border_hover};
    border: 1px solid ${theme.colors.border_hover};

    h3 {
      color: ${theme.colors.border_hover};
    }
  }

  .card div {
    width: 100%;
  }

  h3 {
    width: 100%;
    font-size: 1.1rem;
    margin-bottom: 12px;
    padding: 8px;
    color: ${theme.colors.dark_light};
  }

  span {
    font-size: 3.5rem;
    color: ${theme.colors.dark_light};
  }

  @media only screen and (max-width: ${theme.screen.large_desktop}) {
    margin-top: 40px;
    gap: 15px;

    .card {
      flex-basis: 150px;
      height: 130px;
      border-radius: 5px;
      padding: 5px;
    }

    h3 {
      font-size: 1.1rem;
      margin-bottom: 8px;
      padding: 7px 0;
    }

    span {
      font-size: 2.6rem;
    }
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    margin-top: 60px;
    gap: 20px;

    .card {
      flex-basis: 150px;
      height: 150px;
    }

    h3 {
      font-size: 1rem;
      padding: 7px 0;
    }

    span {
      font-size: 2.7rem;
    }
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    margin-top: 20px;
    gap: 10px;

    .card {
      flex-basis: 147px;
      height: 147px;
      padding: 5px;
    }

    h3 {
      font-size: 1rem;
      margin-bottom: 15px;
      padding: 7px 0;
    }

    span {
      font-size: 2.6rem;
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    margin-top: 15px;
    gap: 5px;

    .card {
      flex-basis: 105px;
      height: 105px;
      border-radius: 5px;
      padding: 5px;
    }

    h3 {
      font-size: 0.7rem;
      margin-bottom: 2px;
      padding: 7px 0;
    }

    span {
      font-size: 2.1rem;
    }
  }
`;
