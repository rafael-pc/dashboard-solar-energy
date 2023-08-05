import styled from "styled-components";
import { theme } from "../../styles";

export const Content = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px;
  margin-top: 15px;
  font-size: ${theme.font.sizes.xxxxs}; 
  border: 1px solid ${theme.colors.gray};
  border-radius: ${theme.border.radius.s};

  &.error {
    border-color: ${theme.colors.error};
  }

  &:hover, &:focus-within {
    border: 2px solid ${theme.colors.bg_primary};
  }

  .icon {
    width: 20px;
    height: 20px;
    margin-left: 4px;
    color: ${theme.colors.gray};
  }

  @media only screen and (max-height: ${theme.screen.mobile}) {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  width: 100%;
  flex: 1 0;
  font-size: ${theme.font.sizes.xxxs};
  background-color: transparent;
  margin-left: 6px;
  padding: 7px;
  border: 0;
  border-radius: ${theme.border.radius.s};
  background-color: ${theme.colors.neutral_100};
`;
