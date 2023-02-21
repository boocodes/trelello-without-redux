import styled from "styled-components";
import {CardDataArrayType, Card, CommentDataArrayType} from '../../';
import { useState } from "react";


interface Props{
    cardDataArray: CardDataArrayType[];
    columnId: string;
    commentDataArray: CommentDataArrayType[];
    editCardTitleFunctin: (cardId: string, newTitle: string) => void;
    addCommentFunction: (title: string, CardId: string, author: string) => void;
    editDescription: (cardId: string, newDescription: string) => void;
}


function CardList(props:Props){


    
    return(
        <ExternalWrapper>
            {props.cardDataArray.map((elem:CardDataArrayType)=>{
                if(props.columnId === elem.columnId){
                    return(
                        <Card 
                            editDescription={props.editDescription}
                            addCommentFunction={props.addCommentFunction} 
                            cardDescription={elem.description} 
                            editCardTitleFunction={props.editCardTitleFunctin} 
                            commentDataArray={props.commentDataArray} 
                            title={elem.title} 
                            id={elem.id} 
                            columnId={elem.columnId}/>
                    )
                }
                    
                    
                
            })}
        
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`


export default CardList;