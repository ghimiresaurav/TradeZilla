import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import QandA from "../Components/QandA";
import { useEffect, useState } from "react";
import ProductReview from "../Components/ProductReview";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
`;

const ProductDetails = styled.div`
  background-color: #f2f2f2;
  padding: 30px 0;
`;

const Inner = styled.div`
  width: 85%;
  margin: auto;
  // padding: 50px;
  display: flex;
  margin-bottom: 10px;
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  // background-color: green;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  // background-color: red;
`;

const MainImage = styled.div`
  margin-bottom: 8px;
  // background-color: purple;
`;

const Image = styled.img`
  width: 100%;
  height: 65vh;
  object-fit: cover;
`;

const OtherImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  object-fit: cover;
  // background-color: yellow;
  height: 110px;
`;

const OtherImage = styled.img`
  width: 23%;
  height: 100%;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border: 2px solid #000000;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  // background-color: pink;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  // margin: 20px 0px;
`;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  transition: 0.5s ease all;

  &:hover {
    // background-color: #f8f4f4;
    background-color: #000000;
    color: #ffffff;
  }
`;

const ProductDetail = (props) => {
  document.title = "Product | TradeZilla";
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);

  const productID = window.location.pathname.split("product/")[1];

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/product/${productID}`);
    const response = await resp.json();
    if (response.success) {
      setProduct(response.product);
      setImages(response.product.images.split(", "));
    } else console.log("failed");
  }, []);

  const [count, setCount] = useState(1);

  function decrementCount() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function incrementCount() {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  const [imageIndex, setImageIndex] = useState(0);
  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <ProductDetails>
        <Inner>
          <ImgContainer>
            <Wrapper>
              <MainImage>
                <Image src={images[imageIndex]} />
              </MainImage>
              <OtherImages>
                <OtherImage onClick={() => setImageIndex(0)} src={images[0]} />
                <OtherImage onClick={() => setImageIndex(1)} src={images[1]} />
                <OtherImage onClick={() => setImageIndex(2)} src={images[2]} />
                <OtherImage onClick={() => setImageIndex(3)} src={images[3]} />
              </OtherImages>
            </Wrapper>
          </ImgContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc> {product.description} </Desc>
            <Price>Rs.&nbsp;{product.price}</Price>
            <AddContainer>
              <AmountContainer>
                <RemoveIcon onClick={decrementCount} />
                <Amount>{count}</Amount>
                <AddIcon onClick={incrementCount} />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Inner>
      </ProductDetails>
      <ProductReview
        loggedIn={props.loggedIn}
        reviews={{ rating: product.rating, reviews: product.reviews }}
      />
      <QandA loggedIn={props.loggedIn} />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
