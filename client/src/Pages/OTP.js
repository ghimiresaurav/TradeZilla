import styled from 'styled-components';
import TopBars from '../Components/TopBars';
import Footer from '../Components/Footer';

const Container = styled.div`
    width: 100%;
    position: absolute;
    top: 100px;
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

const Input = styled.input`
    height: 40px;
    padding: 15px;
    margin-bottom: 15px;
`;

const Button = styled.button`
    // height: 40px;
    cursor: pointer;
    margin-bottom: 15px;
    color: #ffffff;
    background-color: #000000;
    font-size: 20px;
    font=weight: 700;
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
  return (
    <Container>
        <TopBars loggedIn = {props.loggedIn}/>
        <ContentArea>
            <OTPArea>
                <Wrapper>
                    <Title>E-mail Verification</Title>
                    <Label>An e-mail with a 6-digit verification code was just sent to danny@daniels.com</Label>
                    <Input placeholder='OTP'/>
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