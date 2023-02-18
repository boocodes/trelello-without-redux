import styled from "styled-components";
import {CommentDataArrayType, CommentList} from '../../../';

interface Props{
    title: string;
    id: string;
    columnId: string;
    changeCardModalFlag: (flag: boolean) => void;
    commentDataArray: CommentDataArrayType[];
}

function CardModal(props:Props){
    return(
        <>
            <Overlay onClick={()=>{
                props.changeCardModalFlag(false)
            }}/>
            <ExternalWrapper>
                <CardTitleText>Card</CardTitleText>
                <CardTitleInnerWrapper>
                    <CardTitle>{props.title}</CardTitle>
                    <EditCardTitleIconImage src="./images/editIcon.png"/>
                </CardTitleInnerWrapper>
                <CommentWrapper>
                    <CommentList commentDataArray={props.commentDataArray} cardId={props.id}/>
                </CommentWrapper>
                <CloseModalButton onClick={()=>{
                    props.changeCardModalFlag(false);
                }}>close</CloseModalButton>
            </ExternalWrapper>
            
        
        </>
    )
}


const CommentWrapper = styled.div`

`


const EditCardTitleIconImage = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 30px;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
`
const CardTitleInnerWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    opacity: 0.5;
    height: 100vh;
    z-index: 3;
    background-color: black;
    cursor: pointer;
`

const CardTitle = styled.p`
    font-size: 24px;
    opacity: 0.5;
    margin-top: 10px;
    margin-bottom: 10px;
`


const ExternalWrapper = styled.div`
    padding: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 3;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 500px;
    font-family: Roboto;
    border-radius: 20px;
`

const CloseModalButton = styled.button`
    font-size: 18px;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 30px;
`

const CardTitleText = styled.p`
    font-size: 24px;
`

export default CardModal;