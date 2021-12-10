import React from 'react'
import styled  from 'styled-components';
import { Flex } from '../../simple_styles';


const IButtonStyle = styled.button`
    margin: 0 20px;
    padding: 13px 42px;
    background: #2261DA;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    align-self: flex-start;

`

const IButtonStyleD = styled.button`
    margin: 0 20px;
    padding: 13px 42px;
    background: #2261DA;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    opacity: .5;
    align-self: flex-start;
`

type btnType = {
    disabled: boolean
    text: string
}


const IButton:React.FC<btnType> = props => {
    if (props.disabled) {
        return <IButtonStyleD>{props.text}</IButtonStyleD>
    }
    return <IButtonStyle>{props.text}</IButtonStyle>
}

export default IButton
