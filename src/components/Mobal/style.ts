import styled from 'styled-components';
import { shade } from 'polished'

export const Overlay = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2));
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const OverlayInner = styled.div`
    background: #27252d;
    width: 700px;
    height: 550px;
    padding: 1.5rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
    border: solid;
    border-color: #cc7300;
    border-radius: 5px;
    overflow-y: auto;
`;

export const  InnerBox = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

export const Image = styled.img`
    margin-right: 20px;
    width: 150px;
    height: 200px;

`;

export const Infos = styled.div`

`;

export const Tittle = styled.h1`

`;

export const SubTitle = styled.h3`
    margin-top: 10px;
    color: green;

`;

export const Authors = styled.h4`
    color: #ffffff;
`;

export const Preview = styled.a`

`;

export const DescriptionText = styled.h4`
    margin-top: 2rem;
    text-align: justify;
    font-size: 16px;
`;

export const CloseButton = styled.div`
   
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    transition: background-color 0.2s;
    &:hover{
        background: ${shade(0.2, '#597c88')}
    }

    svg {
       color: #ffff;
    }

`;

export const Header = styled.div`

`;
