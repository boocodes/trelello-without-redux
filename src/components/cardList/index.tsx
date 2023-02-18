import styled from "styled-components";
import {CardDataArrayType, Card, CommentDataArrayType} from '../../';
import { useState } from "react";


interface Props{
    cardDataArray: CardDataArrayType[];
    columnId: string;
    commentDataArray: CommentDataArrayType[];
}


function CardList(props:Props){


    

    return(
        <ExternalWrapper>
            {props.cardDataArray.map((elem:CardDataArrayType)=>{
                console.log(props.columnId)
                if(props.columnId === elem.columnId){
                    return(
                        <Card commentDataArray={props.commentDataArray} title={elem.title} id={elem.id} columnId={elem.columnId}/>
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