import styled from "styled-components";

export const Input = styled.select<{ errorMessage?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${(props) => (props.errorMessage ? "#dc3545" : "#6e6e6e")};
  border-radius: 5px;
  width: 50%;
  height: 38px;
  margin-top: 10px;
  //color: #686868;
  background-color: #fff;
  outline: none;
  font-size: 1em;

  &:hover {
    box-shadow: ${(props) =>
      props.errorMessage
        ? "#dc3545"
        : "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 1px"};
  }

  .icon {
    width: 70px;
    height: 30px;
    color: #a8a8a8;
  }

  @media only screen and (max-width: 600px) {
    height: 35px;
  }

  @media only screen and (max-width: 400px) {
    .envelope-icon {
      display: none;
    }
  }

  @media only screen and (max-height: 420px) {
    font-size: 0.9rem;
  }
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.9em;
  padding: 6px;
  padding-left: 0;
  font-weight: bold;
`;
