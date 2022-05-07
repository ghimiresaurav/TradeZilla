/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import { useEffect, useState } from "react";
import getThumbnailFromImage from "../../utils/getThumbnail";
import defaultImage from "../../utils/defaultImage";
import handleJWTExpiry from "../../utils/handleJWTExpiry";
import getFormattedDateTime from "../../utils/getFormattedDate";

const Product = styled.div`
  width: 80vw;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 30px; */
  background-color: #f2f2f2;
  /* background-color: red; */

  border-radius: 5px;
  /* margin: 5px 5px; */
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const Date = styled.span``;

const ProductQuantity = styled.span``;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const PopupHover = styled.span`
  position: absolute;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #ffffff;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  visibility: hidden;
  bottom: -30px;
`;

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
  /* background-color: grey; */
`;

const WrapContainer = styled.div`
  width: 100%;
  /* background-color: red; */
`;

const InfoSection = styled.div`
  width: 80%;
  min-width: 500 vw;
  margin: auto;
  padding: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const PendingSection = styled.div``;
const DeliveredSection = styled.div``;

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

const SectionBody = styled.div`
  width: 90%;
  padding: 10px;
  margin: auto;
  /* background-color: #c2d6d6; */
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px 50%;
`;

const SellOverview = () => {
  const [pendingOrderHistory, setPendingOrderHistory] = useState([]);
  const [deliveredOrderHistory, setDeliveredOrderHistory] = useState([]);
  const [rejectedOrderHistory, setRejectedOrderHistory] = useState([]);

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/s/v/get-order-history`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });
    const response = await resp.json();
    handleJWTExpiry(response);
    if (response.success) {
      setDeliveredOrderHistory(response.dispatchedOrderHistory);
      setPendingOrderHistory(response.pendingOrderHistory);
      setRejectedOrderHistory(response.rejectedOrderHistory);
    } else console.log("failed");
  }, []);

  return (
    <>
      <Title>Order History</Title>
      <RightDiv>
        <WrapContainer>
          <InfoSection>
            <PendingSection>
              <SectionHeader>
                <StartSection>Pending Orders</StartSection>
              </SectionHeader>

              <SectionBody>
                <BodyWrapper>
                  {pendingOrderHistory.map((item) => {
                    return (
                      <Product key={item._id}>
                        <ProductDetail>
                          <Image
                            src={
                              item.image
                                ? getThumbnailFromImage(item.image)
                                : defaultImage
                            }
                          />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item.product_id}
                            </ProductId>
                            <Date>
                              <b>Ordered Date:</b>
                              {getFormattedDateTime(item.date)}
                            </Date>
                            <ProductQuantity>
                              <b>Quantity:</b> {item.quantity}
                            </ProductQuantity>
                            <ProductPrice>
                              <b>Price: Rs</b> {item.price}
                            </ProductPrice>
                          </Details>
                        </ProductDetail>
                      </Product>
                    );
                  })}
                </BodyWrapper>
              </SectionBody>
            </PendingSection>

            <DeliveredSection>
              <SectionHeader>
                <StartSection>Delivered Orders</StartSection>
              </SectionHeader>

              <SectionBody>
                <BodyWrapper>
                  {deliveredOrderHistory.map((item) => {
                    return (
                      <Product key={item._id}>
                        <ProductDetail>
                          <Image
                            src={
                              item.image
                                ? getThumbnailFromImage(item.image)
                                : defaultImage
                            }
                          />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item.product_id}
                            </ProductId>
                            <Date>
                              <b>Ordered Date:</b>
                              {getFormattedDateTime(item.date)}
                            </Date>
                            <ProductQuantity>
                              <b>Quantity:</b> {item.quantity}
                            </ProductQuantity>
                            <Date>
                              <b>Dispatched On</b>
                              {getFormattedDateTime(item.dispatchedOn, "time")}
                            </Date>
                          </Details>
                        </ProductDetail>
                      </Product>
                    );
                  })}
                </BodyWrapper>
              </SectionBody>
            </DeliveredSection>

            <DeliveredSection>
              <SectionHeader>
                <StartSection>Rejected Orders</StartSection>
              </SectionHeader>

              <SectionBody>
                <BodyWrapper>
                  {rejectedOrderHistory.map((item) => {
                    return (
                      <Product key={item._id}>
                        <ProductDetail>
                          <Image
                            src={
                              item.image
                                ? getThumbnailFromImage(item.image)
                                : defaultImage
                            }
                          />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item.product_id}
                            </ProductId>
                            <Date>
                              <b>Ordered Date:</b>
                              {getFormattedDateTime(item.date)}
                            </Date>
                            <ProductQuantity>
                              <b>Quantity:</b> {item.quantity}
                            </ProductQuantity>
                            <Date>
                              <b>Dispatched On</b> {item.dispatchedOn}
                            </Date>
                          </Details>
                        </ProductDetail>
                      </Product>
                    );
                  })}
                </BodyWrapper>
              </SectionBody>
            </DeliveredSection>
          </InfoSection>
        </WrapContainer>
      </RightDiv>
    </>
  );
};

export default SellOverview;
