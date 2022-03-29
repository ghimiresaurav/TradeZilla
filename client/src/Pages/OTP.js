import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { useState } from "react";
import AccountVerified from "../Components/SuccessPopup/AccountVerified_OTP";
// import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	position: absolute;
	// top: 100px;
`;

const ContentArea = styled.div`
	width: 100%;
`;

const OTPArea = styled.div`
	width: 30%;
	min-width: 300px;
	margin: 50px auto;
	border: 2px solid #000000;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	margin: auto;
	padding: 20px 0;
`;

const Title = styled.h1`
	display: flex;
	justify-content: center;
	margin-bottom: 15px;
`;

const Label = styled.label`
	// background-color: green;
	margin-bottom: 15px;
`;

const InputOuterArea = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	// background-color: green;
	margin-bottom: 15px;
`;

const InputArea = styled.div`
	height: 40px;
	width: 80%;
	max-width: 500px;
	// padding: 0 15px;
	display: flex;
	justify-content: center;
	// justify-content: space-between;
	// background-color: blue;
`;

const Input = styled.input`
	// width: 20%;
	width: 40px;
	padding-left: 12px;
	font-size: 20px;
	border: 2px solid #000000;
	border-radius: 3px;
	margin: 0px 3px;
`;

const Message = styled.p`
	// color: red;
	color: ${(props) => props.setColor};
	// margin-top: -4px;
	margin-bottom: 10px;
	font-size: 14px;
`;

const Button = styled.button`
	// height: 40px;
	cursor: pointer;
	margin-bottom: 15px;
	color: #ffffff;
	background-color: #000000;
	font-size: 20px;
	font-weight: 600;
	border: 2px solid #000000;
	padding: 10px 0;
	transition: 0.3s ease-in-out;

	&:hover {
		background-color: #ffffff;
		color: #000000;
	}
`;

const Resend = styled.p`
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		opacity: 0.8;
	}
`;


const OTP = (props) => {
	const [msgToUser, setMsgToUser] = useState("");
	
	const [otp, setOtp] = useState(new Array(6).fill(""));
	
	const [accountVerifiedPopup, setAccountVerifiedPopup] = useState(false);
	

	const submitOTP = async () => {
		const resp = await fetch("http://localhost:5000/s/verify-email", {
			method: "POST",
			headers: {
				authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				id: localStorage.getItem("userId"),
				otp: otp.join(""),
			}),
		});
		const response = await resp.json();
		console.log(response);
		if (response.success) {
			setMsgToUser("");
			setAccountVerifiedPopup(true);
			localStorage.setItem("isActive", true);
		}
    else{
		setMsgToUser("The OTP you have entered is invalid.");
    }
	};

	const handleChange = (element, index) => {
		if (isNaN(element.value)) return false;

		setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

		//Focus next input
		if (element.nextSibling) {
			element.nextSibling.focus();
		}
	};

	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<ContentArea>
				<OTPArea>
					<Wrapper>
						<Title>E-mail Verification</Title>
						<Label>
							An e-mail with a 6-digit verification code was just sent to{" "}
							<b>{localStorage.getItem("email")}</b>
						</Label>
						<InputOuterArea>
							<InputArea>
								{otp.map((data, index) => {
									return (
										<Input
											type="text"
											maxLength="1"
											key={index}
											value={data}
											onChange={(e) => handleChange(e.target, index)}
											onFocus={(e) => e.target.select()}
										/>
									);
								})}
							</InputArea>
						</InputOuterArea>
						<p>OTP Entered - {otp.join("")}</p>
            			<Message>{msgToUser}</Message>
						<Button onClick={submitOTP}>Verify</Button>
						<Label>
							Didn't Receive a code?&nbsp;
							 <Resend setColor = "red" onClick={() => {setMsgToUser("New OTP has been sent");}}>Request Again</Resend>
						</Label>
					</Wrapper>
				</OTPArea>
			</ContentArea>
			<Footer />
			<AccountVerified trigger={accountVerifiedPopup} setTrigger={setAccountVerifiedPopup} />
		</Container>
	);
};

export default OTP;
