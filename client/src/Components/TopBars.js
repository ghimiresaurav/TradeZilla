import styled from "styled-components";
import NavBar from "./NavBar";
import MenuBar from "./MenuBar";
import {useState, useEffect} from 'react';


const Container = styled.div`
    width: 100%;
    position: fixed;
    // position: ${({scrollNav}) => (scrollNav ? 'fixed': 'relative')};
    // position: ${props => (props.homePage ? 'relative' : 'fixed')};
    top: 0;
    z-index: 200;
    transition: 0.5s ease;
`;

const TopBars = (props) => {

    const [scrollNav, setScrollNav] = useState(false);

    // console.log("HomePage??", props.homePage)

    const changeNav = () => {
        if(window.scrollY > 25){
            setScrollNav(true);
        }
        else{
           setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
        console.log("Check ........." + isOpen);
    };

    return (
        <Container scrollNav = {scrollNav} homePage = {props.homePage}>
            <NavBar loggedIn={props.loggedIn} toggle = {toggle} badgeContent = {props.items}/>
            <MenuBar isOpen = {isOpen} toggle = {toggle}/>
        </Container>
    )
};

export default TopBars;