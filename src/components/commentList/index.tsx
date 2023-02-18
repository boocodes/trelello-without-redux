import styled from "styled-components";
import {CommentDataArrayType, Comment} from '../../';


interface Props{
    commentDataArray: CommentDataArrayType[];
    cardId: string;
}


function CommentList(props:Props){
    return(
        <>
            <ExternalWrapper>
                {props.commentDataArray.map((elem:CommentDataArrayType)=>{
                    
                        if(elem.cardId === props.cardId){
                            return(
                                <Comment cardId={props.cardId} commentDataObject={elem}/>
                            )
                        }
                       
                    
                })}
            </ExternalWrapper>
        
        </>
    )
}

const ExternalWrapper = styled.div`
    background-color: #f2f4f7;
    padding: 15px 30px;
    width: 300px;
`


export default CommentList;