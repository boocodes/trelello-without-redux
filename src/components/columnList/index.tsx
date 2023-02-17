import styled from "styled-components";
import { ColumnDataArrayType, Column } from "../../";


interface Props{
    columnDataArray: ColumnDataArrayType[];
}

function ColumnList(props:Props){
    return(
        <ExternalWrapper>
            {props.columnDataArray.map((elem:ColumnDataArrayType)=>{
                return(
                    <Column title={elem.title} id={elem.id} key={elem.id.toString()}/>
                )
            })}
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
`



export default ColumnList;