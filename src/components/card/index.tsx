import { useState } from "react";
import styled from "styled-components";
import {CardModal, CommentDataArrayType} from '../../';


interface Props{
    id: string;
    title: string;
    columnId: string;
    commentDataArray: CommentDataArrayType[];
}

function Card(props:Props){

    const [cardModalFlag, setCardModalFlag] = useState(false);

    function changeCardModalFlag(flag: boolean){
        setCardModalFlag(flag);
    }


    return(
        <ExternalWrapper>
            {cardModalFlag === true ? <CardModal commentDataArray={props.commentDataArray} changeCardModalFlag={changeCardModalFlag} columnId={props.columnId} id={props.id} title={props.title}/> : null}
            <CardInnerWrapper>
                <TitleText onClick={()=>{
                    setCardModalFlag(true)
                }}>{props.title}</TitleText>
                <EditCardTitleIconImage onClick={()=>{
                    alert('1');
                }} src="./images/editIcon.png"/>
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
    font-family: Robot;
    font-size: 19px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
    }
`

export default Card;