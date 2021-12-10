import React from 'react'
import styled  from 'styled-components';
import ItemDropDown from './item_components/dropDown/ItemDropDown';
import ItemTop from './item_components/ItemTop';

const ItemStyle = styled.li`
    padding: 19px 12px;
    border-bottom: 1px solid #F9F9F9;

`

type InfoArrayList = {
    info: {
        name: string[] 
        img: string[]
        percent: string
        earned: number
        APR: string
        liqudity: string
        multiplier: string
    }
    
}


const Item:React.FC<InfoArrayList> = props => {
    const [dropwDown, setDropwDown] = React.useState<boolean>(false)

    const dropDownHandler = () => {
        setDropwDown(val => !val)
    }

    return (
        <ItemStyle>
            <ItemTop info={props.info} clickDropDown={() => dropDownHandler()}/>
            <ItemDropDown earned={props.info.earned} show={dropwDown}/>
        </ItemStyle>
    )
}

export default Item
