import styled from "styled-components";
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { useState } from "react";
import { bestSellerItems } from "../datas/BestSellerItems";

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    // background-color: coral;
    position: relative;
    // overflow-x: auto;
    // z-index: 200000;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "40px"};
    right: ${props=> props.direction === "right" && "40px"};
    margin: auto;
    cursor: pointer;
    // opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    // align-items: center;
    // justify-content: space-between;
    // justify-content: center;
    padding: 0 20px;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    // flex: 1;
    width: 50vw;
    height: 100%;
    display: flex;
    justify-content: center;
    // margin-right: 20px;
    // background-color: red;

`;

const Image = styled.img`
    height: 80%;
    // background-color: green;
`;

const InfoContainer = styled.div`
    // flex: 1;
    width: 50vw;
    padding: 50px 90px 50px 50px;
    // background-color: green;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }
`;


const BestSellers = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if (direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        } 
    };

    return (
        <Container>
            <Arrow direction = "left" onClick = {()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {bestSellerItems.map((item) => (
                    <Slide bg = {item.bg} key = {item.id}> {/*We need to include a unique key while using map; it will work without it but shows warning in the console*/}
                        <ImgContainer>
                            <Image src = {item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction = "right" onClick = {()=>handleClick("right")}>
                <ArrowRightOutlinedIcon/>
            </Arrow> 
        </Container>
    )
}

export default BestSellers
