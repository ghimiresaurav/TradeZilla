import TopBars from "../Components/TopBars";
// import Products from '../Components/Products';
import Footer from "../Components/Footer";
import styled from "styled-components";
// import { Fashion, MensWear } from "../datas/Products/Fashion";
import Product from "../Components/Product";
import { useState } from "react";

const Container = styled.div`
	position: absolute;
	top: 100px;
	width: 100%;
`;

const Wrapper = styled.div`
	padding: 30px 0px 50px 0;
	width: 90%;
	margin: auto;
	// background-color: red;
`;

const Title = styled.h1`
	font-size: 50px;
	font-weight: 500;
	letter-spacing: 3px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Filter = styled.div`
	margin: 20px;
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
`;

const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
`;

const Option = styled.option``;

const ProductContainer = styled.div`
	width: 100%;
	background-color: green;
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
	document.title = props.title + " | TradeZilla";

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
				<Title>{props.title}</Title>
				<ProductWrapper>
					{MensWear.map((item) => (
						<Product id={item._id} item={item} key={item._id} />
					))}
				</ProductWrapper>
				{/* </ProductContainer> */}
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default ProductList;
