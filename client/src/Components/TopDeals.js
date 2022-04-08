import styled from "styled-components";
import { topDealsData } from '../datas/TopDealsData';
import TopDealsItem from "./TopDealsItem";
import { mobile, tab, vTab } from "../responsive";

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  position: relative;
`;

const Wrapper = styled.div`
  width: 90%;
  // background-color: green;
  padding: 20px 0px 50px 0;
  margin: auto;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  padding: 30px 0px;
  letter-spacing: 3px;
`;

const Deals = styled.div`
  display: flex;
  justify-content: space-between;

  ${vTab({ flexDirection: "column"})}
  ${tab({ flexDirection: "column"})}
  ${mobile({ flexDirection: "column"})}
`;

const TopDeals = () => {
  return (
    <Container>
      <Wrapper>
        <Title>TOP DEALS</Title>
        <Deals>
          {topDealsData.map((item)=>(
            <TopDealsItem item = {item} key = {item.id}></TopDealsItem>
          ))}
      </Deals>
      </Wrapper>
    </Container>
  )
}

export default TopDeals;