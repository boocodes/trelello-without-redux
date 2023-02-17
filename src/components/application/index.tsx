import styled from "styled-components";
import {Header, Column, ColumnDataArrayType, CardDataArrayType, ColumnList } from '../../';
import { useState } from "react";

interface Props{
    username: string;
}

function Application(props:Props){

    const [columnDataArray, setColumnDataArray] = useState<ColumnDataArrayType[]>(
        [
            {id: '1', title: 'In progress'}, {id: '2', title: 'Done'}, {id: '3', title: 'Testing'}, {id: '4', title: 'Delay'}
        ]
        );

    return(
        <>
            <Header username={props.username}/>
            <ColumnList columnDataArray={columnDataArray}/>
        </>
    )
}

const ColumnWrapper = styled.div`
    display: flex;

`


export default Application;