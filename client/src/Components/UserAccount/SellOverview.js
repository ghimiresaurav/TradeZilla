import styled from "styled-components";

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
	/* padding: 10px ; */
	/* background-color: grey; */
`;

const WrapContainer = styled.div`
	width: 100%;
	/* background-color: red; */
`;

const InfoSection = styled.div`
	width: 80%;
	min-width: 500 vw;
	margin: auto;
	padding: 10px 0;
	/* border: 1px solid #000000; */
	box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;
const PendingSection = styled.div`
 /* padding: 10px 0 0 0; */
`;
const DeliveredSection = styled.div`
 /* padding: 10px 0 0 0; */
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

const SellOverview = () => {
	return (
		<>
			<Title>Sell Overview</Title>
			<RightDiv>
				<WrapContainer>
					<InfoSection>
						<PendingSection>
							<SectionHeader>
								<StartSection>Pending Orders</StartSection>
							</SectionHeader>
							
							<SectionBody>
								<BodyWrapper>
									<table>
										<tr>
											<th>Product ID</th>
											<th>Product Image</th>
											<th>Order Name</th>
											<th>Order Date</th>
											<th>Payment Method</th>
											<th>Price</th>
											<th>Quantity</th>
											<th>Action</th>
										</tr>

										<tr>
											<td>39456</td>
											<td>img</td>
											<td>Coffee Mug</td>
											<td>2022-03-14</td>
											<td>E-Sewa</td>
											<td>RS 3000</td>
											<td>10 pcs</td>
											<td>
												<button id="action">
													Dispatch
												</button>
											</td>
										</tr>

										<tr>
										    <td>34576</td>
											<td>img</td>
											<td>Nike Jordan</td>
											<td>2022-04-16</td>
											<td>on delivery</td>
											<td>RS 6250</td>
											<td>1 pcs</td>
											<td>
												<button id="action">
													Dispatch
												</button>
											</td>
										</tr>
									</table>									
								</BodyWrapper>
							</SectionBody>
						</PendingSection>

						<DeliveredSection>
							<SectionHeader>
								<StartSection>Delivered Orders</StartSection>
							</SectionHeader>

							<SectionBody>
								<BodyWrapper>
								<table>
										<tr>
											<th>Product ID</th>
											<th>Product Image</th>
											<th>Order Name</th>
											<th>Order Date</th>
											<th>Payment Method</th>
											<th>Price</th>
											<th>Quantity</th>									
										</tr>

										<tr>
											<td>39478</td>
											<td>img</td>
											<td>leather belt</td>
											<td>2022-03-18</td>
											<td>e-sewa</td>
											<td>RS 650</td>
											<td>2 pcs</td>
										</tr>

										<td>39456</td>
											<td>img</td>
											<td>Cotton Shirt</td>
											<td>2022-03-23</td>
											<td>on delivery</td>
											<td>RS 2100</td>
											<td>1 pcs</td>										
									</table>								
								</BodyWrapper>
							</SectionBody>
						</DeliveredSection>
					</InfoSection>
				</WrapContainer>
			</RightDiv>
		</>
	);
};

export default SellOverview;
