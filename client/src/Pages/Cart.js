import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getThumbnailFromImage from "../utils/getThumbnail";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;
  /* background-color: yellow; */
`;

const CartContent = styled.div`
  // padding-top: 80px;
  margin: 30px 50px;
  // background-color: yellow;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #f2f2f2;
  // background-color: red;

  border-radius: 5px;
  margin: 5px 5px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const DiscardArea = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupHover = styled.span`
  position: absolute;
  // margin-top: 5px;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #ffffff;
  // width: 50px;
  // height: 15px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  visibility: hidden;
  // visibility: visible;
  bottom: -30px;
`;

const DiscardButton = styled.div`
  position: relative;
  width: 30px;
  height: 40px;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  &:hover ~ ${PopupHover} {
    visibility: visible;
  }
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.type === "total" && "24px"};
  font-weight: ${(props) => props.type === "total" && "500"};
`;

const SummaryItemText = styled.div``;

const SummaryItemPrice = styled.div``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

const Cart = (props) => {
  document.title = "Cart | Tradezilla";

  const [count, setCount] = useState(1);
  const [Cart, setCart] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch("http://localhost:5000/s/v/get-cart-items", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "token"
          )} ${localStorage.getItem("userId")}`,
        },
      });

      const response = await resp.json();
      if (response.success) setCart(response.cart);
      else console.log("failed");
    })();
  }, []);

  const removeItemFromCart = async (id) => {
    const resp = await fetch(
      `http://localhost:5000/s/v/remove-from-cart/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "token"
          )} ${localStorage.getItem("userId")}`,
        },
      }
    );
    const response = await resp.json();
    console.log(response);
  };

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
  const defaultImage =
    "https://res.cloudinary.com/tradezilla/image/upload/v1650689549/default-img.png";

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <CartContent>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {Cart.map((cartItem) => {
              return (
                <Product key={cartItem._id}>
                  <ProductDetail>
                    <Image
                      // If the correct image has not already loaded, show default image
                      // The correct image will appear once the image loads
                      src={
                        cartItem.image
                          ? getThumbnailFromImage(cartItem.image)
                          : defaultImage
                      }
                    />
                    <Details>
                      <ProductName>
                        <b>Product: </b> {cartItem.name}
                      </ProductName>
                      <ProductId>
                        <b>ID: </b>
                        {cartItem._id}
                      </ProductId>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <RemoveIcon onClick={decrementCount}></RemoveIcon>
                      <ProductAmount>{count}</ProductAmount>
                      <AddIcon onClick={incrementCount} />
                    </ProductAmountContainer>
                    <ProductPrice>Rs. {cartItem.price}</ProductPrice>
                  </PriceDetail>
                  <DiscardArea>
                    <DiscardButton
                      onClick={() => removeItemFromCart(cartItem._id)}
                    >
                      <DeleteIcon />
                    </DiscardButton>
                    <PopupHover>Discard</PopupHover>
                  </DiscardArea>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>SubTotal</SummaryItemText>
              <SummaryItemPrice>Rs. 2700</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs. 200</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs. 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. 2800</SummaryItemPrice>
            </SummaryItem>
            <Link to={"/payment"}>
              <Button>CHECKOUT NOW</Button>
            </Link>
          </Summary>
        </Bottom>
      </CartContent>
      <Footer />
    </Container>
  );
};

export default Cart;
