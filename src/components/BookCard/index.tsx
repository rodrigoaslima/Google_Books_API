
import React from 'react';
import {BookDTO} from '../../dtos/BookDTO'

import { Container, Image, Footer, Tittle, Text } from './style';

interface DataProps{
    data: BookDTO
    openModal: () => void
}

const BookCard = ({data, openModal}: DataProps) => {
  return (
    <Container onClick={()=>{openModal()}}>
        <Image src={data.img} alt="" />
        <Footer >
            <Tittle >{data.title}</Tittle>
            <Text >&#8377;{data.author}</Text>
        </Footer>
    </Container>
  );
}

export default BookCard;