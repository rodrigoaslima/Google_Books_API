import Api from '../services/api'
import React, { createContext, ReactNode, useContext, useState } from 'react';
import {BookDTO} from '../dtos/BookDTO'


interface BookProviderProps{
    children: ReactNode
}

interface BookList{
    Infos: BookDTO[]
    loading: true | false;
}

interface IBooksContextData{
    booksList: BookList;
    getBooksList: (text: string) => Promise<void>
}

const BookContext = createContext({} as IBooksContextData);

function BookProvider({children}: BookProviderProps){
    const apikey = 'AIzaSyD3sGF0ra4knDg_yXLeRVGTBkaT5NFRr4g';

    const [booksList, setBookslist] = useState<BookList>({Infos: [], loading: false} as BookList)

    async function getBooksList({search}: string){
        setBookslist({
            Infos: [],
            loading: true
        })

        const list:BookDTO[]  = []
        try {
            const response = await Api.get(`volumes?q=${search}&key=${apikey}&maxResults=40`);
            console.log('response: ', response.data.items);
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
                loading: false
            })

        } catch (error) {
            console.log('response: ', error);
            setBookslist({
                Infos: [],
                loading: false
            })
        }   
    }

    return(
        <BookContext.Provider value={{getBooksList, booksList}}>
            {children}
        </BookContext.Provider>
    )

}

function useBooks(){
    const context = useContext(BookContext);
    return context;
}

export { BookProvider, useBooks}