import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 641px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100vh;
  //background-color: ${theme.colors.neutral_200};
  display: block;
  overflow-y: auto;
  white-space: nowrap;

  .link {
    width: 120px;
    //margin: 0 auto;
    margin-top: 100px;
    border-radius: 15px;

    @media only screen and (max-width: 1600px) {
      display: block;
      margin-left: 0;
      margin: 0 auto;
      margin-bottom: 80px;
      margin-top: 80px;
    }

    @media only screen and (max-width: 641px) {
      display: block;
      margin-left: 0;
      margin: 0 auto;
      margin-bottom: 80px;
    }
  }

  h3 {
    margin: 0 auto;
    font-size: 1.4em;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 50px;
    text-align: center;
    padding: 20px;
    color: ${theme.colors.dark};
  }

  @media only screen and (max-width: 641px) {
    width: 100vw;
    h3 {
      font-size: 1.1rem;
      margin-left: 0;
      text-align: center;
    }
  }

  @media only screen and (max-height: 420px) {
    h3 {
      font-size: 1.1rem;
      margin-top: 15px;
      margin-bottom: 20px;
    }
  }
`;

export const Table = styled.table`
  width: 60%;
  margin: 0 auto;
  font-size: 0.9em;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #d0d0d0;

  tr:nth-child(odd) {
    background-color: ${theme.colors.neutral_300};
  }

  th {
    padding: 6px;
    background-color: ${theme.colors.bg_primary};
    color: ${theme.colors.neutral_100};
  }

  @media only screen and (max-width: 641px) {
    width: 90%;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    margin-bottom: 80px;
  }

  @media only screen and (max-height: 420px) {
    width: 90%;

    th {
      font-size: 0.8rem;
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

  @media only screen and (max-height: 420px) {
    td {
      font-size: 0.8rem;
      padding: 3px;
    }
  }
`;

export const Edit = styled.button`
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  background-color: ${theme.colors.bt_edit};

  &:hover {
    background-color: ${theme.colors.bt_edit_hover};
  }

  @media only screen and (max-height: 420px) {
    border-radius: 2px;
    font-size: 0.9em;
  }
`;

export const Delete = styled.button`
  border: none;
  width: 60px;
  padding: 5px;
  border-radius: 3px;
  color: ${theme.colors.neutral_100};
  font-weight: bold;
  background-color: ${theme.colors.bt_delete};

  &:hover {
    background-color: ${theme.colors.bt_delete_hover};
  }

  @media only screen and (max-height: 420px) {
    border-radius: 2px;
    font-size: 0.9em;
  }
`;
