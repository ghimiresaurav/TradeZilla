import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Container = styled.div`
    width: 100%;
    // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center
`;

const Wrapper = styled.div`
    width: 90%;
    margin: 10px 0px 30px 0;
    border: 2px solid #000000;
    // background-color: green;
`;

const Title = styled.h1`
    margin: 20px;
`;


const Comments = styled.div`
    margin: 20px;
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 5px;
`;

const User = styled.div`
    display: flex;
    align-items: center;
    // background-color: green;
`;
const UserPosted = styled.div`
    display: flex;
    flex-direction: column;
`;

const Avatar = styled.div`
    margin-right: 10px;
    display: flex;
    align-items: center;
    // background-color: green;
    // width: 40px;
    // height: 40px;
    // font-size: 30px;
`;

const UserName = styled.h1`
    font-size: 14px;
`;

const PostedDate = styled.div`
    font-size: 12px; 
    // margin-left: 35px;
`;

const UserComment = styled.h2`
    font-size: 15px;
    font-weight: 400;
    padding: 10px 0;
`;

const Comment = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Comments</Title>
            <Comments>
                <User>
                    <Avatar>
                        <AccountCircleIcon/>
                    </Avatar>
                    <UserPosted>
                        <UserName>Sagar Sins</UserName>
                        <PostedDate>1 day ago</PostedDate> 
                    </UserPosted>
                </User>  
                <UserComment>I love this product. Very Very Sexy.</UserComment>
                <ThumbUpIcon/>
            </Comments>
        </Wrapper>
        
    </Container>
  )
}

export default Comment