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
import './test.css';

const Test = styled.body`
    overflow-y: hidden;
`;

const Home = () => {

    document.title = 'TradeZilla | Online Shopping';

    const [timedPopup, setTimedPopup] = useState(false);

    //useEffect is neccessary otherwise every time we close the popup, it will reappear after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 3000);
    }, [])

    if(timedPopup){
        document.body.classList.add('active-modal');
    }
    else{
        document.body.classList.remove('active-modal');
    }

    return (
        <div>
            <Announcement />
            <TopBars/>
            <Slider />
            <Categories />
            <Products />
            <Footer />
            <NewsletterPopup trigger = {timedPopup} setTrigger = {setTimedPopup}/>
            <ReturnTop/>
        </div>
    );
};

export default Home;
