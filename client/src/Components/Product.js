import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

const Container = styled.div`
	// background-color: green;
	border: 1px solid #000000;
	margin: 20px;
	transition: 0.3s ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: 1px 1px 5px #888888;
	}
`;

const ProductArea = styled.div`
	flex: 1;
	margin: 10px;
	min-width: 270px;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfd;
	position: relative;
`;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: #ffffff;
	position: absolute;
`;

const Image = styled.img`
	height: 75%;
	z-index: 2;
`;

const Info = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: all 0.5s ease;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const ProductDetail = styled.div`
	// background-color: yellow;
	padding: 10px 0px;
`;

const ProductName = styled.h1`
	text-align: center;
	font-size: 20px;
`;

const Price = styled.h2`
	text-align: center;
	font-size: 17px;
	font-weight: 400;
`;

const linkStyle = {
	textDecoration: "none",
	color: "#000000",
};

const Product = ({ item }) => {
	return (
		<Link to={`/product/${item._id}`} style={linkStyle}>
			<Container>
				<ProductArea>
					<Circle />
					<Image src={item.images.split(", ")[0]} />
					<Info>
						<Icon>
							<ShoppingCartOutlinedIcon />
						</Icon>
						<Icon>
							<SearchIcon />
						</Icon>
						<Icon>
							<FavoriteBorderIcon />
						</Icon>
					</Info>
				</ProductArea>
				<ProductDetail>
					<ProductName>{item.title}</ProductName>
					<Price>Rs. {item.price}</Price>
				</ProductDetail>
			</Container>
		</Link>
	);
};

export default Product;
