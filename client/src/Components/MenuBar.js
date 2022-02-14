import styled from 'styled-components';
import {mobile} from '../responsive';
import CloseIcon from '@mui/icons-material/Close';
import Dropdown from './Dropdown';
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    background-color: #ffffff;
    z-index: 100;
    left: ${({isOpen}) => (isOpen ? '0px' : '-300px')};
    transition: 0.3s ease-in-out;
    border-bottom: 2px solid #000000;

    ${mobile({
        width: "300px",
        height: "100vh",
        position: "fixed",
        top: "0",
        display: "block"
    })}
`;

const CloseArea = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 15px;
`;

const CloseButton = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: 0.5s;
    color: #000000;
    cursor: pointer;

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }

    ${mobile({display: "flex"})}
`;

const Wrapper = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 0;

    ${mobile({display: "block", width: "80%"})}
`;

const MenuItem = styled.a`
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    padding: 8px 15px;
    cursor: pointer;

    &:hover{
        background-color: lightgray;
        border-bottom: 2px solid #000000;
    }

    ${mobile({borderBottom: "1px solid gray"})}
`;


const MenuBar = ({isOpen, toggle}) => {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(false);
        }
    };

    return(
        <Container isOpen = {isOpen}>
            <CloseArea>
                <CloseButton onClick = {toggle}>
                    <CloseIcon/>
                </CloseButton>
            </CloseArea>
            <Wrapper>
                <MenuItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        Best Sellers
                        {dropdown && <Dropdown/>}
                </MenuItem>
                <MenuItem>
                    Today's Deal
                </MenuItem>
                <MenuItem>Fashion</MenuItem>
                <MenuItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    Electronics
                    {dropdown && <Dropdown/>}
                </MenuItem>
                <MenuItem>Home and Kitchen</MenuItem>
                <MenuItem>Groceries</MenuItem>
                <MenuItem>Books</MenuItem>
            </Wrapper>
        </Container>
    )
}

export default MenuBar
