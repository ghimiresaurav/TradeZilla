import styled from 'styled-components';
import TopBars from '../Components/TopBars';
import Footer from '../Components/Footer';
import { useState } from 'react';

const Container = styled.div`
    width: 100%;
    position: absolute;
    /* top: 100px; */
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
    padding: 20px;
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

const InputArea = styled.div`
    height: 40px;
    padding: 0 15px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    // background-color: green;

`;

const Input = styled.input`
    // width: 20%;
    width: 40px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // padding: auto;
    // padding: 20px;
    padding-left: 12px;
    font-size: 20px;
    border: 2px solid #000000;
    border-radius: 3px;
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

    &:hover{
        background-color: #ffffff;
        color: #000000;
    }
`;

const Resend = styled.a`
    text-decoration: underline;
    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
`;


const OTP = (props) => {

    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (element, index) =>{
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        //Focus next input
        if (element.nextSibling){
            element.nextSibling.focus();
        }
    };

    return (
        <Container>
            <TopBars loggedIn = {props.loggedIn}/>
            <ContentArea>
                <OTPArea>
                    <Wrapper>
                        <Title>E-mail Verification</Title>
                        <Label>An e-mail with a 6-digit verification code was just sent to danny@daniels.com</Label>
                        <InputArea>
                            {otp.map((data, index) => {
                                return (
                                    <Input type = "text" maxLength = "1" key = {index} value = {data} onChange = {e=> handleChange(e.target, index)} onFocus = {e => e.target.select()}/>
                                )
                            })}
                        </InputArea>
                        <p>OTP Entered - {otp.join("")}</p>
                        <Button>Verify</Button>
                        <Label>Didn't Receive a code?&nbsp; 
                            <Resend>Request Again</Resend>
                        </Label>
                    </Wrapper>
                </OTPArea>
            </ContentArea>
            <Footer/>
        </Container>
    )
}

export default OTP