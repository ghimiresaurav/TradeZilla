import styled from "styled-components";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	// background-color: black;
	z-index: 100;
	position: fixed;
	top: 0;
	display: ${({ display }) => (display ? "" : "none")};
	transition: 0.9s ease-in-out;
`;

const Wrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
`;

const Box = styled.div`
	width: 200px;
	height: 60px;
	background-color: #f2f2f2;
	margin: auto;
	border-radius: 30px;
	box-shadow: 1px 1px 5px #888888;
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	bottom: 0px;
	left: 0;
	right: 0;
`;

const Text = styled.p``;

const Pill = (props) => {
	return (
		<Container display={props.display}>
			<Wrapper>
				<Box>
					{props.success ? (
						<CheckCircleOutlineIcon
							style={props.success ? { color: "green" } : { color: "red" }}
						/>
					) : (
						<CancelOutlinedIcon
							style={props.success ? { color: "green" } : { color: "red" }}
						/>
					)}
					&nbsp;
					{/* <CheckCircleOutlineIcon style = {{color: "green"}}/>&nbsp; */}
					<Text>{props.text}</Text>
				</Box>
			</Wrapper>
		</Container>
	);
};

export default Pill;
