import styled from 'styled-components'

const Container = styled.div`
    height: 25px;
    background-color: #ded9d9;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return ( 
        <Container>
            <marquee width = "100%" direction = "left">Free Delivery on Order over Rs. 3000!</marquee>
        </Container>
    )
}

export default Announcement
