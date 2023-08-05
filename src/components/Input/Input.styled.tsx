import styled from "styled-components";
import { theme } from "../../styles";

export const InputStyle = styled.input`
  width: 90%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  margin-top: 5px;
  font-size: ${theme.font.sizes.xxxs};
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.border.radius.s};

  &.error {
    border-color: ${theme.colors.error};
  }

  &:hover, &:focus-within {
    border: 2px solid ${theme.colors.bg_primary};
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    width: 100%;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: ${theme.font.sizes.xxxxs};
  }
`;

export const Label = styled.div`
  font-family: ${theme.font.family.secondary};
  margin-top: 3px;

  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: ${theme.font.sizes.xxxxs};
  }
`;
