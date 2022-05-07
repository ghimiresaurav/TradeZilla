import { useEffect, useState } from "react";
import styled from "styled-components";
import handleJWTExpiry from "../../utils/handleJWTExpiry";

const Title = styled.h1`
	font-size: 40px;
	font-weight: 500;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

const RightDiv = styled.div`
	display: flex;
	flex: 9;
`;

const WrapContainer = styled.div`
	width: 100%;
`;

const InfoSection = styled.div`
	width: 80%;
	min-width: 500 vw;
	height: 70vh;
	margin: 3px auto;
	border: 1px solid #000000;
	padding: 10px 0;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
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
	background-color: #f2f2f2;
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

const AccountInfo = () => {
	const [userInfo, setUserInfo] = useState({});

	const getFormattedDateTime = (dateTime, extra) => {
		const dt = new Date(dateTime);
		const date = `${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`;

		// const time = `${dt.getHours()}:${dt.getMinutes()}`;
		// if(extra !=== "dob")
		// return `${date} - ${time}`;

		return date;
	};

	useEffect(async () => {
		const resp = await fetch(`http://localhost:5000/s/user-info`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem(
					"token"
				)} ${localStorage.getItem("userId")}`,
			},
		});
		const response = await resp.json();
		handleJWTExpiry(response);
		if (response.success) {
			setUserInfo(response.user);
		} else console.log("failed");
	}, []);

	return (
		<>
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
									<FieldInput>{userInfo.name}</FieldInput>
								</Field>

								<Field>
									<FieldTitle>Email Address</FieldTitle>
									<FieldInput>{userInfo.email}</FieldInput>
								</Field>

								<Field>
									<FieldTitle>Date Of Birth</FieldTitle>
									<FieldInput>{getFormattedDateTime(userInfo.dob)}</FieldInput>
								</Field>

								<Field>
									<FieldTitle>Date Joined</FieldTitle>
									<FieldInput>
										{getFormattedDateTime(userInfo.joinedOn)}
									</FieldInput>
								</Field>
							</BodyWrapper>
						</SectionBody>
					</InfoSection>
				</WrapContainer>
			</RightDiv>
		</>
	);
};

export default AccountInfo;
