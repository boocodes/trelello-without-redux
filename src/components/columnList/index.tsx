import styled from "styled-components";
import { ColumnDataArrayType, Column, CardDataArrayType, CommentDataArrayType} from "../../";
import React from "react";
import {useState} from 'react';

interface Props{
    columnDataArray: ColumnDataArrayType[];
    cardDataArray: CardDataArrayType[];
    addCardFunction: (columnId: string, title: string) => void;
    addColumnFunction: (title: string) => void;
    commentDataArray: CommentDataArrayType[];
    editCardTitleFunction: (cardId: string, newTitle: string) => void;
    addCommentFunction: (title: string, CardId: string, author: string) => void;
    editDescription: (cardId: string, newDescription: string) => void;
    editColumnTitle: (columnId: string, newTitle: string) => void;
}

function ColumnList(props:Props){

    const columnTitleInputRef = React.useRef<HTMLInputElement>(null);
    const [newColumnInputData, setNewColumnInputData] = useState<string>('')

    function createColumn(){
        if(!columnTitleInputRef.current?.value.trim()) return;
        props.addColumnFunction(columnTitleInputRef.current.value);
        columnTitleInputRef.current.value = '';
    }

    return(
        <ExternalWrapper>
            {props.columnDataArray.map((elem:ColumnDataArrayType)=>{
                return(
                    <Column 
                        editColumnTitle={props.editColumnTitle}
                        editDescription={props.editDescription} 
                        addCommentFunction={props.addCommentFunction} 
                        editCardTitleFunction={props.editCardTitleFunction} 
                        commentDataArray={props.commentDataArray} 
                        addCardFunction={props.addCardFunction} 
                        cardDataArray={props.cardDataArray} 
                        title={elem.title} 
                        id={elem.id} 
                        key={elem.id.toString()}/>
                )
            })} 
            <AddColumnWrapper onSubmit={(event: any)=>{
                event.preventDefault();
                createColumn();
            }} >
                <AddColumnInput ref={columnTitleInputRef} placeholder="column title"/>
                <AddColumnButton onClick={createColumn}>Add column</AddColumnButton>
            </AddColumnWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    flex-wrap: wrap;
    display: flex;
    margin: 20px 0px 0px 30px;
   
`

const AddColumnWrapper = styled.form`
    height: 150px;
    padding: 15px 30px;
    display: flex;
    flex-direction: column;
    background-color: #f2f4f7;
`

interface AddColumnInputType{
    ref: any;
}

const AddColumnInput = styled.input<AddColumnInputType>`
    padding: 10px 0px 10px 15px;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-bottom: 30px;
`
const AddColumnButton = styled.button`
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


export default ColumnList;