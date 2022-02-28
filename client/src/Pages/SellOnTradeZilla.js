import styled from "styled-components"
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import Upload from "../Components/Upload";
import UploadIcon from '@mui/icons-material/Upload';
import { useState } from "react";

const Container = styled.div`
    width: 100%;
    background-color: #f2f2f2;
`;

const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 40px 0;
`;

const Wrapper = styled.div`
    background-color: #000000;
    width: 60%;
    margin: 80px auto;
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

const SubCategory = styled.div`
`;

const UploadButton = styled.div` //page reloads when changed to button *** needs to be fixed
    background-color: #000000;
    border: 2px white solid;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin-bottom: 25px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        background-color: #ffffff;
        color: #000000;
    }
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
`;

const TextArea= styled.textarea`
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

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }
`;

const SellOnTradeZilla = () => {

    const [uploadClicked, setUploadClicked] = useState(false);

    return (
        <Container>
            <TopBars/>
            <Title>SELL ON TRADEZILLA</Title>
            <Wrapper>
                <Form>
                    <ProductTitle>
                        <Label>Product&nbsp;Title:</Label>
                        <Input placeholder = "Product Title"/>
                    </ProductTitle>
                    <Price>
                        <Label>Price:</Label>
                        <Input placeholder = "Price"/>
                    </Price>
                    <Type>
                        <Category>
                            <Label>Category:</Label>
                            <Select>
                                <Option disabled selected>Select</Option>
                                <Option>Fashion</Option>
                                <Option>Electronics</Option>
                                <Option>Home and Kitchen</Option>
                                <Option>Groceries</Option>
                                <Option>Books</Option>
                            </Select>
                        </Category>
                        <SubCategory>
                            <Label>Sub Catergory:</Label>
                            <Select>
                            <Option disabled selected>Select</Option>
                            </Select>
                        </SubCategory>
                    </Type>
                    <UploadButton onClick = {() => setUploadClicked(true)}>
                        <UploadIcon/>
                        &nbsp;Upload Image
                    </UploadButton>
                    <Description>
                        <Label>Description:</Label>
                        <TextArea placeholder = "Description"/>
                    </Description>
                    <Button>POST YOUR PRODUCT</Button>
                </Form>
            </Wrapper>
            <Footer/>
            <Upload trigger = {uploadClicked} setTrigger = {setUploadClicked}/>
        </Container>
    )
}

export default SellOnTradeZilla