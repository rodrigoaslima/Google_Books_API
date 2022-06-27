import React, {useCallback, useRef, useState }  from 'react';
import { useBooks } from '../../context/BookContext';
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import {FaSearch} from 'react-icons/fa'

import Button from '../../components/Button';
import Input from '../../components/Input';
import BookCard from '../../components/BookCard';
import Modal from '../../components/Mobal';
import {BookDTO} from '../../dtos/BookDTO'

import { Container, CardContainer } from './styles';


const Main: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({} as BookDTO)

    const formRef = useRef<FormHandles>(null)
    const {getBooksList} = useBooks();
    const {booksList} = useBooks();

    const handleSubmit = useCallback((text: string)=> {
        getBooksList(text)
    }, [getBooksList])

    const handleModal = (card: BookDTO) =>{
        setModalInfo(card)
        setOpenModal(!openModal)
    }

    const handleCloseModal = ()=>{
        setOpenModal(!openModal)
    }

  return(
    <div>
        <div>
            <h1>Google Books</h1>
        </div>

        <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Find Your Book</h2>
           
            <Input 
                name="search" 
                placeholder="Enter Your Book Name"
                icon={FaSearch}
            />
                
            <Button type="submit">Search</Button>

        </Form>

        <div>

        </div>
        <CardContainer>
            {
                booksList.loading 
                ? 
                <h1>CARREGANDO</h1> 
                : 
                booksList.Infos.map((card: BookDTO) => (
                   <BookCard data={card} openModal={()=> handleModal(card)}/>
                ))
            }
        </CardContainer>

        {
            openModal && <Modal data={modalInfo} openModal={handleCloseModal}/>
        }
       
    </div>
  );
}

export default Main;