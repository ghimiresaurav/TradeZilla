import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    width: 90%;
    margin: 10px 0px 30px 0;
    border: 2px solid #000000;
    // background-color: green;
`;

const Title = styled.h1`
    margin: 20px 0 0 20px;
`;

const SubTitle = styled.h5`
    margin: 10px 0 5px 20px;
    font-weight: 400;
    font-size: 17px;
`;

const Inquiries = styled.div`
`;

const Inquiry = styled.div`
    margin: 20px;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
`;

const QuestionArea = styled.div`
    display: flex;
    margin-bottom: 12px;
    // align-items: center;
`;

const Left = styled.label`
    margin-right: 20px;
    font-weight: 600;
    width: 60px;
`;

const Right = styled.div`
    // margin-right: 20px;
`;

const Question = styled.p`
    font-size: 18px;
    font-weight: 400;
`;

const User = styled.h3`
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
`;

const AnswerArea = styled.div`
    display: flex;
    // align-items: center;
`;

const Answer = styled.div`

`;


const CommentSection = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Inquiry</Title>
            <SubTitle>Ask questions about this project</SubTitle>
            <Inquiries>
                <Inquiry>
                    <QuestionArea>
                        <Left>
                            Question:
                        </Left>
                        <Right>
                            <Question>
                                Is it available in XL?
                            </Question>
                            <User>
                                Sagar Sins | 1 day ago
                            </User>
                        </Right>
                    </QuestionArea>
                    <AnswerArea>
                        <Left>
                            Answer:
                        </Left>
                        <Right>
                            <Answer>
                                Yes. Also available in XXL.
                            </Answer>
                            <User>
                                Seller | 1 day ago
                            </User>
                        </Right>
                    </AnswerArea>
                </Inquiry>
            </Inquiries>
        </Wrapper>
        
    </Container>
  )
}

export default CommentSection;