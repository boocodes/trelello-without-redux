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
                {props.commentDataObject.title}
            </ExternalWrapper>
        
        </>
    )

}

const ExternalWrapper = styled.div`
    display: flex;
    align-items: center;
`


export default Comment;