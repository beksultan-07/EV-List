import React from 'react'
import styled  from 'styled-components';


const EarnedStyle = styled.div`
    margin-left: auto;
`

const EarnedTextStyle = styled.p`
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    color: #133D65;

    &:nth-child(2){
        font-family: Roboto;
        font-weight: 500;
        font-size: 12px;
    }
`

const Link = styled.a`
    margin: 0;
    font-family: Roboto;
    font-weight: 500;
    font-size: 12px;
    color: #2261DA;
    text-decoration: none;
`

type EarnedType = {
    earned: number | string
}


const Earned:React.FC<EarnedType> = props => {
    return (
        <EarnedStyle>
            <EarnedTextStyle><Link href="#">ETH</Link> EARNED</EarnedTextStyle>
            <EarnedTextStyle>{props.earned}</EarnedTextStyle>
        </EarnedStyle>
    )
}

export default Earned
