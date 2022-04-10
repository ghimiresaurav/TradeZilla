import styled from "styled-components";

const Container = styled.div`
	position: relative;
  margin: 20px 0 ;
	/* top: 100px; */
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	margin: auto;
	/* flex-direction: column; */
`;

const WrapperDiv = styled.div`
	display: flex;
  margin: auto;
	width: 80%;
	/* background-color: green; */
`;

const InfoSection = styled.div`
	width: 80%;
	min-width: 500 vw;
	height: 70vh;
	margin: 30px auto;
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
	/* border: 2px solid #000000; */
`;
const SectionHeader = styled.div`
	width: 82%;
	margin: 10px auto;
	display: flex;
	column-gap: 5%;
`;
const StartSection = styled.div`
	font-size: 24px;
`;

const PayMethod = styled.img`
	width: 25%;
	pointer-events: none;
`;

const SectionBody = styled.form`
	width: 90%;
	/* padding: 10px; */
	margin: auto;
	/* background-color: #c2d6d6; */
	display: flex;
`;

const SectionForm = styled.div`
	display: flex;
	flex: 3;
	/* background-color: green; */
`;

const Button = styled.button`
  display: flex;
	width: 60%;
  margin: 20px;
	padding: 10px;
	background-color: #000000;
	color: #ffffff;
	font-weight: 600;
	cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const PayForm = styled.div`
	background-color: sandybrown;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	padding: 20px;
	width: 85%;
`;

const First = styled.div`
	display: flex;
	flex-direction: column;
	padding: 5px 0 4px 0;
`;
const Second = styled.div`
	padding: 5px 0 0 0;
`;
const Third = styled.div``;
const Fourth = styled.div`
	padding: 20px 0;
`;

const Number = styled.input`
	width: 50%;
	border-radius: 3%;
	padding: 10px;
	border: none;
	overflow: hidden;
	display: flex;
	justify-content: flex-start;

	&:focus {
		outline: 2px solid #00ccff;
	}
`;

const Info = styled.div`
	display: flex;
	flex-direction: row;
	gap: 2%;
`;

const Code = styled(Number)`
	width: 20%;
`;

const Name = styled(Number)`
	width: 72%;
`;

const SelectOption = styled.select`
	width: 80%;
	border-radius: 3%;
	padding: 7px;
	border: none;
	overflow: hidden;
	display: flex;
	justify-content: flex-start;
	outline: none;

	&:focus {
		outline: 2px solid #00ccff;
	}
`;

const DateField = styled.div`
	display: flex;
	flex-direction: row;
`;

const Month = styled(Number)`
	width: 15%;
`;

const Year = styled(Number)`
	width: 15%;
`;

const Payment = (props) => {
	return (
		<Container>
			<Wrapper>
				<WrapperDiv>
					<InfoSection>
						<SectionHeader>
							<StartSection>Credit/Debit Card</StartSection>
							<PayMethod src="https://i.ibb.co/Qfvn4z6/payment.png" />
						</SectionHeader>

						<SectionBody>
							<SectionForm>
								<PayForm>
									<First>
										Card Information
										<Info>
											<Number
												id="cardName"
												placeholder="Card Number"
												type="number"
												ondrop="return false;"
												onpaste="return false;"
												required
											/>

											<Code
												id="cardCode"
												placeholder="CSV"
												type="number"
												ondrop="return false;"
												onpaste="return false;"
												required
											/>
										</Info>
									</First>

									<Second>
										Card Holder Name
										<Name
											type="text"
											id="fname"
											name="fname"
											autoComplete="off"
										/>{" "}
										<br />
									</Second>

									<Third>
										Valid Until
										<DateField>
											<Month
												id="month"
												placeholder="MM"
												type="number"
												ondrop="return false;"
												onpaste="return false;"
												required
											></Month>

											<p id="slash">/</p>

											<Year
												id="year"
												placeholder="YY"
												type="number"
												ondrop="return false;"
												onpaste="return false;"
												required
											></Year>
										</DateField>
									</Third>

									<Fourth>
										<SelectOption id="address">
											<option value="current">Billing Address</option>
											<option value="current">My Current Location</option>
										</SelectOption>                   
									</Fourth>
                  <Button type="submit">Update Info</Button>
								</PayForm>
							</SectionForm>
						</SectionBody>
					</InfoSection>
				</WrapperDiv>
			</Wrapper>
		</Container>
	);
};

export default Payment;
