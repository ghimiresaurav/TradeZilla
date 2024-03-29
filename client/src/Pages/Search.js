import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getThumbnailFromImage from "../utils/getThumbnail";
import GradeIcon from "@mui/icons-material/Grade";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";

const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 100px;
	/* background-color: yellow; */
`;

const CartContent = styled.div`
	// padding-top: 80px;
	margin: 30px 50px;
	// background-color: yellow;
`;

const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

// const Top = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	padding: 20px;
// `;
const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 15px;
	// background-color: blue;
`;

const Info = styled.div`
	width: 100%;
	// background-color: purple;
`;

const Product = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 30px;
	background-color: #f2f2f2;
	// background-color: red;
	height: 260px;

	border-radius: 5px;
	margin: 10px 5px;
	transition: ease-in-out 0.5s;

	&:hover {
		transform: scale(1.01);
		box-shadow: 1px 1px 5px #888888;
	}
`;

const ProductDetail = styled.div`
	// width: 20px;
	display: flex;
	align-items: center;
	// background-color: red;
	height: 100%;
	padding: 0 20px;
`;

const ImageContainer = styled.div`
	// position: absolute;
	width: 400px;
	height: 200px;
	// background-color: green;
	display: flex;
`;

const Image = styled.img`
	width: 100%;
	object-fit: cover;
	// background-color: red;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	justify-content: space-around;
	// height: 100%;
`;

const ProductName = styled.span`
	font-size: 30px;
	margin-bottom: 10px;
	height: 40px;
	// background-color: yellow;
	overflow: hidden;
`;

const ProductDescription = styled.span`
	height: 100px;
	// width: 400px;
	// text-overflow: ellipsis;
	overflow: hidden;
	// white-space: nowrap;
	// background-color: yellow;
`;

const ProductRating = styled.span``;

const PriceDetail = styled.div`
	// width: 200px;
	height: 100%;
	display: flex;
	// flex-direction: column;
	align-items: center;
	justify-content: center;
	// background-color: pink;
	padding: 0 40px;
`;

const ProductPrice = styled.p`
	font-size: 30px;
	font-weight: 200;
`;

const Hr = styled.hr`
	background-color: #000;
	border: none;
	height: 1px;
`;

const linkStyle = {
	textDecoration: "none",
	color: "#000000",
};

const Search = (props) => {
	const path = window.location.pathname;
	const tempSearchProduct = path.split("/").pop();
	const searchQuery = decodeURI(tempSearchProduct); //removes %20

	// console.log("Path: ", path);
	// console.log("Search Product: ", tempSearchProduct);
	console.log("Search Product without Percent: ", searchQuery);

	document.title = "Search | " + searchQuery;

	const [searchItem, setSearchItem] = useState([]);

	// const searchProduct = () =>{
	useEffect(() => {
		(async () => {
			const resp = await fetch(`http://localhost:5000/search/${searchQuery}`);
			const response = await resp.json();
			if (response.success) setSearchItem(response.products);
			setSearchItem(response.products);
		})();
	}, [searchQuery]);
	// }

	const showRating = (rating) => {
		const i = 0;
		console.log(rating);
		{
			while (i < rating) {
				return <GradeIcon style={{ fontSize: "25px" }} />;
				i++;
			}
		}
	};

	console.log(searchItem);

	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<CartContent>
				<Title>
					SEARCH RESULTS FOR <b>{searchQuery}</b>
				</Title>
				<Bottom>
					<Info>
						{searchItem.map((item) => (
							<Link to={`/product/${item._id}`} style={linkStyle}>
								<Product>
									<ProductDetail>
										<ImageContainer>
											<Image
												src={getThumbnailFromImage(item.images.split(", ")[0])}
											/>
										</ImageContainer>
										<Details>
											<ProductName>
												<b>{item.title} </b>
											</ProductName>
											<ProductDescription>
												{item.description}
											</ProductDescription>
											{/* <ProductRating>
												<GradeOutlinedIcon
													style={{ fontSize: "25px", color: "#FFD700" }}
												/>
												{showRating(item.rating)}
											</ProductRating> */}
										</Details>
									</ProductDetail>
									<PriceDetail>
										<ProductPrice>Rs. {item.price}</ProductPrice>
									</PriceDetail>
								</Product>
								{/* <Hr/> */}
							</Link>
						))}
					</Info>
				</Bottom>
			</CartContent>
			<Footer />
		</Container>
	);
};

export default Search;
