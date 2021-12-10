import React from 'react'
import styled  from 'styled-components';
import { Flex } from '../../simple_styles';
import Earned from './Earned';
import IButton from './IButton';
import Links from './Links';


const ItemEndStyle = styled.div`
    padding: 10px 0;
`

type EarnedType = {
    earned: number | string
    show: boolean
}


const ItemDropDown:React.FC<EarnedType> = props => {
    if (!props.show) {
        return<></>
    }
    
    return (
        <ItemEndStyle>
            <Flex>
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
