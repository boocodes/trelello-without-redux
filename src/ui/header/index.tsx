import styled from "styled-components";

interface Props{
    username?: string;
}


function Header(props:Props){
    return(
        <ExternalWrapper>
            <Title>Trelello</Title>
            <Username>{props.username}</Username>
        
        </ExternalWrapper>
    )
}


const Username = styled.p`
    color: white;
    font-size: 19px;
`

const Title = styled.h1`
    color: white;

`

const ExternalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    background-color: #3d9ee3;
`

export default Header;