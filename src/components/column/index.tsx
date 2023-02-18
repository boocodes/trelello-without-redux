import styled from "styled-components";
import { CardList, CardDataArrayType, CommentDataArrayType } from '../../';
import React from 'react';


interface Props{
    title: string;
    id: string;
    cardDataArray: CardDataArrayType[];
    addCardFunction: (columnId: string, title: string) => void;
    commentDataArray: CommentDataArrayType[];
}


function Column(props:Props){
    const cardNameInputRef = React.useRef<HTMLInputElement>(null)

    function createCard(){
        if(!cardNameInputRef.current?.value.trim()) return;
        props.addCardFunction(props.id, cardNameInputRef.current.value);
        cardNameInputRef.current.value = '';
    }

    return(
        <ExternalWrapper>
            <TitleText>{props.title}</TitleText>
            <CardList commentDataArray={props.commentDataArray} cardDataArray={props.cardDataArray} columnId={props.id}/>
            <AddCardInput ref={cardNameInputRef} placeholder="card title"/>
            <AddCardButton onClick={createCard}>Add card</AddCardButton>
        </ExternalWrapper>
    )
}


const AddCardInput = styled.input`
    padding: 10px 0px 10px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    
`

const AddCardButton = styled.button`
    margin-top: 30px;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    background-color: #3d9ee3;
    color: white;
    font-family: Robot;
    font-size: 19px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`

const IdText = styled.div`
    color: white;
`

const ExternalWrapper = styled.div`
    margin-right: 30px;
    margin-bottom: 30px;
    background-color: #f2f4f7;
    border-radius: 10px;
    display: flex;
    padding: 15px 30px;
    flex-direction: column;
`
const TitleText = styled.p`
    color: black;
    font-family: Roboto;
    font-size: 24px;
    margin-bottom: 20px;
`


export default Column;