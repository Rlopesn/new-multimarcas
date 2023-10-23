import styled, { keyframes } from "styled-components"

export const Container = styled.div`
     
@media screen and (max-width: 768px) {
    max-width: 100vw;
    height: 100vh;
    //background-image: url('../src/assets/fundo.png');
    background-size: cover; 
    background-repeat: no-repeat;
    }
`

export const Box = styled.div`

@media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 4vh;
    flex-direction: column;
    }
`


export const Functionality = styled.div`

@media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2vh;
    flex-direction: column;
    button{
        width: 75vw;
        height: 5vh;
        border: none;
        letter-spacing: 1vw;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
    }
`

export const Address = styled.div`
    @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    color:#d2ab66 ;
    gap: 1vh;
    flex-direction: column;
    text-align: center;
    iframe {
        width: 75vw;
    }
    }
`

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `

export const Time = styled.div`
    width: 75vw;
    text-align: center;
    @media screen and (max-width: 768px) {
        background-color: hsla(210, 10%, 40%, 0.5); 
        border-radius: 35px 0;
        padding: 1vh 0;
        h3 {
            color: #fff;
            filter: drop-shadow(0 0 1px rgb(22,27,33));
        }
        p {
            color: ${props => (props.lojaAberta ? '#d2ab66' : 'red')};
            animation: ${blink} 2s infinite;
            font-weight: bold;
            letter-spacing: 1vw;
        }
    }
`;

