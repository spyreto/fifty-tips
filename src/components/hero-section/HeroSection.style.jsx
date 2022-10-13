import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(
      rgba(34, 34, 34, 0.2),
      rgba(34, 34, 34, 0.2)
    ),
    url(${(props) => props.imagePath});
`;

export const LabelContainer = styled.div`
 
  position: absolute;
  left: 5%;
  top: 20%;
  display: flex:
  flex-direction: column;
  color: #dee2e6;
  letter-spacing: 0.075rem;
  line-height: 1.4;
  
  p {

    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }  

    animation:  3s fadeIn;
    opacity: 1;   

    font-weight: 500;
    font-size: 5.2rem;
  }

  span {
    animation: 5s fadeIn;
    opacity: 1;  
    font-size: 6.2rem;
    font-weight: 700;
  }
`;
