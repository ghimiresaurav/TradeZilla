/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useEffect, useState } from "react";
import getThumbnailFromImage from "../../utils/getThumbnail";
import defaultImage from "../../utils/defaultImage";
import handleJWTExpiry from "../../utils/handleJWTExpiry";
import getFormattedDateTime from "../../utils/getFormattedDate";
import Pill from "../../Components/Pill";

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

const ProductName = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 450px;
`;

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
  const [pendingOrders, setPendingOrders] = useState([]);
  const [deliveredOrders, setDeliveredOrders] = useState([]);
  const [rejectedOrders, setRejectedOrders] = useState([]);

  const [version, setVersion] = useState(0);
  const [success, setSuccess] = useState(false);
  const [pillText, setPillText] = useState("");
  const [showPill, setShowPill] = useState(false);

  const displayPill = (success, message) => {
    setSuccess(success);
    setPillText(message);
    setShowPill(true);

    setTimeout(() => {
      setShowPill(false);
    }, 3000);
    return;
  };

  useEffect(async () => {
    const resp = await fetch(`http://localhost:5000/s/v/getOrders`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });
    const response = await resp.json();
    handleJWTExpiry(response);
    if (response.success) {
      setDeliveredOrders(response.dispatchedOrders);
      setPendingOrders(response.pendingOrders);
      setRejectedOrders(response.rejectedOrders);
    } else console.log("failed");
  }, [version]);

  const dispatchOrder = async (id) => {
    const resp = await fetch(`http://localhost:5000/s/v/dispatch/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });

    const response = await resp.json();
    if (response.success) setVersion(version + 1);
    return displayPill(response.success, response.message);
  };

  const rejectOrder = async (id) => {
    const resp = await fetch(`http://localhost:5000/s/v/reject-order/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
    });

    const response = await resp.json();
    if (response.success) setVersion(version + 1);
    return displayPill(response.success, response.message);
  };

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
                  {pendingOrders.map((item) => {
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
                              <b>Ordered Date: </b>
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

                        <DiscardArea>
                          <DiscardButton onClick={() => rejectOrder(item._id)}>
                            <DeleteIcon />
                          </DiscardButton>
                          <PopupHover>Remove</PopupHover>
                        </DiscardArea>

                        <DispatchArea>
                          <DispatchButton
                            onClick={() => dispatchOrder(item._id)}
                          >
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
                  {deliveredOrders.map((item) => {
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
                              <b>Ordered Date: </b>
                              {getFormattedDateTime(item.date)}
                            </Date>
                            <ProductQuantity>
                              <b>Quantity:</b> {item.quantity}
                            </ProductQuantity>
                            <Date>
                              <b>Dispatched On: </b>
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
                  {rejectedOrders.map((item) => {
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
                              <b>Ordered Date: </b>
                              {getFormattedDateTime(item.date)}
                            </Date>
                            <ProductQuantity>
                              <b>Quantity:</b> {item.quantity}
                            </ProductQuantity>
                            <Date>
                              <b>Rejected On: </b>
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
          </InfoSection>
        </WrapContainer>
      </RightDiv>
      <Pill display={showPill} text={pillText} success={success} />
    </>
  );
};

export default SellOverview;
