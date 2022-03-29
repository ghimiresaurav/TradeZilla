import styled from "styled-components";
import { Link } from "react-router-dom";

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
          <Title>Account Verified</Title>
          <Description>You have successfully confirmed your account with the email <b>{localStorage.getItem("email")}.</b> You will use this email to login.</Description>
          <ButtonArea>
            <Link to="/">
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

export default AccountVerified;