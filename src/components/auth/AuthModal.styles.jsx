import styled from "styled-components";

export const FadeBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const ModalContainer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;

  padding: 2.4rem;

  background-color: #fff;

  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0);
  z-index: 5;
`;
