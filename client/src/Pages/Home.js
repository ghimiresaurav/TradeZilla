import Announcement from "../Components/Announcement";
import TopBars from "../Components/TopBars";
import BestSellers from "../Components/BestSellers";
import TopDeals from "../Components/TopDeals";
import Footer from "../Components/Footer";
import NewsletterPopup from "../Components/NewsletterPopup";
import ReturnTop from "../Components/ReturnTop";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile, tab, vTab } from "../responsive";
// import ProductList from "../Components/ProductList";
import Product from "../Components/Product";

const Container = styled.div`
  height: ${(props) => props.setHeight};
  overflow-y: ${(props) => props.setOverflow};
`;

const Wrapper = styled.div`
  position: absolute;
  top: 100px;

  ${mobile({ top: "50px" })}
`;

const ProductList = styled.div`
  padding: 20px 0px 50px 0;
  width: 90%;
  margin: auto;
  // background-color: red;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 3px;
  text-align: center;
  padding: 30px 0px;
`;

const ProductWrapper = styled.div`
  // width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  justify-content: center;

  // background-color: red;
`;

const Home = (props) => {
  document.title = "TradeZilla | Online Shopping";
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/products`);
    const response = await resp.json();
    if (response.success) setProducts(response.products);
    else console.log("failed");
  }, []);

  const [timedPopup, setTimedPopup] = useState(false);
  //useEffect is neccessary otherwise every time we close the popup, it will reappear after 10 seconds
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 10000);
  }, []);

  function checkPopup(argument) {
    if (timedPopup) {
      if (argument === "height") {
        return "100vh";
      } else {
        return "hidden";
      }
    } else {
      if (argument === "height") {
        return "";
      } else {
        return "none";
      }
    }
  }

  return (
    // <Container setHeight = {checkPopup("height")} setOverflow = {checkPopup("overflow")}>
    <Container>
      {/* <Announcement /> */}
      <TopBars loggedIn={props.loggedIn} homePage={true} />
      <Wrapper>
        <BestSellers />
        <TopDeals />
        {/* <ProductList /> */}
        <ProductList>
          <Title>PRODUCTS</Title>
          <ProductWrapper>
            {products.map((item) => (
              <Product id={item._id} item={item} key={item._id} />
            ))}
          </ProductWrapper>
        </ProductList>
        <Footer />
        {/* <NewsletterPopup trigger = {timedPopup} setTrigger = {setTimedPopup}/> */}
        <ReturnTop />
      </Wrapper>
    </Container>
  );
};

export default Home;
