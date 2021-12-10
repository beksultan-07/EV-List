import React from 'react'
import styled  from 'styled-components';
import calc from '../../../assets/calculator.svg'
import { Flex } from '../simple_styles';


const ItemEndStyle = styled.span`
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

const ItemOptionTextStyle = styled.p`
    margin: 2px 0;
    font-family: Roboto;
    font-weight: normal;
    font-size: 12px;
    color: #133D65;
    text-transform: capitalize;

    &:nth-child(2){
        font-family: Roboto;
        font-weight: 500;
        font-size: 12px;
    }
`

const APRStyle = styled.p`
    margin: 2px 10px -4px 0;
    font-family: Roboto;
    font-weight: normal;
    font-size: 12px;
    color: #133D65;
    text-transform: capitalize;
`


const CalcIcon = styled.img``


type ItemOptionType = {
    name: string
    value: string | number
}

const ItemOption:React.FC<ItemOptionType> = (props) => {
    return (
        <ItemEndStyle>
            {props.name==='APR'?<APRStyle>{props.name}
            </APRStyle>:<ItemOptionTextStyle>{props.name}</ItemOptionTextStyle>}
            {/* <ItemOptionTextStyle>
            </ItemOptionTextStyle> */}
            <ItemOptionTextStyle>
                {props.name==='APR'?<>
                    <Flex align='center'><span>{props.value}</span><CalcIcon src={calc}/></Flex>
                </>:props.value}</ItemOptionTextStyle>
        </ItemEndStyle>
    )
}

export default ItemOption
