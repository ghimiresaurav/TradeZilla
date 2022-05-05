import styled from "styled-components";
// import GradeIcon from "@mui/icons-material/Grade";
import { useState } from "react";
import {FaStar} from "react-icons/fa";

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

// const UserName = styled.h1`
// 	font-size: 14px;
// `;

// const PostedDate = styled.div`
// 	font-size: 12px;
// 	margin-bottom: 5px;
// `;

// const UserRating = styled.div`
// 	display: flex;
// 	// margin-bottom: 2px;
// `;

// const UserComment = styled.h2`
// 	font-size: 18px;
// 	font-weight: 400;
// 	padding: 10px 0;
// `;

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
  /* background-color: red; */
`;

const CancelButton = styled(AnswerButton)`
  width: 90px;
`;


const ProductReview = (props) => {
	//   const productReview = props.reviews.reviews;
	//   console.log(props.reviews.reviews);
	console.log("2");

	const [questionClicked, setQuestionClicked] = useState(false);

	const [data, setData] = useState({
		qsn: "",
	});

	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}

	const handleSubmit = async (e) => {
		const productID = window.location.pathname.split("product/")[1];

		e.preventDefault();
		const resp = await fetch(
			`http://localhost:5000/s/v/add-review/${productID}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					qsn: data.qsn,
				}),
			}
		);

		const response = await resp.json();
		console.log(response);
	};

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
						<FaStar style={{ fontSize: "50px" }} />
						<FaStar style={{ fontSize: "50px" }} />
						<FaStar style={{ fontSize: "50px" }} />
						<FaStar style={{ fontSize: "50px" }} />
						<FaStar style={{ fontSize: "50px" }} />
					</Star>
					{/* <TotalRatings>{props.reviews.reviews.length} ratings</TotalRatings> */}
				</OverallRating>
				<Reviews>
					{/* {props.reviews.reviews.map((item) => {
						return (
							<Review>
								<User>
									<UserName>{item._id}</UserName>
									<PostedDate>{item.date}</PostedDate>
									<UserRating>
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
										<FaStar />
									</UserRating>
								</User>
								<UserComment>{item.body}</UserComment>
							</Review>
						);
					})} */}

					<PostAQuestion onSubmit={(e) => handleSubmit(e)}>
						<QuestionField
							onChange={(e) => handle(e)}
							id="qsn"
							value={data.qsn}
							placeholder="How was you experience with this product?"
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
				</Reviews>

				<UserReview>
				<FaStar style={{ fontSize: "50px" }} />
				<FaStar style={{ fontSize: "50px" }} />
				<FaStar style={{ fontSize: "50px" }} />
				<FaStar style={{ fontSize: "50px" }} />
				<FaStar style={{ fontSize: "50px" }} />
				</UserReview>
			</Wrapper>
		</Container>
	);
};

export default ProductReview;
