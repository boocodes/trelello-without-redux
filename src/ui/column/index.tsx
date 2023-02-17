import styled from "styled-components";

interface Props{
    title: string;
    id: string;
}


function Column(props:Props){
    return(
        <ExternalWrapper>
            <TitleText>{props.title}</TitleText>
        
        </ExternalWrapper>
    )
}

const IdText = styled.div`
    color: white;
`

const ExternalWrapper = styled.div`
    margin: 20px;
    background-color: #6ef5da;
    display: flex;
    padding: 15px 30px;
`
const TitleText = styled.p`
    color: black;
    font-size: 19px;
`


export default Column;