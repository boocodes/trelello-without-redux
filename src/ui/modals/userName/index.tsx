import styled from "styled-components";
import { useRef } from "react";
import React from "react";


interface Props{
    setUserNameFunction: (name:string) => void; 

}

function UserNameModal(props:Props){

    const userInputRef = React.useRef<HTMLInputElement>(null);

    function enterUserNameFunction(){
        if(userInputRef.current?.value !== undefined){
            if(userInputRef.current.value.trim()){
                props.setUserNameFunction(userInputRef.current.value);
            }
            else{
                return;
            }
        }
        else{
            return 0;
        }
    }

    return(
        <>
            <Overlay/>
            <ExternalWrapper>
                <Text>Enter your name</Text>
                <UserNameInput placeholder="name" ref={userInputRef}/>
                <button onClick={enterUserNameFunction}>Sub</button>
            </ExternalWrapper>
            
        </>
    )
}

const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    top: 0;
    left: 0;
    opacity: 0.5;
    height: 100vh;
    z-index: 3;
    background-color: black;
`

const Text = styled.p`
    font-size: 24px;
`


const ExternalWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 500px;
    height: 500px;
    border-radius: 20px;
`

const UserNameInput = styled.input`

`



export default UserNameModal;