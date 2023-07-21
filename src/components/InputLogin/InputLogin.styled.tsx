import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerInput = styled.div<{ errorMessage?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid ${(props) => (props.errorMessage ? "#dc3545" : "#6e6e6e")};
  border-radius: 5px;
  width: 100%;
  height: 40px;
  font-size: 0.9em; 
  margin-top: 20px;
  background-color: #fff;
  outline: none;

  &:hover {
    box-shadow: ${(props) =>
      props.errorMessage
        ? "#dc3545"
        : "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px"};
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    color: ${theme.colors.gray};
  }

  @media only screen and (max-width: 641px) {
    //width: 100%;

    /* .envelope-icon {
      display: none;
    } */
  }

  @media only screen and (max-height: 641px) {
    margin-top: 10px;
    //width: 100%;
  }
`;

export const Input = styled.input`
  flex: 1 0;
  font-size: 1em;
  background-color: transparent;
  margin-left: 6px;
  border-radius: 3px;
  border: 0;
  width: 100%;
  padding: 7px;
  background-color: ${theme.colors.neutral_100};

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: 0.9em;
  padding: 6px;
  width: 90%;
  padding-left: 0;
  text-align: left;
  font-weight: bold;
`;
