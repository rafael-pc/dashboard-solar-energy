import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.bg_primary};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: ${theme.screen.mobile}) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${theme.colors.neutral_100};
    text-decoration: none;
    line-height: 1.5em;
    transition: color 0.3s linear;

    @media (max-width: ${theme.screen.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${theme.colors.neutral_300};
    }
  }
`;
