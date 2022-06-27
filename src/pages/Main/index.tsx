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

import { Container, CardContainer, Pagination } from './styles';


const Main: React.FC = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalInfo, setModalInfo] = useState({} as BookDTO)  

    const formRef = useRef<FormHandles>(null)
    const {getBooksList, getBooksPage, booksList} = useBooks();
   
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

    const handlePageClick = useCallback((page: number)=> {
        getBooksPage(page)
    }, [getBooksPage])

    const pages = Math.ceil(booksList.totalItens / 40);


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
            <Pagination 
                breakLabel="..."
                onPageChange={(e) => handlePageClick(e.selected)}
                pageRangeDisplayed={10}
                pageCount={pages}
                pageClassName="pageItem"
                initialPage={1}
                containerClassName="pagination"
                breakClassName="pageItem"
                previousLinkClassName="pageItem"
                previousClassName="pageItem"
                nextLinkClassName="pageItem"
                nextClassName="pageItem"
            />
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