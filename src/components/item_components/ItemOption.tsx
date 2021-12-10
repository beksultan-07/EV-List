import React from 'react'
import styled  from 'styled-components';


const ItemEndStyle = styled.span`
    margin: 0 20px;
`

const ItemOptionTextStyle = styled.p`
    font-family: Roboto;
    font-weight: normal;
    font-size: 12px;
    color: #133D65;

    &:nth-child(2){
        font-family: Roboto;
        font-weight: 500;
        font-size: 12px;
    }
`

type ItemOptionType = {
    name: string
    value: string | number
}

const ItemOption:React.FC<ItemOptionType> = (props) => {
    React.useEffect(() => {

    }, [])
    return (
        <ItemEndStyle>
            <ItemOptionTextStyle>{props.name}</ItemOptionTextStyle>
            <ItemOptionTextStyle>{props.value}</ItemOptionTextStyle>
        </ItemEndStyle>
    )
}

export default ItemOption
