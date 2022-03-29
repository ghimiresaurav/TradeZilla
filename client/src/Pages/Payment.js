import styled from "styled-components";
import TopBars from "../Components/TopBars";

const Container = styled.div`
   
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
  /* flex: 1; */
	align-items: center;
	justify-content: center	;
  background-color: red;
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
    /* background-color: red; */
`;
const SectionHeader = styled.div`
  width: 80%;
	margin: 10px auto;
	display: flex;
  column-gap: 5%;

`;
const StartSection = styled.div`
  font-size: 24px;
`;

const PayMethod = styled.img`
width: 25% 
`;

const Payment = (props) => {
  return (
    <Container>
        <TopBars loggedIn = {props.loggedIn}/>	
        <Title>Payment</Title>
        <Wrapper>
          
          <WrapperDiv>
            <InfoSection>
              <SectionHeader>
                  <StartSection>Credit/Debit Card</StartSection>
                  <PayMethod src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
              </SectionHeader>

            </InfoSection>
          </WrapperDiv>

        </Wrapper>
    </Container>
  )
}

export default Payment