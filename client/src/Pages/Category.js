import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import categories from "../datas/MenuItems";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useState, useEffect } from "react";
import { MensWear } from "../datas/Products/Fashion";
import Product from "../Components/Product";
import { Link, useParams } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 15px;
  text-align: center;
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: 300;
`;

const Box = styled.div`
  position: relative;
  height: 450px;
  background-color: #f2f2f2;
  width: 90%;
  margin: 30px auto;
  border-radius: 25px;
`;

const SubCategoryTitle = styled.h2`
  font-size: 30px;
  font-weight: 400;
  margin: 20px 0 0 20px;
`;

const Items = styled.div`
  position: relative;
  height: 80%;
  width: 95%;
  margin: auto;
  // background-color: red;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "5px"};
  right: ${(props) => props.direction === "right" && "5px"};
  margin: auto;
  cursor: pointer;
  // opacity: 0.5;
  z-index: 2;
`;

const Products = styled.div`
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -25}vw);
  transition: all 1.5s ease;
`;

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
};

const Category = (props) => {
  const { category } = useParams();
  console.log("Category:", category);
  // The params from the url are all lowercase
  // To access the subcats, the category from the url has to be capitalized
  // For eg, "fashion" has to be changed to "Fashion", "electronics" has to be changed to "Electronics"
  const capitalizedCategory = category[0].toUpperCase() + category.substring(1);
  document.title = capitalizedCategory + " | TradeZilla";

  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/products/${category}`);
    const response = await resp.json();
    if (response.success) setProducts(response.products);
    else console.log("failed");
  }, category);

  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <ContentArea>
        <Title>{capitalizedCategory}</Title>
        {categories[capitalizedCategory].map((item) => {
          return (
            <Box key = {item.id}>
              <Link to={item.path} style={linkStyle}>
                <SubCategoryTitle>{item.title}</SubCategoryTitle>
              </Link>
              <Items>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                  <ArrowLeftOutlinedIcon />
                </Arrow>
                <Products slideIndex={slideIndex}>
                  {products.map((item) => (
                    <Product item={item} key={item.id} />
                  ))}
                </Products>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                  <ArrowRightOutlinedIcon />
                </Arrow>
              </Items>
            </Box>
          );
        })}
      </ContentArea>
      <Footer />
    </Container>
  );
};

export default Category;
