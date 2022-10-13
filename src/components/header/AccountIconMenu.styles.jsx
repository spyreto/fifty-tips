import styled from "styled-components";

export const AccountIconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export const AccountIconMenuContainer = styled.span`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  padding: 2.4rem;
  border: 0.1rem solid #000;
  background-color: #fff;
  left: 50%;
  top: 50%;
  transform: translate(-70%, 10%);
  z-index: 5;
`;

export const Divider = styled.hr`
  border-top: 0.1rem solid #000;
  margin: 2.4rem 0;
`;

export const SignUpLabel = styled.span`
  display: block;
  margin: 0 1.2rem 1.2rem 1.2rem;
  font-size: 1.2rem;
`;
