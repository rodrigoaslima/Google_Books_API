import React from 'react';
import Button from '../Button'
import {BookDTO} from '../../dtos/BookDTO'
import {AiOutlineClose} from 'react-icons/ai'

import { Overlay, OverlayInner, InnerBox, Authors, DescriptionText, Image, Infos, Preview, SubTitle, Tittle, CloseButton } from './style';

interface DataProps{
    data: BookDTO
    openModal: () => void
}

const Mobal = ({data, openModal}: DataProps) => {
  return(
    <Overlay>
        <OverlayInner>
            <CloseButton onClick={openModal}><AiOutlineClose color='#cc7300' size={50} /></CloseButton>
            <InnerBox>
                <Image src={data.img} alt="" />
                <Infos >
                    <Tittle>{data.title}</Tittle>
                    <SubTitle>{data.subTitle}</SubTitle>
                    <Authors>{data.author}</Authors>
                    <br/>
                    <Preview href={data.link}>More</Preview>
                </Infos>
            </InnerBox>
            <DescriptionText >{data.description}</DescriptionText>
        </OverlayInner>
    </Overlay>
  );
}

export default Mobal;