import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Button = styled.button`
  display: block;
  border: none;
  width: 130px;
  padding: 12px;
  margin-top: 40px;
  font-size: ${theme.font.sizes.xxxxsmall};
  margin-bottom: 20px;
  border-radius: ${theme.border.radius};
  color: ${theme.colors.neutral_100};
  background-color: ${theme.colors.bt_primary};
  font-weight: ${theme.font.bold};

  &:hover {
    background-color: ${theme.colors.bt_primary};
  }

  @media only screen and (max-height: 641px) {
    width: 80%;
  }
`;
