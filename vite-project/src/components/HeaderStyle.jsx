import styled, { keyframes } from 'styled-components';

const floatAnimation = keyframes`
  0% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(5px);
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 768px) {
    max-width: 100vw;
    padding: 2vh 0 ;
    display: flex;
    justify-content: center;

    img {
      max-width: 35%;
      max-height: 35%;
      animation: ${floatAnimation} 3s ease infinite;
      filter: drop-shadow(0 0 3px #353e45);
  }
}
`

