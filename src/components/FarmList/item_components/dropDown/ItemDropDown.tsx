import React from 'react'
import styled  from 'styled-components';
import { Flex } from '../../simple_styles';
import Earned from './Earned';
import IButton from './IButton';
import Links from './Links';

type ShowProps = {
    show?: boolean
}

const ItemEndStyle = styled.div<ShowProps>`
    transition: .3s;
    padding: ${props => props.show?'10px 0':'0px'};
    visibility: ${props => props.show?'visible':'hidden'};
    opacity: ${props => props.show?'1':'0'};
    height: ${props => props.show?'auto':'0px'}; 
`

type EarnedType = {
    earned: number | string
    show: boolean
}


const ItemDropDown:React.FC<EarnedType> = props => {
    return (
        <ItemEndStyle show={props.show}>
            <Flex align='center'>
                <Links/>
                <Earned earned={props.earned}/>
                <Flex>
                    <IButton disabled={true} text='Harvest'/>
                    <IButton disabled={false} text='Start Farming'/>
                </Flex>
            </Flex>
        </ItemEndStyle>
    )
}

export default ItemDropDown
