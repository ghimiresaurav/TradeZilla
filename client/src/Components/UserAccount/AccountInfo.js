import { useEffect, useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RightDiv = styled.div`
  display: flex;
  flex: 9;
`;

const WrapContainer = styled.div`
  width: 100%;
`;

const InfoSection = styled.div`
  width: 80%;
  min-width: 500 vw;
  height: 70vh;
  margin: 30px auto;
  /* border: 2px solid #000000; */
  padding: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const SectionHeader = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
`;

const StartSection = styled.div`
  font-size: 24px;
  /* background-color: red; */
`;

const EndSection = styled.div`
  font-size: 18px;
  text-decoration: underline;
  color: #3385ff;
`;

const SectionBody = styled.div`
  width: 90%;
  padding: 10px;
  margin: auto;
  background-color: #c2d6d6;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 50%;
`;

const Field = styled.div``;

const FieldTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const FieldInput = styled.div`
  font-size: 15px;
`;

const AccountInfo = () => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/s/user-info`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });
    const response = await resp.json();
    if (response.success) {
      setUserInfo(response.user);
    } else console.log("failed");
  }, {});

  return (
    <>
      <Title>My Account</Title>
      <RightDiv>
        <WrapContainer>
          <InfoSection>
            <SectionHeader>
              <StartSection>Account Information</StartSection>
              <EndSection>Edit</EndSection>
            </SectionHeader>

            <SectionBody>
              <BodyWrapper>
                <Field>
                  <FieldTitle>Full Name</FieldTitle>
                  <FieldInput>{userInfo.name}</FieldInput>
                </Field>

                <Field>
                  <FieldTitle>Email Address</FieldTitle>
                  <FieldInput>{userInfo.email}</FieldInput>
                </Field>

                <Field>
                  <FieldTitle>Date Of Birth</FieldTitle>
                  <FieldInput>{userInfo.dob}</FieldInput>
                </Field>
              </BodyWrapper>
            </SectionBody>
          </InfoSection>
        </WrapContainer>
      </RightDiv>
    </>
  );
};

export default AccountInfo;
