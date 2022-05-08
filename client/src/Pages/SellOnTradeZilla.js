import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import Upload from "../Components/Upload";
import UploadIcon from "@mui/icons-material/Upload";
import { useState } from "react";
import categories from "../datas/MenuItems";
import handleJWTExpiry from "../utils/handleJWTExpiry";
import { tab, vTab, mobile } from "../responsive";
import logo from "../images/logo.png";
import Pill from "../Components/Pill";
import { display } from "@mui/system";

const Container = styled.div`
  width: 100%;
  // background-color: #f2f2f2;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://pick-kart.com/wp-content/uploads/2022/02/Selling-A-Business.jpeg")
      center;
  position: absolute;
`;

const Wrapper = styled.div`
  width: 100%;
  margin: 30px auto;
  position: relative;
  top: 100px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-size: 50px;
  font-weight: 200;
  text-align: center;
`;

const Box = styled.div`
  width: 85%;
  background-color: #000000;
  display: flex;
  align-items: center;
  margin: 0 auto 30px auto;
  border-radius: 10px;

  ${tab({
    flexDirection: "column",
  })}
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // background-color: yellow;
  padding: 0 30px;

  ${tab({
    height: "100px",
    padding: "30px 0",
  })}

  ${vTab({
    width: "90%",
  })}
`;

const LogoImg = styled.img`
  // width: 400px;
  // display: flex;
  // justify-content: center;
`;

const LeftHeading = styled.h2`
  color: #ffffff;
  text-align: center;
  font-weight: 300;
`;

const Form = styled.form`
  flex: 2;
  background-color: #f2f2f2;
  padding: 40px;
  opacity: 1;
  width: 100%;

  ${mobile({
    width: "90%",
  })}
`;

const ProductTitle = styled.div`
  display: flex;
  // align-items: center;
  margin-bottom: 25px;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;

  ${mobile({
    width: "100%",
  })}
`;

const ErrorText = styled.div`
  color: red;
`;

const PriceQuantity = styled.div`
  display: flex;

  ${mobile({
    flexDirection: "column",
  })}
`;

const Price = styled.div`
  display: flex;
  // align-items: center;
  margin-bottom: 25px;
  margin-right: 25px;
  flex-direction: column;
`;

const Type = styled.div`
  display: flex;
  margin-bottom: 25px;
  // justify-content: space-between;

  ${mobile({
    flexDirection: "column",
  })}
`;

const Category = styled.div`
  margin-right: 30px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #000000;
  margin-bottom: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-bottom: 25px;
`;

const Option = styled.option`
  padding: 10px;
`;

const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
`;

const Quantity = styled.div`
  display: flex;
  // align-items: center;
  margin-bottom: 25px;
  flex-direction: column;
`;

const AmountInput = styled.input`
  width: 150px;
  height: 40px;
  border-radius: 5px;
  padding-left: 10px;

  ${mobile({
    width: "100%",
  })}
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
    border: 2px black solid;
  }
`;

const UploadedImage = styled.div`
  border: 1px solid #000000;
  height: 180px;
  display: flex;
  align-items: center;
  padding: 15px;
`;

const ShowImage = styled.img`
  margin-right: 15px;
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 2px solid #000000;
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
  font-weight: 300;
  border: 2px solid #ffffff;
  transition: 0.3s ease-in-out;
  opacity: 0.8;

  &:hover {
    // background-color: #000000;
    // color: #ffffff;
    border: 2px solid #000000;
    opacity: 1;
  }
`;

const SellOnTradeZilla = (props) => {
  document.title = "Sell On TradeZilla | TradeZilla";

  const [errorText, setErrorText] = useState({
    productTitle: "",
    productPrice: "",
  });

  const [uploadClicked, setUploadClicked] = useState(false);

  const [fileList, setFileList] = useState([]);

  const [values, setValues] = useState({
    title: "",
    price: "",
    quantity: "",
    description: "",
  });

  const [category, setCategory] = useState("Fashion");
  const [subCategory, setSubCategory] = useState("mens-wear");
  const [formattedSubCat, setFormattedSubCat] = useState("mens-wear");
  const [success, setSuccess] = useState(false);
  const [showPill, setShowPill] = useState(false);
  const [pillText, setPillText] = useState("");

  // Update Category
  const updateCategory = (e) => {
    console.log("adsfasdf");
    const rawCategory = e.target.value;
    setCategory(rawCategory);
    updateSubCategory({
      target: { value: categories[e.target.value][0].title },
    });
  };
  // Update Sub-Category
  const updateSubCategory = (e) => {
    console.log(e.target.value);
    const rawSubCategory = e.target.value;
    const formattedSubCategory = rawSubCategory
      .toLowerCase()
      .replaceAll(" ", "-")
      .replaceAll("&", "and");
    setFormattedSubCat(formattedSubCategory);
    setSubCategory(rawSubCategory);
    console.log(formattedSubCategory);
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const displayPill = (success, message) => {
    setSuccess(success);
    setPillText(message);
    setShowPill(true);

    setTimeout(() => {
      setShowPill(false);
    }, 3000);
    return;
  };

  const postProduct = async (e) => {
    e.preventDefault();

    if (!values.title)
      return displayPill(false, "Product Title can not be empty.");

    if (values.title.length < 10)
      return displayPill(false, "Title must be at least 10 character long.");

    if (!values.price) return displayPill(false, "Price can not be empty.");

    if (!values.quantity)
      return displayPill(false, "Quantity can not be empty.");

    if (!values.description)
      return displayPill(false, "Description can not be empty.");

    if (values.description.length < 10)
      return displayPill(
        false,
        "Description must be at least 10 character long."
      );

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("price", values.price);
    formData.append("category", category.toLowerCase().replaceAll(" ", "-"));
    formData.append("subCategory", formattedSubCat);
    formData.append("quantity", values.quantity);
    formData.append("description", values.description);

    Array.from(fileList).forEach((file) => formData.append(`images`, file));
    formData.append("filesLength", fileList.length);

    if (fileList.length == 0)
      return displayPill(false, "You need to select at least one image.");
    if (fileList.length > 4)
      return displayPill(false, "You can upload at most four images.");

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
    handleJWTExpiry(response);
    displayPill(response.success, response.message);
    if (response.success) {
      setValues({ title: "", price: "", quantity: "", description: "" });
      setCategory("Fashion");
      setSubCategory("mens-wear");
      setFileList([]);
    }
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
      <Wrapper>
        <Title>SELL ON TRADEZILLA</Title>
        <Box>
          <LeftContainer>
            <LogoImg src={logo} alt=""></LogoImg>
            <LeftHeading>
              {" "}
              Grow You Business with <b>TradeZilla</b>
            </LeftHeading>
          </LeftContainer>
          <Form>
            <ProductTitle>
              <Label>Product&nbsp;Title:</Label>
              <Input
                name="title"
                onChange={handleChange}
                value={values.title}
                placeholder="Product Title"
                required="true"
              />
              <ErrorText>{errorText.productTitle}</ErrorText>
            </ProductTitle>
            <PriceQuantity>
              <Price>
                <Label>Price (in Rs):</Label>
                <Input
                  name="price"
                  type="number"
                  onChange={handleChange}
                  value={values.price}
                  placeholder="Price"
                  required="true"
                />
              </Price>
              <Quantity>
                <Label>Qty:</Label>
                <AmountInput
                  name="quantity"
                  type="number"
                  value={values.quantity}
                  onChange={handleChange}
                  required="true"
                />
              </Quantity>
            </PriceQuantity>
            <Type>
              <Category>
                <Label>Category:</Label>
                <Select
                  name="category"
                  value={category}
                  onChange={updateCategory}
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
            <UploadArea>
              <UploadButton onClick={() => setUploadClicked(true)}>
                <UploadIcon />
                &nbsp;Upload Image
              </UploadButton>
              <UploadedImage>
                {fileList.map((file) => {
                  return <ShowImage src={URL.createObjectURL(file)} />;
                })}
              </UploadedImage>
            </UploadArea>
            <Description>
              <Label>Description:</Label>
              <TextArea
                name="description"
                onChange={handleChange}
                value={values.description}
                placeholder="Description"
                required="true"
              />
            </Description>
            <Button onClick={postProduct}>POST YOUR PRODUCT</Button>
          </Form>
        </Box>
        <Footer />
        <Upload
          files={fileList}
          setFiles={setFileList}
          trigger={uploadClicked}
          setTrigger={setUploadClicked}
        />
      </Wrapper>
      <Pill display={showPill} text={pillText} success={success} />
    </Container>
  );
};

export default SellOnTradeZilla;
