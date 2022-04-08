import styled from 'styled-components'
import { Link } from "react-router-dom";

const Container = styled.div`
    flex: 1;
    margin: 0 10px 15px 0;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background-color: ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #ffffff;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;



const TopDealsItem = ({item}) => {
    return (
        <Container>
            <Link to = {`/product-list/${item.category}`}>
                <Image src = {item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default TopDealsItem