import styled, { css }  from 'styled-components';

type DropDownProps = {
    dropdown?: boolean
}


export const DropDownIcon = styled.img<DropDownProps>`
    transition: .5s;
    transform: ${props => props.dropdown?'rotate(0deg)':'rotate(180deg)'};    
`

