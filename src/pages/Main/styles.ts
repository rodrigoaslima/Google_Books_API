import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Container = styled.div`
  
`;

export const CardContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(200px,0.5fr));
    grid-gap:20px;
    box-sizing: border-box;
`;

export const Pagination = styled(ReactPaginate)`

    .pagination{
        display: flex;
        margin: 1rem;
        justify-content: center;
    }
    
    .pageItem{
        padding: 10px;
        font-size: 20px;
        list-style-type: none;
        cursor: pointer;
    }
`;

