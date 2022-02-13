import { MenuItems } from '../datas/MenuItems'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key = {index}>
                            <Link className = {item.cName} to = {item.path} onClick = {() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Dropdown;