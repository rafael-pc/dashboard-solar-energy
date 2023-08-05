import styled from "styled-components";
import { theme } from "../../styles";

export const InputSelect = styled.select`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px;
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.border.radius.s};
  width: 45%;
  height: 38px;
  margin-top: 10px;
  color: ${theme.colors.dark_light};
  background-color: ${theme.colors.neutral_100};
  outline: none;
  font-size: ${theme.font.sizes.xxxs};

  &.error {
    border-color: ${theme.colors.error};
  }

  &:hover, &:focus-within {
    border: 2px solid ${theme.colors.bg_primary};
  }

  @media only screen and (max-width: ${theme.screen.mobile}) {
    height: 35px;
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    font-size: ${theme.font.sizes.xxxxs};
  }
`;