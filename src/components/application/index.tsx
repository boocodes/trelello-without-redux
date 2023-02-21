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
            {id: '1', columnId: '1', title: 'Hello', description: 'None'}
        ]   
    )
    const [commentDataArray, setCommentDataArray] = useState<CommentDataArrayType[]>(
        [
            {id: '1', cardId: '1', author: 'Nick', title: 'Hello there!'}
        ]
    )


    function editColumnTitle(columnId: string, newTitle: string){
        columnDataArray.map((column:ColumnDataArrayType)=>{
            if(column.id === columnId){
                column.title = newTitle;
            }
        })
        setColumnDataArray(columnDataArray.concat([]));
        localStorage.setItem('columnDataArray', JSON.stringify(columnDataArray));
    }

    function editCardDescrption(cardId: string, newDescription: string){
        cardDataArray.map((card:CardDataArrayType)=>{
            if(card.id === cardId){
                card.description = newDescription;
            }
        })
        setCardDataArray(cardDataArray.concat([]));
        localStorage.setItem('cardDataArray', JSON.stringify(cardDataArray));
    }

    function editCardTitleFunction(cardId: string, newTitle: string){
        cardDataArray.map((card: CardDataArrayType)=>{
            if(card.id === cardId){
                card.title = newTitle;
            }
        })
        setCardDataArray(cardDataArray.concat([]));
        localStorage.setItem('cardDataArray', JSON.stringify(cardDataArray));
    }

    function addCardFunction(columnId: string, title: string){
        let newCard = {columnId: columnId, title: title, id: Math.random().toString(), description: 'Empty field'};
        cardDataArray.push(newCard);
        setCardDataArray(cardDataArray.concat([]));
        localStorage.setItem('cardDataArray', JSON.stringify(cardDataArray));
    }
    function addColumnFunction(title: string){
        let newColumn = {id: Math.random().toString(), title: title};
        columnDataArray.push(newColumn);
        setColumnDataArray(columnDataArray.concat([]));
        localStorage.setItem('columnDataArray', JSON.stringify(columnDataArray));
    }
    function addCommentFunction(title: string, cardId: string, author: string){
        let newComment = {id: Math.random().toString(), cardId: cardId, title: title, author: author};
        commentDataArray.push(newComment);
        setCommentDataArray(commentDataArray.concat([]));
        localStorage.setItem('commentDataArray', JSON.stringify(commentDataArray));
    }
    

    useEffect(()=>{
       if(localStorage.getItem('cardDataArray') !== null){
        setCardDataArray(JSON.parse(localStorage.getItem('cardDataArray') || ''));
       }
       if(localStorage.getItem('columnDataArray') !== null){
        setColumnDataArray(JSON.parse(localStorage.getItem('columnDataArray') || ''))
       }
       if(localStorage.getItem('commentDataArray') !== null){
        setCommentDataArray(JSON.parse(localStorage.getItem('commentDataArray') || ''))
       }
       
    }, [])


    return(
        <>
            <ColumnList 
                editColumnTitle={editColumnTitle}
                editDescription={editCardDescrption} 
                addCommentFunction={addCommentFunction} 
                editCardTitleFunction={editCardTitleFunction} 
                commentDataArray={commentDataArray} 
                addColumnFunction={addColumnFunction} 
                addCardFunction={addCardFunction} 
                cardDataArray={cardDataArray} 
                columnDataArray={columnDataArray}
            />
        </>
    )
}

const ColumnWrapper = styled.div`
    display: flex;

`


export default Application;