import React from 'react';
import TopBars from '../Components/TopBars';
import Announcement from '../Components/Announcement';
import Products from '../Components/Products';
import Footer from '../Components/Footer';
import styled from 'styled-components';


const Container = styled.div`
  position: absolute;
  top: 85px;
`;

const Wrapper = styled.div`
  padding-top: 50px;
  width: 90%;
  margin: auto;
`;


const Title = styled.h1`
  
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

const Option = styled.option`

`;


 const ProductList = () => {
   return (
    <Container>
      <TopBars/>
      <Wrapper>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Black</Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Green</Option>
              </Select>
              <Select>
                <Option disabled selected>Size</Option>
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
        <Products/>
      </Wrapper>  
      <Footer/>
   </Container>
   )
 }
 
 export default ProductList
 