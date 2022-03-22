import Announcement from '../Components/Announcement'
import TopBars from '../Components/TopBars';
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import Footer from '../Components/Footer'
import NewsletterPopup from '../Components/NewsletterPopup';
import ReturnTop from '../Components/ReturnTop';
import { useState, useEffect } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    height: ${(props) => props.setHeight};
    overflow-y: ${(props) => props.setOverflow};
`;


const Home = (props) => {

    document.title = 'TradeZilla | Online Shopping';

    const [timedPopup, setTimedPopup] = useState(false);

    //useEffect is neccessary otherwise every time we close the popup, it will reappear after 10 seconds
    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 10000);
    }, [])

    function checkPopup(argument){
        if(timedPopup){
            if (argument === "height"){
                return "100vh";
            }
            else{
                return "hidden";
            }    
        }
        else{
            if (argument === "height"){
                return "";
            }
            else{
                return "none";
            }
        }
    }


    // const height = $().

    return (
        <Container setHeight = {checkPopup("height")} setOverflow = {checkPopup("overflow")}>
            <Announcement />
            <TopBars loggedIn = {props.loggedIn}/>
            <Slider />
            <Categories />
            <Products />
            <Footer />
            <NewsletterPopup trigger = {timedPopup} setTrigger = {setTimedPopup}/>
            <ReturnTop/>
        </Container>
    );
};

export default Home;
