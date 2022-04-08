import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from '../Components/Footer';
import "./RegisterForm.css";

const Container = styled.div`
   position: relative;
   top: 100px;
`;

const Wrapper = styled.div`
  display: flex;
	width: 100%;
	margin: auto;
  /* flex-direction: column; */
`;

const Title = styled.div`
  font-size: 24px;
	font-weight: 600;
	display: flex;
  padding-top: 10px;
	align-items: center;
	justify-content: center	;
  /* background-color: red; */
`;  

const WrapperDiv = styled.div`
   display: flex;
   width: 100%;
   /* background-color: green; */
`;

const InfoSection = styled.div`
    width: 80%;
    min-width: 500 vw;
	  height: 70vh;
    margin: 30px auto;
    border: 2px solid #000000;
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
width: 25% ;
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
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-size: ${props=>props.type === "total" && "24px"};
    font-weight: ${props=>props.type === "total" && "500"};
`;

const SummaryItemText = styled.div`

`;

const SummaryItemPrice = styled.div`

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #000000;
    color: #ffffff;
    font-weight: 600;
    cursor: pointer;
`;

const PayForm = styled.div`
   background-color: sandybrown;
   display: flex;
   justify-content: flex-start;
   flex-direction: column;
   padding: 20px;
   width: 85%;
   `;

const First = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 4px 0; 
`;
const Second = styled.div`
padding: 5px 0 0 0;
`;
const Third = styled.div`
`;
const Fourth = styled.div`
  padding: 20px 0;
`;

const Number = styled.input`
 width: 50%;
 border-radius: 3%;
 padding: 10px;
 border: none;
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
width:20%;
`;

const Name = styled(Number)`
width: 72%;
`;

const SelectOption = styled.select `
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
width: 15%;
`;

const Year = styled(Number)`
width: 15%;
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

  return (       
    <Container>
        <TopBars loggedIn = {props.loggedIn}/>	
        <Title>CHECKOUT FORM</Title>
        <Wrapper>
          
          <WrapperDiv>
            <InfoSection>
              <SectionHeader>
                  <StartSection>Credit/Debit Card</StartSection>
                  <PayMethod src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
              </SectionHeader>

              <SectionBody >
                 <SectionForm>
                    <PayForm>
                       <First>
                          Card Information    
                           <Info>
                              <Number 
                                  id="cardName"
                                  placeholder= "Card Number"
                                  type="number"                                   
                                  ondrop="return false;" 
                                  onpaste="return false;"                                  
                                  
                                  required />

                              <Code id="cardCode"
                               placeholder= "CSV"
                               type="number" 
                               ondrop="return false;" 
                               onpaste="return false;"                               
                               required />                               
                           </Info>                             
                        </First>
 
                       <Second>
                       Card Holder Name                       
                       <Name type="text" id="fname" name="fname" autoComplete="off" /> <br />                        
                       </Second>

                       <Third>
                          Valid Until
                          <DateField>
                             <Month id="month"
                               placeholder= "MM"
                               type="number" 
                               ondrop="return false;" 
                               onpaste="return false;"                               
                               required></Month>

                               <p id="slash">/</p>

                               <Year id="year"
                               placeholder= "YY"
                               type="number" 
                               ondrop="return false;" 
                               onpaste="return false;"                               
                               required></Year>
                          </DateField>
                       

                       </Third>

                       <Fourth>
                       <SelectOption id="address">                          
                          <option value="current">Billing Address</option>
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
                                <SummaryItemPrice>Rs. 999</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Estimated Shipping</SummaryItemText>
                                <SummaryItemPrice>Rs. 99</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Shipping Discount</SummaryItemText>
                                <SummaryItemPrice>Rs. 9</SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type = "total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice>Rs. 1999</SummaryItemPrice>
                            </SummaryItem>
                            <Button type="submit">PAY NOW</Button>
                        </Summary>

                 </SectionOrder>
              </SectionBody>

            </InfoSection>
          </WrapperDiv>

        </Wrapper>

        <Footer/>
    </Container>


  );
}

export default Payment;