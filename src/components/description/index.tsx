import styled from 'styled-components'
import { useState } from 'react';
import React from 'react';

interface Props{
    cardId: string;
    descriptionText: string;
    editDescription: (cardId: string, newDescription: string) => void;
}


function Description(props:Props){

    const [editDescriptionFlag, setEditDescriptionFlag] = useState<boolean>(false);
    const editDescriptionInputRef = React.useRef<HTMLInputElement>(null);

    function innerEditDescriptionFunction(){
        if(!editDescriptionInputRef.current?.value.trim()) return;
        props.editDescription(props.cardId, editDescriptionInputRef.current.value);
        setEditDescriptionFlag(false);
    }

    return(
        <>
            {
                editDescriptionFlag === false ? 
                <ExternalWrapper onClick={()=>{
                    setEditDescriptionFlag(!editDescriptionFlag);
                    
                }}>
                    <DescriptionText>
                        {props.descriptionText}
                    </DescriptionText>
                </ExternalWrapper>
                :
                <EditDescriptionForm onSubmit={(e:any)=>{
                    e.preventDefault();
                    innerEditDescriptionFunction();
                }}>
                    <EditDescriptionInput defaultValue={props.descriptionText} ref={editDescriptionInputRef} />
                </EditDescriptionForm>
            }
        </>
    )
}

const EditDescriptionForm = styled.form`
    position: relative;
    width: 100%;
`
const EditDescriptionInput = styled.input`
    border: none;
    outline: none;
    font-size: 18px;
    width: 100%;
    position: relative;
    word-wrap: break-word;
    background-color: #f2f4f7;
    padding: 15px 0px 15px 30px;
    margin-bottom: 30px;
    border-radius: 5px;
`

const ExternalWrapper = styled.div`
    background-color: #f2f4f7;
    cursor: pointer;
    :hover{
        opacity: 0.5;
        transition: 0.5s;
    }
    width: 100%;
    position: relative;
    padding: 15px 0px 15px 30px;
    margin-bottom: 30px;
    border-radius: 5px;
`

const DescriptionText = styled.p`
    font-size: 18px;
    width: 300px;
    word-wrap: break-word;
`

export default Description;
