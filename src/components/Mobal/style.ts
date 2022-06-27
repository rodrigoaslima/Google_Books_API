import styled from 'styled-components';

export const Container = styled.div`
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

export const  DialogBox = styled.div`
    background: white;
    width: 700px;
    height: 550px;
    padding: 1.5rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;

    .inner-box{
        margin-top: 30px;
        display: flex;
        justify-content: center;
    }
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
    color: blue;
`;

export const Preview = styled.a`

`;

export const DescriptionText = styled.h4`
    margin-top: 2rem;
    text-align: justify;
    font-size: 13px;
`;
