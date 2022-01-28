import React from "react";
import Announcement from "../Components/Announcement";
import NavBar from "../Components/NavBar";
import Slider from "../Components/Slider";
import Categories from "../Components/Categories";
import Products from "../Components/Products";
import NewsLetter from "../Components/NewsLetter";
import Footer from "../Components/Footer";

const Home = (props) => {
  return (
    <div>
      <Announcement />
      <NavBar loggedIn={props.loggedIn} />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
