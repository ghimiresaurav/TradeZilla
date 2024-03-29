import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import GradeIcon from "@mui/icons-material/Grade";
import { useEffect, useState } from "react";
import { mobile, tab, vTab } from "../responsive";
import "./RegisterForm.css";
import { FaStar } from "react-icons/fa";
import Pill from "../Components/Pill";

import { Link } from "react-router-dom";
// import { color } from "@mui/system";
import "./RegisterForm.css";
// import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import handleJWTExpiry from "../utils/handleJWTExpiry";
import MyProducts from "../Components/UserAccount/MyProducts";
import isLoggedIn from "../utils/checkLoggedIn";
// import ProductReview from "../Components/ProductReview";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 100px;

  ${mobile({ top: "50px" })}
`;

const ProductDetails = styled.div`
  background-color: #f2f2f2;
  padding: 30px 0;
`;

const Inner = styled.div`
  width: 85%;
  margin: auto;
  // padding: 50px;
  display: flex;
  margin-bottom: 10px;

  ${vTab({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;
  // background-color: green;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  // background-color: red;
  min-width: 300px;

  ${vTab({ width: "100%" })}
`;

const MainImage = styled.div`
  margin-bottom: 8px;
  // background-color: purple;
`;

const Image = styled.img`
  width: 100%;
  height: 65vh;
  object-fit: cover;
`;

const OtherImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // background-color: yellow;
  height: 110px;
`;

const OtherImage = styled.img`
  width: 23%;
  height: 100%;
  transition: 0.2s;
  object-fit: cover;
  cursor: pointer;
  padding: 0 8px;

  &:hover {
    border: 2px solid #000000;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  // padding: 0px 50px;
  // background-color: pink;

  ${vTab({
    width: "100%",
    padding: "30px 0px",
  })}
`;

const InfoWrapper = styled.div`
  width: 100%;
  // background-color: white;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  // margin: 20px 0px;
`;

const AddContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 30px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  width: 500px;
  padding: 15px;
  border: 2px solid teal;
  background: transparent;
  cursor: pointer;
  font-weight: 500;
  transition: 0.5s ease all;

  &:hover {
    // background-color: #f8f4f4;
    background-color: #000000;
    color: #ffffff;
  }
`;

//////////////////////////////////////////////////////////////
//////////////////////// PRODUCT REVIEW /////////////////////
//////////////////////////////////////////////////////////////
const ReviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const ReviewWrapper = styled.div`
  width: 85%;
  // margin: 10px 0px 30px 0;
  border: 2px solid #000000;
  // background-color: green;
`;

const OverallRating = styled.div`
  display: flex;
  margin-left: 25px;
  flex-direction: column;
  // background-color: green;
`;

const Rating = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Rate = styled.div`
  font-size: 50px;
  font-weight: 600;
  // background-color: red;
  // padding: 0;
`;

const OutOf = styled.div`
  // background-color: yellow;
  font-size: 40px;
  font-weight: 300;
`;

const Star = styled.div`
  // margin-left: 20px;
`;

const TotalRatings = styled.div`
  margin-left: 10px;
`;

const UserReview = styled.div``;

const ReviewTitle = styled.h1`
  margin: 20px;
`;

const Reviews = styled.div``;

const Review = styled.div`
  margin: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: green;
`;

const UserName = styled.h1`
  font-size: 14px;
`;

const PostedDate = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
`;

const UserRating = styled.div`
  display: flex;
  // margin-bottom: 2px;
`;

const UserComment = styled.h2`
  font-size: 18px;
  font-weight: 400;
  padding: 10px 0;
`;

const PostAQuestion = styled.form`
  // background-color: red;
  margin: 20px;
`;

const QuestionField = styled.textarea`
  width: 100%;
  border: none;
  border-bottom: 2px solid #000000;
  padding: 10px 0 0 10px;
  outline: none;
  margin: 10px 0;
  border-color: #f2f2f2;
  resize: none;

  &:focus {
    border-color: #000000;
  }
`;

const Buttons = styled.div`
  width: 100%;
  // background-color: green;
  display: flex;
  justify-content: right;
`;

const AnswerButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #000000;
  cursor: pointer;
  transition: all 0.2s ease-in;
  font-weight: 500;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }
`;

const PostButton = styled(AnswerButton)`
  width: 90px;
  margin-right: 20px;
  // background-color: #ffffff;
`;

const CancelButton = styled(AnswerButton)`
  width: 90px;
`;

//////////////////////////////////////////////////////////////
//////////////////////// PRODUCT INQUIRY /////////////////////
//////////////////////////////////////////////////////////////
const InquiryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InquiryWrapper = styled.div`
  width: 85%;
  margin: 10px 0px 30px 0;
  border: 2px solid #000000;
  // background-color: green;
`;

const InquiryTitle = styled.h1`
  margin: 20px 0 0 20px;
`;

const InquirySubTitle = styled.h5`
  margin: 10px 0 5px 20px;
  font-weight: 400;
  font-size: 17px;
`;

// const PostAQuestion = styled.form`
//   // background-color: red;
//   margin: 20px;
// `;

const Inquiries = styled.div``;

const Inquiry = styled.div`
  margin: 20px;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
`;

const QuestionArea = styled.div`
  display: flex;
  margin-bottom: 12px;
  // align-items: center;
`;

const Left = styled.label`
  margin-right: 20px;
  font-weight: 600;
  width: 60px;
`;

const Right = styled.div`
  // margin-right: 20px;
`;

const Question = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

// const User = styled.h3`
//   margin-top: 4px;
//   font-size: 12px;
//   font-weight: 400;
// `;

const AnswerArea = styled.div`
  display: flex;
  // align-items: center;
`;

const Answer = styled.div``;

const PostAnswer = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  // display: "";
  // display: ${({ answerClicked }) => (answerClicked ? "" : "none")};
`;

const TextField = styled.textarea`
  resize: vertical;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  min-height: 150px;
`;

const Login = styled.div`
  margin: 20px;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #000000;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
  }
`;

const YourReview = styled.div`
  display: flex;
  flex-direction: row;
`;

const starStyle = {
  color: "#DAA520",
};

const ProductDetail = (props) => {
  // Keep track of page version with each update
  const [version, setVersion] = useState(0);
  const productID = window.location.pathname.split("product/")[1];

  let myProducts;
  // const myProducts = localStorage.getItem("myProducts").split

  let isSeller = false;
  //Check Vendor or not
  if (localStorage.getItem("myProducts")) {
    const myProducts = localStorage.getItem("myProducts").split(",");
    if (myProducts.includes(productID)) isSeller = true;
  }

  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [success, setSuccess] = useState(false);

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
    const resp = await fetch(`http://localhost:5000/product/${productID}`);
    const response = await resp.json();
    if (response.success) {
      setProduct(response.product);
      setImages(response.product.images.split(", "));
      setReviews(response.product.reviews);
      setInquiries(response.product.inquiries);
    } else console.log("failed");
  }, [version]);

  document.title = product.title + " | TradeZilla";

  const [count, setCount] = useState(1);

  function decrementCount() {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function incrementCount() {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }

  const [imageIndex, setImageIndex] = useState(0);

  // Add this product to cart of the viewing user
  const addToCart = async () => {
    if (!isLoggedIn())
      return displayPill(false, "You need to login to perform this action.");
    const resp = await fetch(
      `http://localhost:5000/s/v/add-to-cart/${productID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "token"
          )} ${localStorage.getItem("userId")}`,
        },
        body: JSON.stringify({ quantity: count }),
      }
    );
    const response = await resp.json();
    handleJWTExpiry(response);
    // If add to cart is successful
    // Update the number of items on cart stored in local storage
    if (response.success)
      localStorage.setItem(
        "numberOfItemsOnCart",
        parseInt(localStorage.getItem("numberOfItemsOnCart")) + 1
      );

    return displayPill(response.success, response.message);
  };

  /* ////////////////////////////////////////////////////////////// */
  /* ///////////////////////////PRODUCT REVIEW///////////////////// */
  /* ////////////////////////////////////////////////////////////// */

  const [reviewClicked, setReviewClicked] = useState(false);
  const [review, setReview] = useState({
    rating: 0,
    body: "",
  });

  const handleReviewUpdate = (e) => {
    setReview({ ...review, [e.target.name]: e.target.value });
  };

  const postReview = async (e) => {
    const productID = window.location.pathname.split("product/")[1];

    e.preventDefault();
    const resp = await fetch(
      `http://localhost:5000/s/v/add-review/${productID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "token"
          )} ${localStorage.getItem("userId")}`,
        },
        body: JSON.stringify({ rating: review.rating, review: review.body }),
      }
    );

    const response = await resp.json();
    handleJWTExpiry(response);
    if (response.success) {
      setReviewClicked(false);
      setReview({
        rating: 0,
        body: "",
      });
      setVersion(version + 1);
    }
    return displayPill(response.success, response.message);
  };

  const calculateDaysPassed = (postedDate) => {
    const presentDate = new Date();
    const reviewPostedDate = new Date(postedDate);

    const differenceInTime = presentDate.getTime() - reviewPostedDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return Math.round(differenceInDays);
  };

  /* ////////////////////////////////////////////////////////////// */
  /* ///////////////////////////PRODUCT INQUIRY///////////////////// */
  /* ////////////////////////////////////////////////////////////// */
  const [questionClicked, setQuestionClicked] = useState(false);
  const [answerClicked, setAnswerClicked] = useState(false);

  const [inquiryQuery, setInquiryQuery] = useState("");
  const [answer, setAnswer] = useState("");

  function handleInquiryUpdate(e) {
    setInquiryQuery(e.target.value);
  }

  const handleAnswerUpdate = (e) => {
    setAnswer(e.target.value);
  };

  // Extract the product id from the url
  // const productID = window.location.pathname.split("product/")[1];
  const postInquiry = async (e) => {
    const productID = window.location.pathname.split("product/")[1];
    e.preventDefault();
    const resp = await fetch(
      `http://localhost:5000/s/v/add-query/${productID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "token"
          )} ${localStorage.getItem("userId")}`,
        },
        body: JSON.stringify({
          query: inquiryQuery,
        }),
      }
    );

    const response = await resp.json();
    handleJWTExpiry(response);

    if (response.success) {
      setInquiryQuery("");
      setQuestionClicked(false);
      setVersion(version + 1);
    }
    return displayPill(response.success, response.message);
  };

  const answerInquiry = async (query_id) => {
    const resp = await fetch(
      `http://localhost:5000/s/v/answer-query/${productID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem(
            "token"
          )} ${localStorage.getItem("userId")}`,
        },
        body: JSON.stringify({
          query_id,
          answer,
        }),
      }
    );
    const response = await resp.json();
    if (response.success) {
      setAnswerClicked(false);
      setVersion(version + 1);
    }
    return displayPill(response.success, response.message);
  };

  const [rating, setRating] = useState(null);

  ////////////////////// PILL ///////////////////////////
  const [showPill, setShowPill] = useState(false);
  const [pillText, setPillText] = useState("");

  return (
    <Container>
      <TopBars loggedIn={props.loggedIn} items={3} />
      <ProductDetails>
        <Inner>
          <ImgContainer>
            <Wrapper>
              <MainImage>
                <Image src={images[imageIndex]} />
              </MainImage>
              {images.length > 1 && (
                <OtherImages>
                  {images.map((image, index) => (
                    <OtherImage
                      onClick={() => setImageIndex(index)}
                      src={image}
                    />
                  ))}
                </OtherImages>
              )}
            </Wrapper>
          </ImgContainer>
          <InfoContainer>
            <InfoWrapper>
              <Title>{product.title}</Title>
              <Desc> {product.description} </Desc>
              <Price>Rs.&nbsp;{product.price}</Price>
              <AddContainer>
                <AmountContainer>
                  <RemoveIcon onClick={decrementCount} />
                  <Amount>{count}</Amount>
                  <AddIcon onClick={incrementCount} />
                </AmountContainer>
                <Button onClick={() => addToCart()}>ADD TO CART</Button>
              </AddContainer>
            </InfoWrapper>
          </InfoContainer>
        </Inner>
      </ProductDetails>
      {/* <ProductReview
        loggedIn={props.loggedIn}
        rating={product.rating}
        reviews={product.reviews}
      /> */}

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////PRODUCT REVIEW///////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}
      <ReviewContainer id="reviews">
        <ReviewWrapper>
          <ReviewTitle>Review</ReviewTitle>
          <OverallRating>
            <Rating>
              <Rate>{product.rating ? product.rating : "_"}</Rate>
              <OutOf>/5</OutOf>
            </Rating>
            <Star>
              <UserRating>
                {[...Array(product.rating)].map((index) => (
                  <GradeIcon key={index} style={{ fontSize: "40px" }} />
                ))}
              </UserRating>
            </Star>
          </OverallRating>

          {/* The following fields is for REVIEW NOT FOR QUESTION */}
          <PostAQuestion onSubmit={(e) => postReview(e)}>
            {/* ADD A FIELD FOR NUMBER INPUT HERE */}

            <YourReview>
              <p style={{ fontWeight: "500" }}>Your Review:</p> &emsp;
              <Star id="UserReview">
                {[...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label key={i}>
                      <input
                        type="radio"
                        id="radioRating"
                        name="rating"
                        value={ratingValue}
                        onClick={(e) => {
                          setRating(ratingValue);
                          handleReviewUpdate(e);
                        }}
                      />

                      <FaStar
                        className="star"
                        color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                      />
                    </label>
                  );
                })}
              </Star>
            </YourReview>

            <QuestionField
              onChange={(e) => handleReviewUpdate(e)}
              name="body"
              value={review.body}
              placeholder="How was you experience with this product?"
              onClick={() => setReviewClicked(true)}
            ></QuestionField>
            {reviewClicked ? (
              <Buttons>
                <PostButton>Post</PostButton>
                <CancelButton onClick={() => setReviewClicked(false)}>
                  Cancel
                </CancelButton>
              </Buttons>
            ) : null}
          </PostAQuestion>

          <Reviews>
            {reviews.map((review) => (
              <Review key={review._id}>
                <User>
                  <UserName>{review.name ? review.name : "Name here"}</UserName>
                  <PostedDate>
                    {calculateDaysPassed(review.date)} days ago
                  </PostedDate>
                  <UserRating>
                    {[...Array(review.rating)].map((index) => (
                      <GradeIcon key={index} />
                    ))}
                  </UserRating>
                </User>
                <UserComment>{review.body}</UserComment>
              </Review>
            ))}
          </Reviews>
        </ReviewWrapper>
      </ReviewContainer>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ///////////////////////////PRODUCT INQUIRY///////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}
      {/* <QandA loggedIn={props.loggedIn} /> */}
      <InquiryContainer id="inquiries">
        <InquiryWrapper>
          <InquiryTitle>Inquiry</InquiryTitle>
          <InquirySubTitle>Ask questions about this project</InquirySubTitle>
          {props.loggedIn ? (
            isSeller ? null : (
              <PostAQuestion onSubmit={(e) => postInquiry(e)}>
                <QuestionField
                  onChange={(e) => handleInquiryUpdate(e)}
                  id="qsn"
                  name="inquiry"
                  value={inquiryQuery}
                  placeholder="Have a question? Ask here..."
                  onClick={() => setQuestionClicked(true)}
                ></QuestionField>
                {questionClicked ? (
                  <Buttons>
                    <PostButton>Post</PostButton>
                    <CancelButton onClick={() => setQuestionClicked(false)}>
                      Cancel
                    </CancelButton>
                  </Buttons>
                ) : null}
              </PostAQuestion>
            )
          ) : (
            <Link to={"/login"}>
              <Login>
                <LoginButton>Login to ask question</LoginButton>
              </Login>
            </Link>
          )}
          <Inquiries>
            {inquiries.map((inquiry) => (
              <Inquiry key={inquiry._id}>
                <QuestionArea>
                  <Left>Question:</Left>
                  <Right>
                    <Question>{inquiry.question}</Question>
                    <User style={{ flexDirection: "row" }}>
                      <UserName>
                        {inquiry.name ? inquiry.name : "Name Here"}
                      </UserName>
                      |&nbsp;
                      <PostedDate style={{ display: "flex", margin: "auto" }}>
                        {calculateDaysPassed(inquiry.date)} days ago
                      </PostedDate>
                    </User>
                  </Right>
                </QuestionArea>
                {inquiry.answer ? (
                  <AnswerArea>
                    <Left>Answer:</Left>
                    <Right>
                      <Answer>{inquiry.answer}</Answer>
                      <User style={{ flexDirection: "row" }}>
                        <UserName>Seller</UserName>
                        &nbsp;|&nbsp;
                        <PostedDate style={{ display: "flex", margin: "auto" }}>
                          {calculateDaysPassed(inquiry.date)} days ago
                        </PostedDate>
                      </User>
                    </Right>
                  </AnswerArea>
                ) : (
                  <AnswerArea>
                    {isSeller ? (
                      answerClicked ? (
                        <PostAnswer>
                          <TextField
                            placeholder="Answer here..."
                            name="answer"
                            onChange={handleAnswerUpdate}
                            value={answer}
                          ></TextField>
                          <Buttons>
                            <PostButton
                              //   The query id is hardcoded here.
                              //   It has to be replaced by the id of the query that the vendor is trying to reply to
                              onClick={() => answerInquiry(inquiry._id)}
                            >
                              Post
                            </PostButton>
                            <CancelButton
                              onClick={() => setAnswerClicked(false)}
                            >
                              Cancel
                            </CancelButton>
                          </Buttons>
                        </PostAnswer>
                      ) : (
                        <AnswerButton onClick={() => setAnswerClicked(true)}>
                          Answer
                        </AnswerButton>
                      )
                    ) : null}
                  </AnswerArea>
                )}
              </Inquiry>
            ))}
          </Inquiries>
        </InquiryWrapper>
      </InquiryContainer>

      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}
      {/* ////////////////////////////////////////////////////////////// */}
      <Footer />
      <Pill display={showPill} text={pillText} success={success} />
    </Container>
  );
};

export default ProductDetail;
