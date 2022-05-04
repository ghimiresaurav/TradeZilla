import styled from "styled-components";
import "./RegisterForm.css";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  z-index: 1000;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: auto;
  width: 75%;
  height: 80vh;
  z-index: 10000;
  min-width: 500px;
  /* background-color: red; */
`;

const WrapperDiv = styled.div`
  display: flex;
  width: 100%;
  //   background-color: green;
  /* display: flex;
	align-items: center;
	flex-direction: column; */
  /* margin: 80px 0; */
`;

const InfoSection = styled.div`
  width: 80%;
  min-width: 500 vw;
  height: 70vh;
  margin: 30px auto;
  border: 1px solid rgb(180, 221, 255);
  background-color: aliceblue;
  border-radius: 20px;
`;
const SectionHeader = styled.div`
  width: 82%;
  margin: 10px auto;
  display: flex;
  column-gap: 5%;
`;
const StartSection = styled.div`
  font-size: 24px;
`;

const PayMethod = styled.img`
  width: 25%;
  pointer-events: none;
`;

const SectionBody = styled.form`
  width: 90%;
  /* padding: 10px; */
  margin: auto;
  /* background-color: #c2d6d6; */
  display: flex;
`;

const SectionForm = styled.div`
  display: flex;
  flex: 3;
  /* background-color: green; */
`;

const SectionOrder = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  /* background-color: red; */
`;

const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 10px;
  /* height: 50vh; */
  /* background-color: yellow; */
  box-shadow: 5px 10px 15px gray;
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

const PayForm = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  width: 85%;
`;

const First = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 20px 0;
  //   padding: 100px;
`;
const Second = styled.div`
  //   padding: 5px 0 0 0;
  padding: 0 0 20px 0;
`;
const Third = styled.div`
  padding: 0 0 10px 0;
`;
const Fourth = styled.div`
  padding: 20px 0;
`;

const Number = styled.input`
  font-size: 18px;
  width: 60%;
  border-radius: 3%;
  padding: 10px;
  border: 1px solid lightgray;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;

  &:focus {
    outline: 2px solid #00ccff;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2%;
`;

const Code = styled(Number)`
  width: 20%;
`;

const Name = styled(Number)`
  width: 72%;
`;

const SelectOption = styled.select`
  font-size: 17px;
  width: 80%;
  border-radius: 3%;
  padding: 7px;
  border: none;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  outline: none;

  &:focus {
    outline: 2px solid #00ccff;
  }
`;

const DateField = styled.div`
  display: flex;
  flex-direction: row;
`;

const Month = styled(Number)`
  width: 17%;
`;

const Year = styled(Number)`
  width: 20%;
`;

const CloseArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.5s;
  color: #000000;
  cursor: pointer;
  background-color: #ffffff;
  outline-style: solid;
  outline-color: #d9d9d9;
  outline-width: thin;
  z-index: 9000000;

  &:hover {
    background-color: #000000;
    color: #ffffff;
    outline: none;
  }
`;

const OuterArea = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
`;

/* var inputBox = document.getElementById("cardName");

var invalidChars = [
  "-",
  "+",
  "e",
];

inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
}); */

const Payment = (props) => {
  /* var input = document.getElementById("cardName");

          input.onkeydown = function () {
              if (input.value.length > 0) {

                  if (input.value.length % 4 === 0) {
                      input.value += "    ";
                  }
              }
          } */

  const checkOut = async () => {
    const resp = await fetch("http://localhost:5000/s/v/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
      body: JSON.stringify({
        items: props.selectedItems,
        paid: true,
        location: props.location,
      }),
    });
    const response = await resp.json();
    console.log(response);
  };

  const [cardInfo, setCardInfo] = useState({
    number: "",
    csv: "",
    name: "",
    expiryYear: "",
    expiryMonth: "",
  });

  const updateCardInfo = (event) => {
    setCardInfo({ ...cardInfo, [event.target.name]: event.target.value });
  };

  const verifyCardInformation = async (e) => {
    e.preventDefault();

    // Extract card information for verification
    const { number, csv, name, expiryYear, expiryMonth } = cardInfo;

    // Check whether the card number is valid
    // A valid card number is 16 digit long
    if (!number.length === 16) return;

    // Check whether the csv is valid
    // A valid csv is 3 digit long on VISA®, MasterCard® and Discover® branded credit and debit cards
    // 4 digit long on American Express® branded credit or debit card
    if (csv.length < 3 || csv.length > 4) return;

    // Check if the name seems correct
    const nameValidatorRegex =
      /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
    if (!nameValidatorRegex.test(name)) return;

    // Check if the card has already expired or not
    const now = new Date();
    const [expMonth, expYear] = [parseInt(expiryMonth), parseInt(expiryYear)];

    // Check if the year has already passed or not
    // Also check if the year is more than 4 years away
    // Because the validity time period for most cards is 4 years
    if (expYear < now.getFullYear() || expYear > now.getFullYear() + 4) return;

    if (expMonth < 1 || expMonth > 12) return;
    // If the expiry year is the same as the current year
    if (expYear == now.getFullYear()) {
      // Check if the expiry month has already passed or not
      const currentMonth = now.getMonth() + 1;
      if (expMonth < currentMonth) return;
    }
    // If everything is okay, proceed to checkout
    checkOut();
  };

  return props.trigger ? (
    <Container>
      {/* <TopBars loggedIn = {props.loggedIn}/>	 */}
      <OuterArea onClick={() => props.setTrigger(false)}></OuterArea>

      {/* <Title>CHECKOUT FORM</Title> */}
      <Wrapper>
        <CloseArea>
          <CloseButton onClick={() => props.setTrigger(false)}>
            <CloseIcon />
          </CloseButton>
        </CloseArea>
        <WrapperDiv>
          <InfoSection>
            <SectionHeader>
              <StartSection>Credit/Debit Card</StartSection>
              <PayMethod src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </SectionHeader>

            <SectionBody>
              <SectionForm>
                <PayForm>
                  <First>
                    Card Information
                    <Info>
                      <Number
                        id="cardName"
                        placeholder="Card Number"
                        type="number"
                        name="number"
                        value={cardInfo.number}
                        onChange={updateCardInfo}
                        required
                      />

                      <Code
                        id="cardCode"
                        placeholder="CSV"
                        type="number"
                        name="csv"
                        value={cardInfo.csv}
                        onChange={updateCardInfo}
                        ondrop="return false;"
                        onpaste="return false;"
                        required
                      />
                    </Info>
                  </First>

                  <Second>
                    Card Holder Name
                    <Name
                      type="text"
                      id="fname"
                      name="name"
                      value={cardInfo.name}
                      onChange={updateCardInfo}
                      autoComplete="off"
                    />{" "}
                  </Second>

                  <Third>
                    Valid Until
                    <DateField>
                      <Month
                        id="month"
                        placeholder="MM"
                        type="number"
                        name="expiryMonth"
                        value={cardInfo.expiryMonth}
                        onChange={updateCardInfo}
                        ondrop="return false;"
                        onpaste="return false;"
                        required
                      ></Month>

                      <p id="slash">&nbsp;/&nbsp;</p>

                      <Year
                        id="year"
                        placeholder="YY"
                        name="expiryYear"
                        value={cardInfo.expiryYear}
                        onChange={updateCardInfo}
                        type="number"
                        ondrop="return false;"
                        onpaste="return false;"
                        required
                      ></Year>
                    </DateField>
                  </Third>

                  <Fourth>
                    <SelectOption id="address">
                      <option value="current">My Current Location</option>
                    </SelectOption>
                  </Fourth>
                </PayForm>
              </SectionForm>

              <SectionOrder>
                <Summary>
                  <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                  <SummaryItem>
                    <SummaryItemText>SubTotal</SummaryItemText>
                    <SummaryItemPrice>Rs. {props.subTotal}</SummaryItemPrice>
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
                    <SummaryItemPrice>
                      Rs. {props.subTotal + 100}
                    </SummaryItemPrice>
                  </SummaryItem>
                  <Button onClick={(e) => verifyCardInformation(e)}>
                    PAY NOW
                  </Button>
                </Summary>
              </SectionOrder>
            </SectionBody>
          </InfoSection>
        </WrapperDiv>
      </Wrapper>

      {/* <Footer/> */}
    </Container>
  ) : (
    ""
  );
};

export default Payment;
