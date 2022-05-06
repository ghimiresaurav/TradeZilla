import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./RegisterForm.css";
import { useState } from "react";
import AccountInfo from "../Components/UserAccount/AccountInfo";
import SellOverview from "../Components/UserAccount/SellOverview";
import OrderHistory from "../Components/UserAccount/OrderHistory";
import MyProducts from "../Components/UserAccount/MyProducts";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  // position: relative;
`;

const WrapperLeft = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  border-right: 1px solid black;
`;

const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: yellow; */
`;

const linkStyle = {
  textDecoration: "none",
};

const LinkItem = styled.div`
  padding: 20px;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #c2d6d6;
  }
`;

const WrapperRight = styled.div`
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  flex: 3;
  /* background-color: green; */
`;

const UserAccount = (props) => {
  document.title = "Profile | TradeZilla";

  const [menuState, setMenuState] = useState("accountInfo");
  // console.log("hi", menuState);

  const showRightContent = () => {
    if (menuState === "accountInfo") {
      return <AccountInfo />;
    } else if (menuState === "orderHistory") {
      return <OrderHistory />;
    } else if (menuState === "sellOverview") {
      return <SellOverview />;
    } else if (menuState === "myProducts") {
      return <MyProducts />;
    }
  };

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <Wrapper>
        <WrapperLeft>
          <LeftDiv>
            <LinkItem onClick={() => setMenuState("accountInfo")}>
              Account Info
            </LinkItem>

            <LinkItem onClick={() => setMenuState("orderHistory")}>
              Order History
            </LinkItem>

            <LinkItem onClick={() => setMenuState("myProducts")}>
              My Products
            </LinkItem>

            <Link to="/sellontradezilla" style={linkStyle}>
              <LinkItem>Sell on TradeZilla</LinkItem>
            </Link>

            <LinkItem onClick={() => setMenuState("sellOverview")}>
              Sell Overview
            </LinkItem>
          </LeftDiv>
        </WrapperLeft>

        <WrapperRight>{showRightContent()}</WrapperRight>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default UserAccount;
