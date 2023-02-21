import styled from "styled-components";
import {CommentDataArrayType} from '../../';


interface Props{
    commentDataObject: CommentDataArrayType;
    cardId: string;
    
}


function Comment(props:Props){
    return(
        <>
            <ExternalWrapper>
                <CommentTitle>{props.commentDataObject.title}</CommentTitle>
                <CommentAuthor>{props.commentDataObject.author}</CommentAuthor>
            </ExternalWrapper>
        
        </>
    )

}

const CommentTitle = styled.p`
    font-size: 18px;
    width: 200px;

`
const CommentAuthor = styled.p`
    font-size: 16px;
    margin-bottom: 5px;
    opacity: 0.7;
`

const ExternalWrapper = styled.div`
    margin-top: 10px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 15px;
    font-family: Roboto;
`


export default Comment;