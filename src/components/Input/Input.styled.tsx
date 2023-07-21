import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputStyle = styled.input<{ errorMessage?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${(props) => (props.errorMessage ? "#dc3545" : "#6e6e6e")};
  border-radius: 5px;
  width: 90%;
  height: 38px;
  font-size: 1em; 
  margin-top: 5px;
  color: ${theme.colors.dark_light};

  &:hover {
    box-shadow: ${(props) =>
      props.errorMessage
        ? "#dc3545"
        : "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px"};
  }

  @media only screen and (max-width: 641px) {
    width: 100%;
  }

  @media only screen and (max-height: 420px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  font-size: 0.9em;
  padding: 6px;
  padding-left: 0;
  font-weight: bold;
`;

export const Label = styled.div`
  font-family: ${theme.font.input};
  //font-weight: ${theme.font.bolder};

  @media only screen and (max-height: 420px) {
    font-size: 0.9rem;
  }
`;
