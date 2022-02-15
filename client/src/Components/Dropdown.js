import { BestSellers, TodaysDeal, Fashion, Electronics, HomeandKitchen, Groceries, Books } from '../datas/MenuItems'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Dropdown.css';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Arrow = styled.div`
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    top: 4px;
    z-index: 0;
    transform: rotate(45deg);
    border: 2px solid #000000;
`;

const SubCategory = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000000;
    padding: 10px;
}`;

const linkStyle = {
    textDecoration: "none",
    color: "#000000"
};


function DropdownBestSellers() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {BestSellers.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}

function DropdownTodaysDeal() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {TodaysDeal.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}


function DropdownFashion() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {Fashion.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}


function DropdownElectronics() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {Electronics.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}


function DropdownHomeKitchen() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {HomeandKitchen.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}


function DropdownGroceries() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {Groceries.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}


function DropdownBooks() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {Books.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
                                <SubCategory>
                                    {item.title}
                                </SubCategory> 
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </Container>
    )
}


export {
    DropdownBestSellers,
    DropdownTodaysDeal,
    DropdownFashion,
    DropdownElectronics,
    DropdownHomeKitchen,
    DropdownGroceries,
    DropdownBooks
};