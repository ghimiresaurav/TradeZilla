import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { useState } from "react";

const AccountVerified = (props) => {

  const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    // background-color: rgba(255, 255, 255, 0.9);
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const OuterArea = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
  `;

  const Popup = styled.div`
      // background-color: #fcf5f5;   
      background-color: #ffffff;   
      width: 40%;
      z-index: 10000;
      min-width: 300px;
      padding: 20px;
      border-radius: 5px;
      // box-shadow: 1px 1px 5px #888888, -1px -1px 5px #f2f2f2;
  `;

  const Content = styled.div`
    display: flex;
    align-items: left;
    flex-direction: column;
  `;

  const Title = styled.h1`
    font-size: 25px;
    margin-bottom: 20px;
  `;

  const Description = styled.div`
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 10px;
  `;

  const ButtonArea = styled.div`
    display: flex;
    justify-content: flex-end;
  `;

  const OkButton = styled.button`
    padding: 8px 20px;
    border-radius: 5px;
    transition: 0.5s;
    color: #ffffff;
    cursor: pointer;
    background-color: #000000;
    border: none;

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }
  `;

  return (props.trigger) ? (
    <Container>
      <OuterArea></OuterArea>
      <Popup>
        <Content>
          <Title>Account Verfified</Title>
          <Description>You have successfully confirmed your account with the email sajag@gmail.com. You will use this email to login.</Description>
          <ButtonArea>
            <Link to="/login">
              <OkButton onClick={() => props.setTrigger(false)}>
                OK
              </OkButton>
            </Link>
          </ButtonArea>
        </Content>
      </Popup>
    </Container>
  ) : ""
}


const OTP = (props) => {

  const Container = styled.div`
  width: 100%;
  position: absolute;
  // top: 100px;
`;

const ContentArea = styled.div`
  width: 100%;
`;

const OTPArea = styled.div`
  width: 30%;
  min-width: 300px;
  margin: 50px auto;
  border: 2px solid #000000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  padding: 20px 0;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

const Label = styled.label`
  // background-color: green;
  margin-bottom: 15px;
`;

const InputOuterArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: green;
  margin-bottom: 15px;
`;

const InputArea = styled.div`
  height: 40px;
  width: 80%;
  max-width: 500px;
  // padding: 0 15px;
  display: flex;
  justify-content: center;
  // justify-content: space-between;
  // background-color: blue;
`;

const Input = styled.input`
  // width: 20%;
  width: 40px;
  padding-left: 12px;
  font-size: 20px;
  border: 2px solid #000000;
  border-radius: 3px;
  margin: 0px 3px;
`;

const Button = styled.button`
  // height: 40px;
  cursor: pointer;
  margin-bottom: 15px;
  color: #ffffff;
  background-color: #000000;
  font-size: 20px;
  font-weight: 600;
  border: 2px solid #000000;
  padding: 10px 0;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

const Resend = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

  const [otp, setOtp] = useState(new Array(6).fill(""));

  // const [userEmail, setUserEmail] = useState(localStorage.getItem("email"));
  // console.log(localStorage.getItem("email"));
  // setUserEmail();
  
  const submitOTP = async () => {
    const resp = await fetch("http://localhost:5000/s/verify-email", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: localStorage.getItem("userId"),
        otp: otp.join(""),
      }),
    });
    const response = await resp.json();
    console.log(response);
    if (response.success){
      localStorage.setItem("isActive", true);
      window.location.assign("/");
    }
  };

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} />
      <ContentArea>
        <OTPArea>
          <Wrapper>
            <Title>E-mail Verification</Title>
            <Label>
              An e-mail with a 6-digit verification code was just sent to <b>{localStorage.getItem("email")}</b>
            </Label>
            <InputOuterArea>
              <InputArea>
                {otp.map((data, index) => {
                  return (
                    <Input
                      type="text"
                      maxLength="1"
                      key={index}
                      value={data}
                      onChange={(e) => handleChange(e.target, index)}
                      onFocus={(e) => e.target.select()}
                    />
                  );
                })}
              </InputArea>
            </InputOuterArea>
            <p>OTP Entered - {otp.join("")}</p>
            <Button onClick={submitOTP}>Verify</Button>
            <Label>
              Didn't Receive a code?&nbsp;
              <Resend>Request Again</Resend>
            </Label>
          </Wrapper>
        </OTPArea>
      </ContentArea>
      <Footer />
    </Container>
  );
};

export default OTP;
