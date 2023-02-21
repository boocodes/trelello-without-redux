import { useState } from "react";
import styled from "styled-components";
import {CardDataArrayType, CardModal, CommentDataArrayType} from '../../';


interface Props{
    id: string;
    title: string;
    columnId: string;
    commentDataArray: CommentDataArrayType[];
    cardDescription: string;
    editCardTitleFunction: (cardId: string, newTitle: string) => void;
    addCommentFunction: (title: string, CardId: string, author: string) => void;
    editDescription: (cardId: string, newDescription: string) => void;
}

function Card(props:Props){

    const [cardModalFlag, setCardModalFlag] = useState(false);

    function changeCardModalFlag(flag: boolean){
        setCardModalFlag(flag);
    }
    
    return(
        <ExternalWrapper>
            {cardModalFlag === true ? 
            
                <CardModal 
                    editDescription={props.editDescription}
                    addCommentFunction={props.addCommentFunction} 
                    cardDescription={props.cardDescription} 
                    editCardTitleFunction={props.editCardTitleFunction} 
                    commentDataArray={props.commentDataArray} 
                    changeCardModalFlag={changeCardModalFlag} 
                    columnId={props.columnId} 
                    id={props.id} 
                    title={props.title}/> 
                : 
                null
            }
            <CardInnerWrapper>
                <TitleText onClick={()=>{
                    setCardModalFlag(true)
                }}>{props.title}</TitleText>
            </CardInnerWrapper>
            
        </ExternalWrapper>
    )
}


const EditCardTitleIconImage = styled.img`
    width: 20px;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    cursor: pointer;
`


const CardInnerWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ExternalWrapper = styled.div`
    background-color: #c2f1ff;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
`
const TitleText = styled.p`
    color: black;
    font-family: Roboto;
    font-size: 19px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
    max-width: 400px;
    word-wrap: break-word;
`

export default Card;