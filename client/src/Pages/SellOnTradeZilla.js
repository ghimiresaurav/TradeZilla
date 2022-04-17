import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import Upload from "../Components/Upload";
import UploadIcon from "@mui/icons-material/Upload";
import { useState } from "react";
import categories from "../datas/MenuItems";


const Container = styled.div`
	width: 100%;
	background-color: #f2f2f2;
	// background: linear-gradient(
	// 	rgba(255, 255, 255, 0.5),
	// 	rgba(255, 255, 255, 0.5)
	// ),
	// url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
	// 	center;
	position: absolute;
	top: 100px;
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	margin: 40px 0;
`;

const Wrapper = styled.div`
	background-color: #000000;
	width: 60%;
	margin: 10px auto;
`;

const Form = styled.form`
	width: 80%;
	margin: auto;
	padding: 40px 0;
`;

const ProductTitle = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 25px;
`;

const Input = styled.input`
	width: 100%;
	height: 40px;
	border-radius: 5px;
	padding-left: 10px;
`;

const Price = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 25px;
`;

const Type = styled.div`
	display: flex;
	margin-bottom: 25px;
	// justify-content: space-between;
`;

const Category = styled.div`
	margin-right: 30px;
`;

const Label = styled.label`
	color: #ffffff;
	margin-right: 10px;
`;

const Select = styled.select`
	padding: 10px;
`;

const Option = styled.option`
	padding: 10px;
`;

const SubCategory = styled.div``;

const Quantity = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 25px;
`;

const AmountInput = styled.input`
	height: 40px;
	border-radius: 5px;
	padding-left: 10px;
`;


const UploadArea = styled.div`
	margin-bottom: 25px;
`;

const UploadButton = styled.div`
	//page reloads when changed to button *** needs to be fixed
	background-color: #000000;
	border: 2px white solid;
	width: 150px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 10px;
	color: #ffffff;
	cursor: pointer;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #ffffff;
		color: #000000;
	}
`;

const UploadedImage = styled.div`
	border: 1px solid #ffffff;
	height: 120px;
`;

const Description = styled.div`
	display: flex;
	flex-direction: column;
`;

const TextArea = styled.textarea`
	resize: vertical;
	width: 100%;
	border-radius: 5px;
	padding: 10px;
	margin: 10px 0;
	min-height: 150px;
`;

const Button = styled.button`
	margin-top: 40px;
	width: 100%;
	height: 60px;
	padding-left: 10px;
	background-color: #ffffff;
	color: #000000;
	font-size: 30px;
	cursor: pointer;
	font-weight: 1000;
	border: 2px solid #ffffff;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #000000;
		color: #ffffff;
	}
`;

const SellOnTradeZilla = (props) => {
	document.title = "Sell On TradeZilla | TradeZilla";

	const [uploadClicked, setUploadClicked] = useState(false);

	const [fileList, setFileList] = useState([]);

	const [values, setValues] = useState({
		title: "",
		price: "",
		quantity: "",
		description: "",
	});

	const [category, setCategory] = useState("Fashion");
	const [subCategory, setSubCategory] = useState("Mens Wear");

	//UpdateCategory
	const updateCategory = (e) => {
		setCategory(e.target.value);
		setSubCategory(categories[e.target.value][0].title);
	};

	const updateSubCategory = (e) => setSubCategory(e.target.value);
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const postProduct = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", values.title);
		formData.append("price", values.price);
		formData.append("category", category);
		formData.append("subCategory", subCategory);
		formData.append("quantity", values.quantity);
		formData.append("description", values.description);

		Array.from(fileList).forEach((file) => formData.append(`images`, file));
		formData.append("filesLength", fileList.length);

		console.log(
			formData.get("title"),
			formData.get("price"),
			formData.get("category"),
			formData.get("subCategory"),
			formData.get("quantity"),
			formData.get("description")
		);

		const resp = await fetch("http://localhost:5000/s/v/add-product", {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "token"
        )} ${localStorage.getItem("userId")}`,
      },
      body: formData,
    });
    const response = await resp.json();
    console.log(response);
	};

	const showSubCategories = () => {
		return (
			<>
				<Select
					name="subCategory"
					value={subCategory}
					onChange={updateSubCategory}
				>
					{categories[category].map((item, index) => (
						<Option key={index} value={item.title}>
							{item.title}
						</Option>
					))}
				</Select>
			</>
		);
	};

	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<Title>SELL ON TRADEZILLA</Title>
			<Wrapper>
				<Form>
					<ProductTitle>
						<Label>Product&nbsp;Title:</Label>
						<Input
							name="title"
							onChange={handleChange}
							value={values.name}
							placeholder="Product Title"
						/>
					</ProductTitle>
					<Price>
						<Label>Price:</Label>
						<Input
							name="price"
							type="number"
							onChange={handleChange}
							value={values.name}
							placeholder="Price"
						/>
					</Price>
					<Type>
						<Category>
							<Label>Category:</Label>
							<Select
								name="category"
								value={category}
								onChange={updateCategory}
								value={values.name}
							>
								{/* <Option disabled selected>Select</Option> */}
								<Option value="Fashion">Fashion</Option>
								<Option value="Sports">Sports</Option>
								<Option value="Electronics">Electronics</Option>
								<Option value="Households">Households</Option>
								<Option value="Music">Music</Option>
								<Option value="Groceries">Groceries</Option>
								<Option value="Books">Books</Option>
							</Select>
						</Category>
						<SubCategory>
							<Label>Sub Catergory:</Label>
							{showSubCategories()}
						</SubCategory>
					</Type>
					<Quantity>
						<Label>Qty:</Label>
						<AmountInput name="quantity" type="number" onChange={handleChange}/>
					</Quantity>
					<UploadArea>
						<UploadButton onClick={() => setUploadClicked(true)}>
							<UploadIcon />
							&nbsp;Upload Image
						</UploadButton>
						<UploadedImage></UploadedImage>
					</UploadArea>
					<Description>
						<Label>Description:</Label>
						<TextArea
							name="description"
							onChange={handleChange}
							value={values.name}
							placeholder="Description"
						/>
					</Description>
					<Button onClick={postProduct}>POST YOUR PRODUCT</Button>
				</Form>
			</Wrapper>
			<Footer />
			<Upload
				files={fileList}
				setFiles={setFileList}
				trigger={uploadClicked}
				setTrigger={setUploadClicked}
			/>
		</Container>
	);
};

export default SellOnTradeZilla;
