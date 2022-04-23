/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useEffect, useState } from "react";

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

const DiscardArea = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DispatchArea = styled.div`
  position: absolute;
  top: 15px;
  right: 55px;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const DiscardButton = styled.div`
  position: relative;
  width: 30px;
  height: 40px;
  padding: 10px;
  background-color: #000000;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: center;
  border-radius: 5px;

  &:hover ~ ${PopupHover} {
    visibility: visible;
  }
`;

const DispatchButton = styled(DiscardButton)``;

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
  const [vendorPendingOrders, setvendorPendingOrders] = useState([]);

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/s/v/getOrder`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });
    const response = await resp.json();
    console.log(response);
    if (response.success) {
      setvendorPendingOrders(response.undispatchedOrders);
    } else console.log("failed");
  }, []);

  const [vendorDeliveredOrders, setvendorDeliveredOrders] = useState([]);

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/s/v/getOrder`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });
    const response = await resp.json();
    console.log(response);
    if (response.success) {
      setvendorDeliveredOrders(response.dispatchedOrders);
    } else console.log("failed");
  }, []);

  return (
    <>
      <Title>Sell Overview</Title>
      <RightDiv>
        <WrapContainer>
          <InfoSection>
            <PendingSection>
              <SectionHeader>
                <StartSection>Pending Orders</StartSection>
              </SectionHeader>

              <SectionBody>
                <BodyWrapper>
                  {vendorPendingOrders.map((item) => {
                    return (
                      <Product>
                        <ProductDetail>
                          <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item._id}
                            </ProductId>
                            <Date>
                              <b>Ordered Date:</b> {item.date}
                            </Date>
                            <ProductQuantity>
                              <b>Quantity:</b> {item.quantity}
                            </ProductQuantity>
                            <ProductPrice>
                              <b>Price: Rs</b> {item.price}
                            </ProductPrice>
                          </Details>
                        </ProductDetail>

                        <DiscardArea>
                          <DiscardButton>
                            <DeleteIcon />
                          </DiscardButton>
                          <PopupHover>Remove</PopupHover>
                        </DiscardArea>

                        <DispatchArea>
                          <DispatchButton>
                            <LocalShippingIcon />
                          </DispatchButton>
                          <PopupHover>Dispatch</PopupHover>
                        </DispatchArea>
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
                  {vendorDeliveredOrders.map((item) => {
                    return (
                      <Product>
                        <ProductDetail>
                          <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.title}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item._id}
                            </ProductId>
                            <Date>
                              <b>Ordered Date:</b> {item.date}
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
                  ;
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
