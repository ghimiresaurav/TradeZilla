import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";


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

const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Info = styled.div`
	flex: 3;
`;

const Product = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	background-color: #f2f2f2;
	// background-color: red;

	border-radius: 5px;
	margin: 5px 5px;
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

const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
`;

const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

const Search = (props) => {
	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<CartContent>
				<Title>SEARCH RESULTS FOR T-SHIRT</Title>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
								<Details>
									<ProductName>
										<b>Product:</b> JESSIE THUNDER SHOES
									</ProductName>
									<ProductId>
										<b>ID:</b> 93813718293
									</ProductId>
									<ProductColor color="black" />
									<ProductSize>
										<b>Size:</b> 37.5
									</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductPrice>Rs. 2000</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr />
					</Info>
				</Bottom>
			</CartContent>
			<Footer />
		</Container>
	);
};

export default Search;
