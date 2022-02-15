import styled from 'styled-components';
import {mobile} from '../responsive';
import CloseIcon from '@mui/icons-material/Close';
import {DropdownBestSellers, DropdownTodaysDeal, DropdownFashion,  DropdownElectronics, DropdownHomeKitchen, DropdownGroceries, DropdownBooks} from './Dropdown';
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


    //Best Sellers Dropdown
    const [dropdownBestSellers, setDropdownBestSellers] = useState(false);

    const showBestSellers = () => {
        if(window.innerWidth < 960){
            setDropdownBestSellers(false);
        }
        else{
            setDropdownBestSellers(true);

        }
    };

    const hideBestSellers = () => {
        setDropdownBestSellers(false);
    };


    //Today's Deal Dropdown
    const [dropdownTodaysDeal, setDropdownTodaysDeal] = useState(false);

    const showTodaysDeal = () => {
        if(window.innerWidth < 960){
            setDropdownTodaysDeal(false);
        }
        else{
            setDropdownTodaysDeal(true);

        }
    };

    const hideTodaysDeal = () => {
        setDropdownTodaysDeal(false);
    };


    //Fashion Dropdown
    const [dropdownFashion, setDropdownFashion] = useState(false);

    const showFashion = () => {
        if(window.innerWidth < 960){
            setDropdownFashion(false);
        }
        else{
            setDropdownFashion(true);
        }
    };

    const hideFashion = () => {
        setDropdownFashion(false);
    };


    //Electronics Dropdown
    const [dropdownElectronics, setDropdownElectronics] = useState(false);

    const showElectronics = () => {
        if(window.innerWidth < 960){
            setDropdownElectronics(false);
        }
        else{
            setDropdownElectronics(true);
        }
    };

    const hideElectronics = () => {
        setDropdownElectronics(false);
    };


    //Home and Kitchen Dropdown
    const [dropdownHomeKitchen, setDropdownHomeKitchen] = useState(false);

    const showHomeKitchen = () => {
        if(window.innerWidth < 960){
            setDropdownHomeKitchen(false);
        }
        else{
            setDropdownHomeKitchen(true);
        }
    };

    const hideHomeKitchen = () => {
        setDropdownHomeKitchen(false);
    };

    //Groceries Dropdown
    const [dropdownGroceries, setDropdownGroceries] = useState(false);

    const showGroceries = () => {
        if(window.innerWidth < 960){
            setDropdownGroceries(false);
        }
        else{
            setDropdownGroceries(true);
        }
    };

    const hideGroceries= () => {
        setDropdownGroceries(false);
    };

    //Books Dropdown
    const [dropdownBooks, setDropdownBooks] = useState(false);

    const showBooks = () => {
        if(window.innerWidth < 960){
            setDropdownBooks(false);
        }
        else{
            setDropdownBooks(true);
        }
    };

    const hideBooks= () => {
        setDropdownBooks(false);
    };


    return(
        <Container isOpen = {isOpen}>
            <CloseArea>
                <CloseButton onClick = {toggle}>
                    <CloseIcon/>
                </CloseButton>
            </CloseArea>
            <Wrapper>
                 <MenuItem onMouseEnter={showBestSellers} onMouseLeave={hideBestSellers}>
                        Best Sellers
                        {dropdownBestSellers && <DropdownBestSellers/>}
                </MenuItem>
                <MenuItem onMouseEnter={showTodaysDeal} onMouseLeave={hideTodaysDeal}>
                    Today's Deal
                    {dropdownTodaysDeal && <DropdownTodaysDeal/>}
                </MenuItem>
                <MenuItem onMouseEnter={showFashion} onMouseLeave={hideFashion}>
                    Fashion
                    {dropdownFashion && <DropdownFashion/>}
                </MenuItem>
                <MenuItem onMouseEnter={showElectronics} onMouseLeave={hideElectronics}>
                    Electronics
                    {dropdownElectronics && <DropdownElectronics/>}
                </MenuItem>
                <MenuItem onMouseEnter={showHomeKitchen} onMouseLeave={hideHomeKitchen}>
                    Home and Kitchen
                    {dropdownHomeKitchen && <DropdownHomeKitchen/>}
                </MenuItem>
                <MenuItem onMouseEnter={showGroceries} onMouseLeave={hideGroceries}>
                    Groceries
                    {dropdownGroceries && <DropdownGroceries/>}
                </MenuItem>
                <MenuItem onMouseEnter={showBooks} onMouseLeave={hideBooks}>
                    Books
                    {dropdownBooks && <DropdownBooks/>}
                </MenuItem>
            </Wrapper>
        </Container>
    )
}

export default MenuBar
