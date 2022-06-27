import React, { createContext, ReactNode, useContext, useState } from 'react';
import {BookDTO} from '../dtos/BookDTO'


interface FavoriteProviderProps{
    children: ReactNode
}

interface FavoriteBook{
    bookInfos: BookDTO;
    favorite: true | false;
}

interface IFavotiresContextData{
    addFavorites: (data: any) => void;
    removeFavorites: (data: any) => void
}

let favoriteList:FavoriteBook[]  = []

const FavoriteContext = createContext({} as IFavotiresContextData);

function FavoriteProvider({children}: FavoriteProviderProps){
    
    function addFavorites(data: any){

        favoriteList.push(data)
        console.log('favoriteList: ', favoriteList)
    }

    function removeFavorites(data: any){
        const teste = favoriteList.filter((e: any) => e.book.id !== data.book.id)
        favoriteList = teste;
        console.log('favoriteList: ', favoriteList)
    }

    return(
        <FavoriteContext.Provider value={{addFavorites, removeFavorites}}>
            {children}
        </FavoriteContext.Provider>
    )
}


function useFavorite(){
    const context = useContext(FavoriteContext);
    return context;
}

export { FavoriteProvider, useFavorite } 

