import styled from "styled-components";
import { CardList, CardDataArrayType, CommentDataArrayType } from '../../';
import React from 'react';
import {useState} from 'react';


interface Props{
    title: string;
    id: string;
    cardDataArray: CardDataArrayType[];
    addCardFunction: (columnId: string, title: string) => void;
    commentDataArray: CommentDataArrayType[];
    editCardTitleFunction: (cardId: string, newTitle: string) => void;
    addCommentFunction: (title: string, CardId: string, author: string) => void;
    editDescription: (cardId: string, newDescription: string) => void;
    editColumnTitle: (columnId: string, newTitle: string) => void;
}


function Column(props:Props){
    const cardNameInputRef = React.useRef<HTMLInputElement>(null)
    const [editColumnTitleFlag, setEditColumnTitleFlag] = useState<boolean>(false);
    const editColumnTitleInputRef = React.useRef<HTMLInputElement>(null);
    function createCard(){
        if(!cardNameInputRef.current?.value.trim()) return;
        props.addCardFunction(props.id, cardNameInputRef.current.value);
        cardNameInputRef.current.value = '';
    }

    function editColumnTitle(){
        if(!editColumnTitleInputRef.current?.value.trim()) return;
        props.editColumnTitle(props.id, editColumnTitleInputRef.current.value);
        setEditColumnTitleFlag(false);
    }

    return(
        <ExternalWrapper>
            
            {
                editColumnTitleFlag === false ?
                    <ColumnTitleInnerWrapper>
                        <TitleText>{props.title}</TitleText>
                        <ColumnTitleEditImage src="./images/editIcon.png" onClick={()=>{
                            setEditColumnTitleFlag(true);
                        }}/>
                    </ColumnTitleInnerWrapper>
                    :
                    <EditColumnTitleForm onSubmit={(e:any)=>{
                        e.preventDefault();
                        editColumnTitle();
                    }}>
                        <EditColumnTitleInput ref={editColumnTitleInputRef} defaultValue={props.title}/>
                        <EditColumnSubmitImage src="./images/okIcon.png" onClick={editColumnTitle}/>
                    </EditColumnTitleForm>
            }
            
            <CardList 
                editDescription={props.editDescription}
                addCommentFunction={props.addCommentFunction} 
                editCardTitleFunctin={props.editCardTitleFunction} 
                commentDataArray={props.commentDataArray} 
                cardDataArray={props.cardDataArray} 
                columnId={props.id}/>
            <AddCardWrapper onSubmit={(event: any)=>{
                event.preventDefault();
                createCard();
            }}>
                 <AddCardInput ref={cardNameInputRef} placeholder="card title"/>
                <AddCardButton  onClick={createCard}>Add card</AddCardButton>
            </AddCardWrapper>
           
        </ExternalWrapper>
    )
}


const EditColumnTitleForm = styled.form`
    display: flex;
    justify-content: space-between;
`
const EditColumnTitleInput = styled.input`

    border: none;
    outline: none;
    background: none;
    color: black;
    font-family: Roboto;
    font-size: 24px;
    margin-bottom: 20px;
    width: 200px;
    word-wrap: break-word;
`
const EditColumnSubmitImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 5px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`


const ColumnTitleEditImage = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 20px;
    margin-top: 5px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`


const ColumnTitleInnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AddCardWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

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
    max-width: 200px;
    word-wrap: break-word;
`


export default Column;