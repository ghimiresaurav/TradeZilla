import { MenuItems } from '../datas/MenuItems'
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




function Dropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const linkStyle = {
        textDecoration: "none",
    };


    return (
        <Container>
            <Arrow/>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
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

export default Dropdown;