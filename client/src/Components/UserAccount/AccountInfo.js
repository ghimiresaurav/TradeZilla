import { useEffect, useState } from "react";
import styled from "styled-components";
import handleJWTExpiry from "../../utils/handleJWTExpiry";
import getFormattedDateTime from "../../utils/getFormattedDate";

const Title = styled.h1`
  font-size: 40px;
  font-weight: 500;
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
  margin: 3px auto;
  border: 1px solid #000000;
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
  margin: 20px auto;
  background-color: #f2f2f2;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BodyWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Field = styled.div`
  margin-bottom: 10px;
  width: 50%;
`;

const Field2 = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const FieldTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const FieldInput = styled.div`
  font-size: 15px;
`;

const Status = styled.div`
  display: flex;
  // align-items: flex-start;
  // background-color: yellow;
  width: 95%;
  margin: auto;
  // justify-content: left;
`;

const VendorStatus = styled.div`
  // background-color: red;

  flex: 1;
`;

const CustomerStatus = styled.div`
  // background-color: red;
  // width: 90%;

  flex: 1;
`;

// const ProductCount = styled.div``;

// const DispatchedOrders = styled.div``;

// const PendingOrders = styled.div``;

const AccountInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [extraInfo, setExtraInfo] = useState({});

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/s/user-info`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });
    const response = await resp.json();
    handleJWTExpiry(response);
    if (response.success) {
      setUserInfo(response.user);
      setExtraInfo(response.extras);
    } else console.log("failed");
  }, []);

  return (
    <>
      <Title>My Account</Title>
      <RightDiv>
        <WrapContainer>
          <InfoSection>
            <SectionHeader>
              <StartSection>Account Information</StartSection>
              {/* <EndSection>Edit</EndSection> */}
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
                  <FieldInput>{getFormattedDateTime(userInfo.dob)}</FieldInput>
                </Field>

                <Field>
                  <FieldTitle>Date Joined</FieldTitle>
                  <FieldInput>
                    {getFormattedDateTime(userInfo.joinedOn)}
                  </FieldInput>
                </Field>
              </BodyWrapper>
            </SectionBody>
            <Status>
              {" "}
              <VendorStatus>
                <SectionHeader>
                  <StartSection>Vendor Status</StartSection>
                </SectionHeader>
                {/* <hr /> */}
                <SectionBody>
                  <BodyWrapper2>
                    <Field2>
                      <FieldTitle>Product Count:&nbsp;</FieldTitle>
                      <FieldInput>{extraInfo.vendorProductsCount}</FieldInput>
                    </Field2>

                    <Field2>
                      <FieldTitle>
                        Successfully Dispatched Orders:&nbsp;
                      </FieldTitle>
                      <FieldInput>
                        {extraInfo.vendorDispatchedOrdersCount}
                      </FieldInput>
                    </Field2>

                    <Field2>
                      <FieldTitle>Pending Orders:&nbsp;</FieldTitle>
                      <FieldInput>
                        {extraInfo.vendorPendingOrdersCount}
                      </FieldInput>
                    </Field2>
                  </BodyWrapper2>
                </SectionBody>
              </VendorStatus>
              <CustomerStatus>
                <SectionHeader>
                  <StartSection>Customer Status</StartSection>
                </SectionHeader>
                {/* <hr /> */}
                <SectionBody>
                  <BodyWrapper2>
                    <Field2>
                      <FieldTitle>
                        Successfully Bought Products:&nbsp;
                      </FieldTitle>
                      <FieldInput>
                        {extraInfo.customerDispatchedOrdersCount}
                      </FieldInput>
                    </Field2>

                    <Field2>
                      <FieldTitle>Pending Orders:&nbsp;</FieldTitle>
                      <FieldInput>
                        {extraInfo.customerPendingOrdersCount}
                      </FieldInput>
                    </Field2>
                  </BodyWrapper2>
                </SectionBody>
              </CustomerStatus>
            </Status>
          </InfoSection>
        </WrapContainer>
      </RightDiv>
    </>
  );
};

export default AccountInfo;
