import styled from "styled-components";
import {Header, Column, ColumnDataArrayType, CardDataArrayType, ColumnList, CommentDataArrayType } from '../../';
import { useEffect, useState } from "react";

interface Props{
    username: string;
}

function Application(props:Props){

    const [columnDataArray, setColumnDataArray] = useState<ColumnDataArrayType[]>(
        [
            {id: '1', title: 'In progress'}, {id: '2', title: 'Done'}, {id: '3', title: 'Testing'}, {id: '4', title: 'Delay'}
        ]
        );
    const [cardDataArray, setCardDataArray] = useState<CardDataArrayType[]>(
        [
            {id: '1', title: 'hello!', columnId: '1'}
        ]
    )
    const [commentDataArray, setCommentDataArray] = useState<CommentDataArrayType[]>(
        [
            {id: '1', title: 'hello!', cardId: '1'},
            {id: '1', title: 'nick!', cardId: '1'}
        ]
    )


    function addCardFunction(columnId: string, title: string){
        let newCard = {columnId: columnId, title: title, id: Math.random().toString()};
        cardDataArray.push(newCard);
        setCardDataArray(cardDataArray.concat([]));
        localStorage.setItem('cardDataArray', JSON.stringify(cardDataArray));
        console.log(cardDataArray);
    }
    function addColumnFunction(title: string){
        let newColumn = {id: Math.random().toString(), title: title};
        columnDataArray.push(newColumn);
        setColumnDataArray(columnDataArray.concat([]));
        localStorage.setItem('columnDataArray', JSON.stringify(columnDataArray));
    }
    

    useEffect(()=>{
       if(localStorage.getItem('cardDataArray') !== null){
        setCardDataArray(JSON.parse(localStorage.getItem('cardDataArray') || ''));
       }
       if(localStorage.getItem('columnDataArray') !== null){
        setColumnDataArray(JSON.parse(localStorage.getItem('columnDataArray') || ''))
       }
       
    }, [])


    return(
        <>
            <ColumnList commentDataArray={commentDataArray} addColumnFunction={addColumnFunction} addCardFunction={addCardFunction} cardDataArray={cardDataArray} columnDataArray={columnDataArray}/>
        </>
    )
}

const ColumnWrapper = styled.div`
    display: flex;

`


export default Application;