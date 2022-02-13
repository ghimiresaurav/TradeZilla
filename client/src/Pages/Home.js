import Announcement from '../Components/Announcement'
import TopBars from '../Components/TopBars';
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from '../Components/Products'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'
import ReturnTop from '../Components/ReturnTop';

const Home = () => {

    return (
        <div>
            <Announcement/>
            <TopBars/>
            <Slider/>
            <Categories/>
            <Products/>
            <NewsLetter/>
            <Footer/>
            <ReturnTop/>
        </div>
    )
}

export default Home
