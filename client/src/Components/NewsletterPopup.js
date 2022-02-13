import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2000;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Popup = styled.div`
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    width: 50%;
    height: 60vh;
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
                <Popup>
                    <CloseButton onClick={()=> props.setTrigger(false)}>
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
                </Popup>
            </Container>
        ) : "";
}

export default NewsletterPopup