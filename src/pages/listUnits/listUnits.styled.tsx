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
  display: block;
  overflow-y: auto;
  white-space: nowrap;

  h3 {
    margin: 0 auto;
    font-size: ${theme.font.sizes.xxs};
    font-weight: ${theme.font.bold};
    margin-top: 40px;
    margin-bottom: 50px;
    text-align: center;
    padding: 20px;
    color: ${theme.colors.dark};
  }

  .link {
    display: block;
    margin-left: 0;
    margin: 0 auto;
    margin-bottom: 80px;

    button {
      margin: 0 auto;
      margin-top: 100px;
    }

    @media only screen and (max-width: ${theme.screen.mobile}) {
      margin-bottom: 80px;
    }
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100vw;

    h3 {
      font-size: ${theme.font.sizes.xxxs};
      margin-left: 0;
      text-align: center;
    }
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    h3 {
      font-size: ${theme.font.sizes.xxxs};
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;

export const Table = styled.table`
  width: 70%;
  margin: 0 auto;
  font-size: ${theme.font.sizes.xxxs};
  font-family: ${theme.font.family.secondary};
  background-color: ${theme.colors.neutral_100};
  border: 1px solid ${theme.colors.neutral_400};

  tr:nth-child(odd) {
    background-color: ${theme.colors.neutral_300};
  }

  th {
    font-weight: ${theme.font.normal};
    padding: 6px;
    background-color: ${theme.colors.bg_primary};
    color: ${theme.colors.neutral_100};
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 90%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: 80px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    width: 90%;

    th {
      font-size: ${theme.font.sizes.xxxxs};
      padding: 4px;
    }
  }
`;

export const Row = styled.tr`
  td {
    word-wrap: break-word;
    overflow-wrap: break-word;
    vertical-align: middle;
    text-align: center;
    padding: 4px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    td {
      font-size: ${theme.font.sizes.xxxxs};
      padding: 3px;
    }
  }
`;

export const Edit = styled.button`
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: ${theme.border.radius.xs};
  color: ${theme.colors.neutral_100};
  font-weight: ${theme.font.bold};
  background-color: ${theme.colors.bt_edit};

  &:hover {
    background-color: ${theme.colors.bt_edit_hover};
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: ${theme.font.sizes.xxxxs};
  }
`;

export const Delete = styled.button`
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: ${theme.border.radius.xs};
  color: ${theme.colors.neutral_100};
  font-weight: ${theme.font.bold};
  background-color: ${theme.colors.bt_delete};

  &:hover {
    background-color: ${theme.colors.bt_delete_hover};
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: ${theme.font.sizes.xxxxs};
  }
`;
