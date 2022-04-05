import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 100px;
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	margin: auto;
	// position: relative;
`;

const WrapperLeft = styled.div`
	display: flex;
	flex: 1;
	height: 100vh;
	border-right: 1px solid black;
`;

const LeftDiv = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	/* background-color: yellow; */
`;

const linkStyle = {
	textDecoration: "none",
};

const LinkItem = styled.div`
	padding: 20px;
	color: #000000;

	&:hover {
		background-color: #c2d6d6;
	}
`;

const WrapperRight = styled.div`
	display: flex;
	/* justify-content: center; */
	flex-direction: column;
	flex: 3;
	/* background-color: green; */
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 600;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const RightDiv = styled.div`
	display: flex;
	flex: 9;
	/* background-color: grey; */
`;

const WrapContainer = styled.div`
	width: 100%;
	/* background-color: red; */
`;

const InfoSection = styled.div`
	width: 80%;
	min-width: 500 vw;
	height: 70vh;
	margin: 30px auto;
	border: 2px solid #000000;
`;

const SectionHeader = styled.div`
	width: 90%;
	margin: 10px auto;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #000000;
`;

const StartSection = styled.div`
	font-size: 24px;
	/* background-color: red; */
`;

const EndSection = styled.div`
	font-size: 18px;
	text-decoration: underline;
	color: #3385ff;
`;

const SectionBody = styled.div`
	width: 90%;
	padding: 10px;
	margin: auto;
	background-color: #c2d6d6;
`;

const BodyWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px 50%;
`;

const Field = styled.div``;

const FieldTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
`;

const FieldInput = styled.div`
	font-size: 15px;
`;

const UserAccount = (props) => {
	document.title = "Profile | TradeZilla";

	return (
		<Container>
			<TopBars loggedIn={props.loggedIn} />
			<Wrapper>
				<WrapperLeft>
					<LeftDiv>
						<Link to="../useraccount" style={linkStyle}>
							<LinkItem>Account Info</LinkItem>
						</Link>

						<Link to="../cart" style={linkStyle}>
							<LinkItem>Payment</LinkItem>
						</Link>

						<Link to="../cart" style={linkStyle}>
							<LinkItem>Order History</LinkItem>
						</Link>

						<Link to="../sellontradezilla" style={linkStyle}>
							<LinkItem>Sell on TradeZilla</LinkItem>
						</Link>
					</LeftDiv>
				</WrapperLeft>

				<WrapperRight>
					<Title>My Account</Title>
					<RightDiv>
						<WrapContainer>
							<InfoSection>
								<SectionHeader>
									<StartSection>Account Information</StartSection>
									<EndSection>Edit</EndSection>
								</SectionHeader>

								<SectionBody>
									<BodyWrapper>
										<Field>
											<FieldTitle>Full Name</FieldTitle>
											<FieldInput>Sagar Raj Thapaliya</FieldInput>
										</Field>

										<Field>
											<FieldTitle>Email Address</FieldTitle>
											<FieldInput>Sagar001@gmail.com</FieldInput>
										</Field>

										<Field>
											<FieldTitle>Date Of Birth</FieldTitle>
											<FieldInput>12/02/2020</FieldInput>
										</Field>
									</BodyWrapper>
								</SectionBody>
							</InfoSection>
						</WrapContainer>
					</RightDiv>
				</WrapperRight>
			</Wrapper>
			<Footer />
		</Container>
	);
};

export default UserAccount;
