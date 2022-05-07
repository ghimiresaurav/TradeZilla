import TopBars from "../Components/TopBars";
// import Products from '../Components/Products';
import Footer from "../Components/Footer";
import styled from "styled-components";
// import { Fashion, MensWear } from "../datas/Products/Fashion";
import Product from "../Components/Product";
import { useState } from "react";

const Container = styled.div`
	position: relative;
	width: 100%;
	background-color: #f2f2f2;
`;

const Wrapper = styled.div`
padding: 20px 0px 50px 0;
	width: 90%;
	margin: auto;
	// background-color: red;
`;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 700;
	letter-spacing: 3px;
	text-align: center;
	padding: 30px 0px;
`;

const ProductWrapper = styled.div`
	// width: 90%;
	margin: auto;
	display: flex;
	flex-wrap: wrap;
	// justify-content: space-between;
	justify-content: center;

	// background-color: red;
`;

const ProductList = (props) => {
	const [MensWear, setMensWear] = useState([]);

	(async () => {
		const resp = await fetch(
			`http://localhost:5000/products${window.location.pathname}`
		);
		const response = await resp.json();
		setMensWear(response.products);
	})();

	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<Wrapper>
				<Title>PRODUCTS</Title>
				<ProductWrapper>
					{MensWear.map((item) => (
						<Product id={item._id} item={item} key={item._id} />
					))}
				</ProductWrapper>
			</Wrapper>
		</Container>
	);
};

export default ProductList;
