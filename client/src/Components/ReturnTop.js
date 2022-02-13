import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {mobile} from '../responsive';
import {animateScroll as scroll} from 'react-scroll';

const Container = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    margin: 50px;
    cursor: pointer;

    ${mobile({display: "none"})}
`;

const ArrowContainer = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;

    &:hover{
        opacity: 0.8;
        transform: scale(1.1);
    }
`;

const ReturnTop = () => {

    const sendTop = () =>{
        scroll.scrollToTop();
    }

    return(
        <Container>
            <ArrowContainer onClick = {sendTop}>
                <KeyboardArrowUpIcon/>
            </ArrowContainer>
        </Container>
    )
}

export default ReturnTop