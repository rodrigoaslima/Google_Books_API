import {BookDTO} from '../../dtos/BookDTO'
import { useBooks } from '../../context/BookContext';
import {AiOutlineClose, AiOutlineStar, AiFillStar} from 'react-icons/ai'

import { Overlay, OverlayInner, InnerBox, Authors, DescriptionText, Image, Infos, Preview, SubTitle, Tittle, CloseButton, Header, FavoriteWrapper, Favorites } from './style';
import { useState } from 'react';

interface DataProps{
    data: BookDTO
    openModal: () => void
}

const Mobal = ({data, openModal}: DataProps) => {
    const [teste, setTeste] = useState<any[]>([]);

    const { addToFavorites } = useBooks();

    function addBookToFavorites(card: BookDTO){
       addToFavorites(card.id)

    }
    

  return(
    <Overlay>
        <OverlayInner>
            <Header>
                <CloseButton onClick={openModal}><AiOutlineClose color='#cc7300' size={50} /></CloseButton>

                <FavoriteWrapper>
                    <Favorites>Add to favorites</Favorites>
                    <CloseButton onClick={()=> addBookToFavorites(data)}>{data.favorite ? <AiFillStar color='#cc7300' size={50} /> : <AiOutlineStar color='#cc7300' size={50} />}</CloseButton>
                </FavoriteWrapper>
            </Header>
            
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