import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 60%;
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 2000;
`;

const CloseButton = styled.div`
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: 0.5s;
    color: #000000;
    cursor: pointer;

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }
`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`;

const Input = styled.input`
    border: none;
    outline: none;
    padding-left: 20px;
    flex: 8;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #ffffff;
`;


const NewsletterPopup = (props) => {
    return (props.trigger) ? (
            <Container>
                <CloseButton>
                    <CloseIcon/>
                </CloseButton>
                <Title>NewsLetter</Title>
                <Description>Get timely updates from your favourite products.</Description>
                <InputContainer>
                    <Input placeholder = "Your Email"/>
                    <Button>
                        <SendIcon/>
                    </Button>
                </InputContainer>
            </Container>
        ) : "";
}

export default NewsletterPopup