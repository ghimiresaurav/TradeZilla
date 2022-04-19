import styled from "styled-components";
import GradeIcon from "@mui/icons-material/Grade";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

const Wrapper = styled.div`
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

const Title = styled.h1`
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

const ProductReview = (props) => {
  //   const productReview = props.reviews.reviews;
  //   console.log(props.reviews.reviews);
  console.log("2");
  return (
    <Container>
      <Wrapper>
        <Title>Review</Title>
        <OverallRating>
          <Rating>
            <Rate>{props.reviews.rating}</Rate>
            <OutOf>/5</OutOf>
          </Rating>
          <Star>
            <GradeIcon style={{ fontSize: "50px" }} />
            <GradeIcon style={{ fontSize: "50px" }} />
            <GradeIcon style={{ fontSize: "50px" }} />
          </Star>
          <TotalRatings>{props.reviews.reviews.length} ratings</TotalRatings>
        </OverallRating>
        <Reviews>
          {props.reviews.reviews.map((item) => {
            return (
              <Review>
                <User>
                  <UserName>{item._id}</UserName>
                  <PostedDate>{item.date}</PostedDate>
                  <UserRating>
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                    <GradeIcon />
                  </UserRating>
                </User>
                <UserComment>{item.body}</UserComment>
              </Review>
            );
          })}
        </Reviews>
        <UserReview></UserReview>
      </Wrapper>
    </Container>
  );
};

export default ProductReview;
