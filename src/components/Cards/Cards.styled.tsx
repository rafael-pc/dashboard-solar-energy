import styled from "styled-components";
import { theme } from "../../styles";

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

  h3 {
    width: 100%;
    margin-bottom: 12px;
    padding: 8px;
    font-size: ${theme.font.sizes.xxxs};
    color: ${theme.colors.dark_light};
  }

  span {
    font-size: ${theme.font.sizes.l};
    color: ${theme.colors.dark_light};
  }

  @media only screen and (max-width: ${theme.screen.large_desktop}) {
    margin-top: 40px;
    gap: 15px;
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    margin-top: 60px;
    gap: 20px;
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    margin-top: 20px;
    gap: 10px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    margin-top: 15px;
    gap: 5px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-basis: 195px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 140px;
  padding: 10px;
  border-radius: ${theme.border.radius.m};
  font-weight: ${theme.font.bold};
  color: ${theme.colors.dark};
  border: 1px solid ${theme.colors.neutral_400};
  background-color: ${theme.colors.neutral_100};

  div {
    width: 100%;
  }

  &:hover {
    color: ${theme.colors.bg_primary};
    border: 1px solid ${theme.colors.bg_primary};

    h3 {
      color: ${theme.colors.bg_primary};
    }

    span {
      color: ${theme.colors.bg_primary};
    }
  }

  @media only screen and (max-width: ${theme.screen.large_desktop}) {
    flex-basis: 150px;
    height: 130px;
    padding: 5px;

    h3 {
      font-size: ${theme.font.sizes.xxxs};
      margin-bottom: 8px;
      padding: 7px 0;
    }

    span {
      font-size: ${theme.font.sizes.m};
    }
  }

  @media only screen and (max-width: ${theme.screen.desktop}) {
    flex-basis: 150px;
    height: 150px;

    h3 {
      font-size: ${theme.font.sizes.xxxs};
      padding: 7px 0;
    }

    span {
      font-size: ${theme.font.sizes.m};
    }
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    flex-basis: 147px;
    height: 147px;
    padding: 5px;

    h3 {
      font-size: ${theme.font.sizes.xxxs};
      margin-bottom: 15px;
      padding: 7px 0;
    }

    span {
      font-size: ${theme.font.sizes.m};
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    flex-basis: 105px;
    height: 105px;
    padding: 5px;

    h3 {
      font-size: ${theme.font.sizes.xxxxxs};
      margin-bottom: 2px;
      padding: 7px 0;
    }

    span {
      font-size: ${theme.font.sizes.s};
    }
  }
`;
