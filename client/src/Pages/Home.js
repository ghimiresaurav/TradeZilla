import Announcement from '../Components/Announcement'
import TopBars from '../Components/TopBars';
import BestSellers from '../Components/BestSellers';
import TopDeals from '../Components/TopDeals'
import Footer from '../Components/Footer'
import NewsletterPopup from '../Components/NewsletterPopup';
import ReturnTop from '../Components/ReturnTop';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile, tab, vTab } from "../responsive";
import ProductList from '../Components/ProductList';


const Container = styled.div`
    height: ${(props) => props.setHeight};
    overflow-y: ${(props) => props.setOverflow};
`;

const Wrapper = styled.div`
    position: absolute;
    top: 100px;

    ${mobile({ top: "50px" })}
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
        // <Container setHeight = {checkPopup("height")} setOverflow = {checkPopup("overflow")}>
        <Container>
            {/* <Announcement /> */}
            <TopBars loggedIn = {props.loggedIn} homePage = {true}/>
            <Wrapper>
                <BestSellers/>
                <TopDeals/>
                <ProductList/>
                <Footer />
                {/* <NewsletterPopup trigger = {timedPopup} setTrigger = {setTimedPopup}/> */}
                <ReturnTop/>
            </Wrapper>
        </Container>
    );
};

export default Home;
