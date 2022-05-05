import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import QandA from "../Components/QandA";
import GradeIcon from "@mui/icons-material/Grade";
import { useEffect, useState } from "react";
import { mobile, tab, vTab } from "../responsive";
import "./RegisterForm.css";
import { FaStar } from "react-icons/fa";

// import { color } from "@mui/system";
import "./RegisterForm.css";
// import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import handleJWTExpiry from "../utils/handleJWTExpiry";
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
	justify-content: space-between;
	align-items: center;
	object-fit: cover;
	// background-color: yellow;
	height: 110px;
`;

const OtherImage = styled.img`
	width: 23%;
	height: 100%;
	transition: 0.2s;
	cursor: pointer;

	&:hover {
		border: 2px solid #000000;
	}
`;

const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
	// background-color: pink;

	${vTab({
		width: "100%",
		padding: "30px 0px",
	})}
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
	min-width: 100px;
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

const YourReview = styled.div`
	display: flex;
	flex-direction: row;
`;

const starStyle = {
	color: "#DAA520",
};

const ProductDetail = (props) => {
	const [product, setProduct] = useState({});
	const [images, setImages] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [reviewpostedDate, setReViewPostedDate] = useState([]);

	const productID = window.location.pathname.split("product/")[1];

	useEffect(async () => {
		const resp = await fetch(`http://localhost:5000/product/${productID}`);
		const response = await resp.json();
		if (response.success) {
			setProduct(response.product);
			setImages(response.product.images.split(", "));
			setReviews(response.product.reviews);
		} else console.log("failed");
	}, []);

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
		console.log(response);
	};

	/* ////////////////////////////////////////////////////////////// */
	/* ///////////////////////////PRODUCT REVIEW///////////////////// */
	/* ////////////////////////////////////////////////////////////// */

	const [questionClicked, setQuestionClicked] = useState(false);

	//   const [data, setData] = useState({
	//     qsn: "",
	//   });

	const [query, setQuery] = useState("");
	const [reviewBody, setReviewBody] = useState("");

	// const [review, setReview] = useState({
	//   // rating: 0,
	//   body: ""
	// });

	function handleQueryUpdate(e) {
		setQuery(e.traget.value);
		console.log(query);
	}

	const handleReviewUpdate = (e) => {
		setReviewBody(e.target.value);
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
				body: JSON.stringify({ rating, review: reviewBody }),
			}
		);

		const response = await resp.json();
		handleJWTExpiry(response);
		console.log(response);
	};

	const calculateDaysPassed = (postedDate) => {
		const presentDate = new Date();
		const reviewPostedDate = new Date(postedDate);

		const differenceInTime = presentDate.getTime() - reviewPostedDate.getTime();
		const differenceInDays = differenceInTime / (1000 * 3600 * 24);
		// console.log("Difference in Days: ", differenceInDays);

		return Math.round(differenceInDays);
	};

	const [rating, setRating] = useState(null);
	// const [hover, setHover] = useState(null);

	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<ProductDetails>
				<Inner>
					<ImgContainer>
						<Wrapper>
							<MainImage>
								<Image src={images[imageIndex]} />
							</MainImage>
							<OtherImages>
								<OtherImage onClick={() => setImageIndex(0)} src={images[0]} />
								<OtherImage onClick={() => setImageIndex(1)} src={images[1]} />
								<OtherImage onClick={() => setImageIndex(2)} src={images[2]} />
								<OtherImage onClick={() => setImageIndex(3)} src={images[3]} />
							</OtherImages>
						</Wrapper>
					</ImgContainer>
					<InfoContainer>
						<Title>{product.title}</Title>
						<Desc> {product.description} </Desc>
						<Price>Rs.&nbsp;{product.price}</Price>
						<AddContainer>
							<AmountContainer>
								<RemoveIcon onClick={decrementCount} />
								<Amount>{count}</Amount>
								<AddIcon onClick={incrementCount} />
							</AmountContainer>
							<Button onClick={addToCart}>ADD TO CART</Button>
						</AddContainer>
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
			<ReviewContainer>
				<ReviewWrapper>
					<ReviewTitle>Review</ReviewTitle>
					<OverallRating>
						<Rating>
							<Rate>{product.rating ? product.rating : "_"}</Rate>
							<OutOf>/5</OutOf>
						</Rating>
						<Star>
							<FaStar style={{ fontSize: "35px" }} />
							<FaStar style={{ fontSize: "35px" }} />
							<FaStar style={{ fontSize: "35px" }} />
							<FaStar style={{ fontSize: "35px" }} />
							<FaStar style={{ fontSize: "35px" }} />
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
												onClick={() => setRating(ratingValue)}
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
							value={reviewBody}
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

					<Reviews>
						{reviews.map((review) => (
							<Review key={review._id}>
								<User>
									<UserName>{review.name ? review.name : "Name here"}</UserName>
									<PostedDate>
										{calculateDaysPassed(review.date)} days ago
									</PostedDate>
									<UserRating>
										<GradeIcon />
										<GradeIcon />
										<GradeIcon />
										<GradeIcon />
									</UserRating>
								</User>
								<UserComment>{review.body}</UserComment>
							</Review>
						))}
					</Reviews>
				</ReviewWrapper>
			</ReviewContainer>
			{/* ////////////////////////////////////////////////////////////// */}
			{/* ////////////////////////////////////////////////////////////// */}
			{/* ////////////////////////////////////////////////////////////// */}

			<QandA loggedIn={props.loggedIn} />
			<Footer />
		</Container>
	);
};

export default ProductDetail;
