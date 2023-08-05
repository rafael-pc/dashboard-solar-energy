import styled from "styled-components";
import { theme } from "../../styles";

export const Button = styled.button`
  display: block;
  border: none;
  width: 130px;
  padding: 12px;
  margin-top: 40px;
  font-size: ${theme.font.sizes.xxxxs};
  border-radius: ${theme.border.radius.m};
  color: ${theme.colors.neutral_100};
  background-color: ${theme.colors.bt_primary};
  font-weight: ${theme.font.bold};

  &:hover {
    background-color: ${theme.colors.bt_primary_hover};
  }
`;
