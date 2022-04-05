import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import QandA from "../Components/QandA";
import { useState } from "react";
import ProductReview from "../Components/ProductReview";

const Container = styled.div`
  width: 100%;
`;

const ProductDetails = styled.div`
  width: 90%;
  margin: 20px auto;
  // padding: 50px;
  display: flex;
  // background-color: red;
  margin-bottom: 10px;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
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
`;

const FilterContainer = styled.div`
  width: 40%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 500;
  // transition: 0.5s ease all;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = (props) => {

  document.title = 'Product | TradeZilla';

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

  return (
    <Container>
      <TopBars loggedIn = {props.loggedIn}/>
      <ProductDetails>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Desc>
          <Price>Rs. 1000</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon onClick={decrementCount} />
              <Amount>{count}</Amount>
              <AddIcon onClick={incrementCount} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </ProductDetails>
      <ProductReview/>
      <QandA/>
      <Footer />
    </Container>
  );
};

export default Product;
