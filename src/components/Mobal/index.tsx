import React from 'react';
import Button from '../Button'
import {BookDTO} from '../../dtos/BookDTO'

import { Container, DialogBox, Authors, DescriptionText, Image, Infos, Preview, SubTitle, Tittle } from './style';

interface DataProps{
    data: BookDTO
    openModal: () => void
}

const Mobal = ({data, openModal}: DataProps) => {
  return(
    <Container>
        <div className="overlay-inner">
            <DialogBox>
                <Image src={data.img} alt="" />
                <Infos >
                    <Tittle>{data.title}</Tittle>
                    <SubTitle>{data.subTitle}</SubTitle>
                    <Authors>{data.author}</Authors>
                    <br/>
                    <Preview href={data.link}>More</Preview>
                </Infos>
            </DialogBox>
            <DescriptionText >{data.description}</DescriptionText>
        </div>
    </Container>
  );
}

export default Mobal;