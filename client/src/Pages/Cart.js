import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import getThumbnailFromImage from "../utils/getThumbnail";
import defaultImage from "../utils/defaultImage";
import "./RegisterForm.css";
import Payment from "./Payment";
import handleJWTExpiry from "../utils/handleJWTExpiry";
import Pill from "../Components/Pill";

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
  // background-color: red;
`;

const Product = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: #f2f2f2;
  // background-color: red;
  height: 260px;
  border-radius: 5px;
  margin: 5px 25px 5px 5px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

const Image = styled.img`
  height: 100%;
  width: minmax(0, 100%);
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

const ProductName = styled.span`
  font-size: 20px;
`;

const ProductId = styled.span``;

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
  height: 28vh;
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
  const [showPill, setShowPill] = useState("");
  const [pillText, setPillText] = useState("");
  const [success, setSuccess] = useState(false);
  const [version, setVersion] = useState(0);

  const displayPill = (success, message) => {
    setSuccess(success);
    setPillText(message);
    setTimeout(() => setShowPill("true"), 100);

    setTimeout(() => {
      setShowPill("");
      setPillText("");
    }, 3000);
    return;
  };

  document.title = "Cart | Tradezilla";

  const [quantities, setQuantities] = useState({});
  const [Cart, setCart] = useState([]);
  const [location, setLocation] = useState("---------");

  const goToPayment = () => {
    // Check if the user has selected at least one item from cart
    // Only allow user to proceed to payment menu if they have selected at least one item
    if (!Cart.filter((item) => item.selection).length) return;

    setBtnPopup(true);
    // Get the location of the user
    // The function takes two callbacks,
    // One to call in case of success and the other in case of error
    navigator.geolocation.getCurrentPosition(
      // This function runs if the user agrees to give access to their location
      (position) => {
        const coordinates = position.coords;
        setLocation(`${coordinates.latitude} ${coordinates.longitude}`);
      },
      // This function runs in case of error
      (err) => console.error(`ERROR - ${err.code}: ${err.message}`)
    );
  };

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
      handleJWTExpiry(response);
      if (response.success) {
        setCart(response.cart);
        // Create an item to store quantities
        let quan = {};
        // Add quantities of each item, with the id as key and quantity as value
        response.cart.map((cartItem) => {
          quan = { ...quan, [cartItem._id]: cartItem.quantity };
        });
        setQuantities(quan);
      } else console.log("failed");
    })();
  }, [version]);

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
    handleJWTExpiry(response);
    // If remove from cart is successful
    // Update the number of items on cart stored in local storage
    if (response.success)
      localStorage.setItem(
        "numberOfItemsOnCart",
        parseInt(localStorage.getItem("numberOfItemsOnCart")) - 1
      );

    console.log(response);
    if (response.success) setVersion(version + 1);
    return displayPill(response.success, response.message);
  };

  const updateCountOnCart = (id) => {
    const itemToUpdate = Cart.find((item) => item._id == id);
    itemToUpdate.quantity = quantities[id];
  };

  function decrementCount(id) {
    // Decrement the quantity from the quantities object
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: --quantities[id] });
      // Update the quantities of items on cart
      updateCountOnCart(id);
      // Update Bill
      updateBill();
    }
  }

  function incrementCount(id) {
    // Increment the quantity from the quantities object
    if (quantities[id] < 10) {
      setQuantities({ ...quantities, [id]: ++quantities[id] });
      // Update the quantities of items on cart
      updateCountOnCart(id);
      // Update Bill
      updateBill();
    }
  }

  const [btnPopup, setBtnPopup] = useState(false);

  const [SubTotalToDisplay, setSubTotalToDisplay] = useState(0);

  const updateBill = () => {
    const selectedItems = Cart.filter((item) => item.selection);
    let subTotal = 0;
    selectedItems.forEach((item) => {
      subTotal += quantities[item._id] * item.price;
    });
    setSubTotalToDisplay(subTotal);
  };

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <CartContent>
        <Top>
          <Link to={"/"}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
        </Top>
        <Bottom>
          <Info>
            {Cart.map((cartItem) => {
              return (
                <Product key={cartItem._id}>
                  <ProductDetail>
                    <Link to={`/product/${cartItem.item_id}`}>
                      <ImageContainer>
                        <Image
                          // If the correct image has not already loaded, show default image
                          // The correct image will appear once the image loads
                          src={
                            cartItem.image
                              ? getThumbnailFromImage(cartItem.image)
                              : defaultImage
                          }
                        />
                      </ImageContainer>
                    </Link>
                    <Details>
                      <ProductName>
                        <b>Product: </b>
                        <br /> {cartItem.name}
                      </ProductName>
                      {/* <ProductId>
                        <b>ID: </b>
                        {cartItem._id}
                      </ProductId> */}
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <RemoveIcon
                        onClick={() => decrementCount(cartItem._id)}
                      ></RemoveIcon>
                      <ProductAmount>{quantities[cartItem._id]}</ProductAmount>
                      <AddIcon onClick={() => incrementCount(cartItem._id)} />
                    </ProductAmountContainer>
                    <ProductPrice>Rs. {cartItem.price}</ProductPrice>
                  </PriceDetail>

                  <DiscardArea>
                    <DiscardButton
                      onClick={() => removeItemFromCart(cartItem._id)}
                    >
                      <DeleteIcon />
                    </DiscardButton>
                    <PopupHover>Remove</PopupHover>
                  </DiscardArea>

                  <DiscardArea>
                    <input
                      type="checkbox"
                      id="select"
                      className="checkbox"
                      onChange={() => {
                        cartItem.selection = !cartItem.selection;
                        updateBill();
                      }}
                    />
                  </DiscardArea>
                </Product>
              );
            })}
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs. {SubTotalToDisplay}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={goToPayment}>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </CartContent>
      <Footer />
      <Payment
        trigger={btnPopup}
        setTrigger={setBtnPopup}
        selectedItems={Cart.filter((item) => item.selection)}
        location={location}
        subTotal={SubTotalToDisplay}
      />
      <Pill display={showPill} text={pillText} success={success} />
    </Container>
  );
};

export default Cart;
