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

const OuterArea = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
`;

const Popup = styled.div`
    background-color: #fcf5f5;   
    width: 50%;
    height: 60vh;
    z-index: 10000;
`;

const CloseArea = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

const CloseButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: 0.5s;
    color: #000000;
    cursor: pointer;
    background-color: #ffffff;

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 80px 0;
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
    width: 80%;
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
            <OuterArea onClick={()=> props.setTrigger(false)}></OuterArea>
            <Popup>
                <CloseArea>
                    <CloseButton onClick={()=> props.setTrigger(false)}>
                        <CloseIcon/>
                    </CloseButton>
                </CloseArea>
                <Content>
                    <Title>NewsLetter</Title>
                    <Description>Get timely updates from your favourite products.</Description>
                    <InputContainer>
                        <Input placeholder = "Your Email"/>
                        <Button>
                            <SendIcon/>
                        </Button>
                    </InputContainer>
                </Content>
            </Popup>
        </Container>
    ) : "";
}

export default NewsletterPopup