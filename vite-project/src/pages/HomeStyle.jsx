import styled, { keyframes } from "styled-components"

export const Container = styled.div`
     
@media screen and (max-width: 768px) {
    max-width: 100vw;
    height: 100vh;
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
        color:#d2ab66 ;
        filter: drop-shadow(0 0 20px rgb(52,60,68));
        border-radius: 35px 35px;
        font-size: 1rem;
        font-weight: underline;
        width: 75vw;
        height: 5vh;
        border: none;
        letter-spacing: 1vw;
        transform: translateY(-0.2em);
        transition: transform 0.1s ease;
        opacity: 0.9;
        &:active{
            transform: translateY(0);
        }
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

