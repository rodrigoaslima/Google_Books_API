import styled from 'styled-components';

export const Container = styled.div`
    background-color: var(--secondary-color);
    border-radius: 1rem;
    padding: 0.5rem;
    margin-bottom: 10px;
    box-shadow: 0 5px 5px rgba(212,185,150,.5);
    transition: .5s;
    text-align: center;
    position: relative;

    .card:hover{
        transform: scale(0.9);
        background-color: rgba(255,255,255,0.8);
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tittle = styled.h3`
    font-size: 14px;
    margin-bottom: 32px;
`;

export const Text = styled.p`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-size: 13px;
    font-weight: bold;
    padding: 0.2rem;
`;