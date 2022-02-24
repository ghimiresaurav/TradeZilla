import styled from "styled-components"
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";

const Container = styled.div`
    position: relative;
    width: 100%;
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
    margin: auto;
`;

const Form = styled.form`
    width: 80%;
    margin: auto;
    padding: 20px 0;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
`;

const Category = styled.div`
    margin-bottom: 10px;
`;

const Label = styled.label`
    color: #ffffff;
`;

const Select = styled.select`

`;

const Option = styled.option`

`;

const SubCategory = styled.div`
    margin-bottom: 20px;
`;

const UploadArea = styled.div`
    margin-bottom: 20px;
    cursor: pointer;
    // background-color: green;
    border: 2px white solid;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const UploadImage = styled.input`
    background-color: green;
    width: 150px;
    height: 50px;
`;

const UploadLabel = styled.label`
    // padding: 10px;
    color: #ffffff;
    cursor: pointer;

    &:hover{
        color: #000000;
    }
`;


const Button = styled.button`
    width: 100%;
    height: 60px;
    padding-left: 10px;
`;

const SellOnTradeZilla = () => {
  return (
    <Container>
        <TopBars/>
        <Title>SELL ON TRADEZILLA</Title>
        <Wrapper>
            <Form>
                <Input placeholder = "Product Title"/>
                <Input placeholder = "Price"/>
                <Category>
                    <Label>Catergory:</Label>
                    <Select>
                        <Option></Option>
                    </Select>
                </Category>
                <SubCategory>
                    <Label>Sub Catergory:</Label>
                    <Select>
                        <Option></Option>
                    </Select>
                </SubCategory>
                <UploadArea>
                    <UploadImage type = "file" id = "file" accept="image/*" hidden/>
                    {/* <Button for = "file">Upload Image</Button> */}
                    <UploadLabel for = "file">Upload Image</UploadLabel>
                </UploadArea>
                <Button>POST YOUR PRODUCT</Button>
            </Form>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default SellOnTradeZilla