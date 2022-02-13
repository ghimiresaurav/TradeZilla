import Announcement from '../Components/Announcement'
import TopBars from '../Components/TopBars';
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import NewsletterPopup from '../Components/NewsletterPopup';
import ReturnTop from '../Components/ReturnTop';
import { useState, useEffect } from 'react';


const Home = () => {

    const [timedPopup, setTimedPopup] = useState(false);

    //useEffect is neccessary otherwise every time we close the popup, it will reappear after 3 seconds
    useEffect(() => {
        setTimeout(() => {
            setTimedPopup(true);
        }, 3000);
    }, [])

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
