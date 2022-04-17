import TopBars from "../Components/TopBars";
// import Products from '../Components/Products';
import Footer from "../Components/Footer";
import styled from "styled-components";
// import { Fashion, MensWear } from "../datas/Products/Fashion";
import Product from "../Components/Product";
import { useState } from "react";

const Container = styled.div`
  position: absolute;
  top: 100px;
`;

const Wrapper = styled.div`
  padding: 30px 0px 50px 0;
  width: 90%;
  margin: auto;
  // background-color: red;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductContainer = styled.div`
  width: 100%;
  background-color: green;
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

const ProductList = (props) => {
  const [MensWear, setMensWear] = useState([]);
  document.title = props.title + " | TradeZilla";

  (async () => {
    const resp = await fetch(
      `http://localhost:5000/products${window.location.pathname}`
    );
    const response = await resp.json();
    setMensWear(response.products);
  })();

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <Wrapper>
        <Title>{props.title}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Color
              </Option>
              <Option>White</Option>
              <Option>Black</Option>
              <Option>Red</Option>
              <Option>Blue</Option>
              <Option>Yellow</Option>
              <Option>Green</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Size
              </Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (Lowest First)</Option>
              <Option>Price (Highest First)</Option>
            </Select>
          </Filter>
        </FilterContainer>
        {/* <Products/> */}
        {/* <ProductContainer> */}
        <ProductWrapper>
          {MensWear.map((item) => (
            <Product item={item} key={item._id} />
          ))}
        </ProductWrapper>
        {/* </ProductContainer> */}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductList;
