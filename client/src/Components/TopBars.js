import styled from "styled-components";
import NavBar from "./NavBar";
import MenuBar from "./MenuBar";
import {useState, useEffect} from 'react';


const Container = styled.div`
    width: 100%;
    position: ${({scrollNav}) => (scrollNav ? 'fixed': 'relative')};
    top: 0;
    z-index: 200;
    transition: 0.5s ease;
`;

<<<<<<< HEAD
const TopBars = () => {
=======
const TopBars = (props) => {

    console.log(props);
>>>>>>> 63eea585e4728ac3010bef4ac3766df28850050a

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 25){
            setScrollNav(true)
        }
        else{
           setScrollNav(false) 
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <Container scrollNav = {scrollNav}>
<<<<<<< HEAD
            <NavBar toggle = {toggle}/>
=======
            <NavBar loggedIn={props.loggedIn} toggle = {toggle} />
>>>>>>> 63eea585e4728ac3010bef4ac3766df28850050a
            <MenuBar isOpen = {isOpen} toggle = {toggle}/>
        </Container>
    )
};

export default TopBars;
