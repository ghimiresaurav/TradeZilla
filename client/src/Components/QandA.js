import { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 85%;
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

const PostAQuestion = styled.form`
	// background-color: red;
	margin: 20px;
`;

const QuestionField = styled.textarea`
	width: 100%;
	border: none;
	border-bottom: 2px solid #000000;
	padding: 10px 0 0 10px;
	outline: none;
	margin: 10px 0;
	border-color: #f2f2f2;
	resize: none;

	&:focus {
		border-color: #000000;
	}
`;

const Inquiries = styled.div``;

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

const Answer = styled.div``;

const AnswerButton = styled.button`
	padding: 10px 20px;
	border: 2px solid #000000;
	cursor: pointer;
	transition: all 0.2s ease-in;
	font-weight: 500;
	display: ${({ answerClicked }) => (answerClicked ? "none" : "")};

	&:hover {
		background-color: #000000;
		color: #ffffff;
	}
`;

const PostAnswer = styled.div`
	width: 100%;
	background-color: #f2f2f2;
	// display: "";
	// display: ${({ answerClicked }) => (answerClicked ? "" : "none")};
`;

const TextField = styled.textarea`
	resize: vertical;
	width: 100%;
	border-radius: 5px;
	padding: 10px;
	margin: 10px 0;
	min-height: 150px;
`;

const Buttons = styled.div`
	width: 100%;
	// background-color: green;
	display: flex;
	justify-content: right;
`;

const PostButton = styled(AnswerButton)`
	width: 90px;
	margin-right: 20px;
	// background-color: #ffffff;
`;

const CancelButton = styled(AnswerButton)`
	width: 90px;
`;

const Login = styled.div`
	margin: 20px;
`;

const LoginButton = styled.button`
	padding: 10px 20px;
	background-color: #000000;
	color: #ffffff;
	border: none;
	cursor: pointer;
	transition: 0.2s ease-in-out;

	&:hover{
		transform: scale(1.01);
	}
`;

const QandA = (props) => {
	const [questionClicked, setQuestionClicked] = useState(false);
	const [answerClicked, setAnswerClicked] = useState(false);

	console.log(questionClicked);

	const [data, setData] = useState(
		{
          qsn: ""
		}
	)

	function handle(e) {
       const newData = {...data}
	   newData[e.target.id] = e.target.value
	   setData(newData)
	   console.log(newData)
	} 

	const handleSubmit = async (e) =>  {
		const productID = window.location.pathname.split("product/")[1];

		e.preventDefault();
		const resp = await fetch(`http://localhost:5000/s/v/add-query/${productID}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				qsn: data.qsn								
			}),
		});

		const response = await resp.json();
		console.log(response);
	}

	return (
		<Container>
			<Wrapper>
				<Title>Inquiry</Title>
				<SubTitle>Ask questions about this project</SubTitle>
				{props.loggedIn ? (
					<PostAQuestion onSubmit={(e)=> handleSubmit(e)}>
						<QuestionField
						    onChange={(e)=>handle(e)}
							id = "qsn"
							value = {data.qsn}
							placeholder="Have a question? Ask here..."
							onClick={() => setQuestionClicked(true)}
						></QuestionField>
						{questionClicked ? (
							<Buttons>
								<PostButton>Post</PostButton>
								<CancelButton onClick={() => setQuestionClicked(false)}>
									Cancel
								</CancelButton>
							</Buttons>
						) : null}
					</PostAQuestion>
				) : (
					<Link to={"/login"}>
						<Login>
							<LoginButton>Login to ask question</LoginButton>
						</Login>
					</Link>
				)}
				<Inquiries>
					<Inquiry>
						<QuestionArea>
							<Left>Question:</Left>
							<Right>
								<Question>Is it available in XL?</Question>
								<User>Kabin Bhandari | 1 day ago</User>
							</Right>
						</QuestionArea>
						<AnswerArea>
							<Left>Answer:</Left>
							<Right>
								<Answer>Yes. Also available in XXL.</Answer>
								<User>Seller | 1 day ago</User>
							</Right>
						</AnswerArea>
					</Inquiry>

					<Inquiry>
						<QuestionArea>
							<Left>Question:</Left>
							<Right>
								<Question>Is it available in XL?</Question>
								<User>Sagar Thapa | 1 day ago</User>
							</Right>
						</QuestionArea>
						<AnswerArea>
							{answerClicked ? (
								<PostAnswer>
									<TextField placeholder="Answer here..."></TextField>
									<Buttons>
										<PostButton>Post</PostButton>
										<CancelButton onClick={() => setAnswerClicked(false)}>
											Cancel
										</CancelButton>
									</Buttons>
								</PostAnswer>
							) : (
								<AnswerButton onClick={() => setAnswerClicked(true)}>
									Answer
								</AnswerButton>
							)}
						</AnswerArea>
					</Inquiry>
				</Inquiries>
			</Wrapper>
		</Container>
	);
};

export default QandA;
