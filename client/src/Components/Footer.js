import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {mobile} from '../responsive';
import { Link } from "react-router-dom";


const Container = styled.div`
    width: 100%;
    background-color: #000000;
    color: #ffffff;
`;

const Wrapper = styled.div`
    display: flex;
    width: 90%;
    margin: auto;
    padding: 50px 0;

    ${mobile({display: "block", width: "80%"})}
`;


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    
    ${mobile({marginBottom: "40px"})}
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s;
    overflow: hidden;
    position: relative; //important

    &:hover{
        transform: translateY(-5px);
    }

    ::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
        transform: skewX(25deg) translateX(50px);
        transition: 0.5s;
    }

    &:hover::before{
        transform: skewX(25deg) translateX(-50px);
    }
`;

const SocialLink = styled.a`
    text-decoration: none;
    color: #ffffff;
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    // align-items: center;

    ${mobile({marginBottom: "40px"})}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%; /*divide the list into two columns*/
    margin-bottom: 10px;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
    }
`;

const Right = styled.div`
    flex: 1;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const CopyRight = styled.div`
    width: 100%;
    padding: 0 30px 20px 0;
    display: flex;
    justify-content: flex-end;
    font-size: 13px;
`;

const Footer = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "#ffffff"
    };

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to = {"/"} style = {linkStyle}>
                        <Logo>
                            TradeZilla
                        </Logo>
                    </Link>
                    <Desc>Buy Sell Anything! We are here for your service. Proudly an ecommerce site since 2010.</Desc>
                    <SocialContainer>
                        <SocialIcon color = "3B5999">
                            <SocialLink href = "https://www.facebook.com" target="_blank">
                                <FacebookIcon/>
                            </SocialLink>
                        </SocialIcon>
                        <SocialIcon color = "E4405F">
                            <SocialLink  href = "https://www.twitter.com" target="_blank">   
                                <TwitterIcon/>
                            </SocialLink>
                        </SocialIcon>
                        <SocialIcon color = "55ACEE">
                            <SocialLink  href = "https://www.instagram.com" target="_blank">
                                <InstagramIcon/>
                            </SocialLink>
                        </SocialIcon>
                        <SocialIcon color = "E60023">
                            <SocialLink  href = "https://www.pinterest.com" target="_blank">
                                <PinterestIcon/>
                            </SocialLink>
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Order History</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Blog</ListItem>
                        <ListItem>Careers</ListItem>
                        <ListItem>About Us</ListItem>
                        <ListItem>Terms</ListItem>
                        <ListItem>Privacy Policy</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                        <RoomIcon style = {{marginRight: "10px"}}/>Hattiban, Lalitpur
                    </ContactItem>
                    <ContactItem>
                        <PhoneIcon style = {{marginRight: "10px"}}/>+977 01 5251234
                    </ContactItem>
                    <ContactItem>
                        <MailOutlineIcon style = {{marginRight: "10px"}}/>info@tradezilla.com
                    </ContactItem>
                    <Payment src = "https://i.ibb.co/Qfvn4z6/payment.png"/>
                </Right>
            </Wrapper>
            <CopyRight>
                © 2022. TradeZilla, Inc. All Rights Reserved.
            </CopyRight>
        </Container>
    )
}

export default Footer
