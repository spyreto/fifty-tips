import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 16.5rem;
  width: auto;
  min-height: 5rem;
  letter-spacing: 0.05rem;
  line-height: 5rem;
  padding: 0 2.4rem 0 2.4rem;
  font-size: 1.4rem;
  background-color: white;
  color: black;

  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: 0.1rem solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 0.1rem solid black;
  }
`;
