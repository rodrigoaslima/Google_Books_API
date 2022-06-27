import Api from '../services/api'
import React, { createContext, ReactNode, useContext, useState } from 'react';
import {BookDTO} from '../dtos/BookDTO'


interface BookProviderProps{
    children: ReactNode
}

interface BookList{
    Infos: BookDTO[]
    loading: true | false;
    totalItens: number
}

interface IBooksContextData{
    booksList: BookList;
    getBooksList: (text: string) => Promise<void>
    getBooksPage: (page: number) => Promise<void>
}

const BookContext = createContext({} as IBooksContextData);

function BookProvider({children}: BookProviderProps){
    const apikey = 'AIzaSyD3sGF0ra4knDg_yXLeRVGTBkaT5NFRr4g';

    const [booksList, setBookslist] = useState<BookList>({Infos: [], loading: false, totalItens: 0} as BookList);
    const [text, setText] = useState('');

    async function getBooksList({search}: any){ 
        setBookslist({
            Infos: [],
            loading: true,
            totalItens: 0
        })

        const list:BookDTO[]  = []
        try {
            const response = await Api.get(`volumes?q=${search}&key=${apikey}&startIndex=0&maxResults=40`);
            console.log('response: ', response.data);
            response.data.items.forEach((element: any) => {
                list.push(
                    {
                        id: element.id,
                        title: element.volumeInfo.title,
                        subTitle: element.volumeInfo.subTitle,
                        author: element.volumeInfo.authors,
                        link: element.volumeInfo.previewLink,
                        img: element.volumeInfo.imageLinks.thumbnail,
                        description: element.volumeInfo.description
                    }
                )
            });
            setBookslist({
                Infos: list,
                loading: false,
                totalItens: response.data.totalItems
                
            });
            
            setText(search);

        } catch (error) {
            console.log('response: ', error);
            setBookslist({
                Infos: [],
                loading: false,
                totalItens: 0
            })
        }   
    }

    async function getBooksPage(page: any){
       
        const list:BookDTO[]  = []
        try {
            const response = await Api.get(`volumes?q=${text}&key=${apikey}&startIndex=${page}&maxResults=40`);
            console.log('response: ', response.data);
            response.data.items.forEach((element: any) => {
                list.push(
                    {
                        id: element.id,
                        title: element.volumeInfo.title,
                        subTitle: element.volumeInfo.subTitle,
                        author: element.volumeInfo.authors,
                        link: element.volumeInfo.previewLink,
                        img: element.volumeInfo.imageLinks.thumbnail,
                        description: element.volumeInfo.description
                    }
                )
            });
            setBookslist({
                Infos: list,
                loading: false,
                totalItens: response.data.totalItems 
            });
            
        } catch (error) {
            console.log('response: ', error);
            setBookslist({
                Infos: [],
                loading: false,
                totalItens: 0
            })
        }   
    }

    return(
        <BookContext.Provider value={{getBooksList, booksList, getBooksPage}}>
            {children}
        </BookContext.Provider>
    )

}

function useBooks(){
    const context = useContext(BookContext);
    return context;
}

export { BookProvider, useBooks}