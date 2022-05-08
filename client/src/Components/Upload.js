import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import { mobile } from "../responsive";

import { ImageConfig } from "./ImageConfig";
import PropTypes from "prop-types";

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	// background-color: green;
	background-color: rgba(0, 0, 0, 0.8);
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 2000;
`;

const OuterArea = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
`;

const DropBox = styled.div`
	width: 60%;
	min-width: 300px;
	height: 80%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 20px 0 20px;
	background-color: #ffffff;
	color: #000000;
	outline: none;
	transition: border 0.24s ease-in-out;
	z-index: 3000;

	${mobile({
		overflowY: "auto",
	})}
`;

const UploadIcon = styled.div`
	// background-color: green;
	width: 120px;
	height: 120px;
	display: flex;
	justify-content: center;
	margin-top: -20px;
	margin-bottom: 20px;
`;

const DropZone = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 90%;
	height: 80%;
	border-width: 7px;
	border-radius: 2px;
	border-color: ${(props) => getColor(props)};
	// border-style: dashed;
	border-style: ${({ dragged }) => (dragged ? "solid" : "dashed")};
	// border-style: ${(props) => getColor(props)};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const CloseArea = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
	// background-color: green;
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

	&:hover {
		background-color: #000000;
		color: #ffffff;
	}
`;

const Header = styled.header`
	font-size: 30px;
	font-weight: 500;
	text-align: center;
`;

const Input = styled.input`
	display: none;
	background-color: green;
`;

const Browse = styled.div`
	padding: 10px 0px;
	font-size: 20px;
	font-weight: 500;
	background: #000000;
	color: #ffffff;
	border-radius: 5px;
	margin-top: 10px;
`;

const BrowseText = styled.label`
	background-color: transparent;
	padding: 10px 25px;
	cursor: pointer;
`;

const DropFileItems = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 25px;

	${mobile({
		flexDirection: "column",
	})}
`;

const Container2 = styled.div`
	border: 2px solid #000000;
	width: 90%;
	margin: 25px;
`;

const DropFilePreview = styled.div`
	margin-top: 30px;
	// background-color: yellow;
`;

const DropFilePreviewTitle = styled.h1`
	font-weight: 500;
	text-align: center;
`;

const DropFileImg = styled.img`
	width: 100px;
	margin-right: 20px;
`;

const RemoveDropFile = styled.span`
	background-color: gray;
	color: #000000;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: -15px;
	top: -15px;
	cursor: pointer;
	transition: 0.3s ease;
`;

const DropFilePreviewItem = styled.div`
	position: relative;
	display: flex;
	margin-bottom: 10px;
	padding: 5px;
	border-radius: 2px;
	border: 2px dashed;
	width: 115px;
	height: 115px;
	margin: 0 20px;
	// overflow: hidden;

	&:hover ${RemoveDropFile} {
		//as we are using RemoveDropFile in DropFilePreviewItem, RemoveDropFile should be initialized before DropFilePreviewItem
		// opacity: 1;
		background-color: #000000;
		color: #ffffff;
	}

	${mobile({
		width: "200px",
		height: "200px",
		marginBottom: "25px",
	})}
`;

const Buttons = styled.div`
	width: 100%;
	// background-color: green;
	display: flex;
	justify-content: right;
	padding-right: 15px;
	padding-bottom: 5px;
	// margin: 5px;
`;

const PostButton = styled.button`
	padding: 10px 20px;
	border: 2px solid #000000;
	cursor: pointer;
	transition: all 0.2s ease-in;
	font-weight: 500;
	width: 90px;
	margin-right: 10px;
	// background-color: #ffffff;
	display: ${({ answerClicked }) => (answerClicked ? "none" : "")};

	&:hover {
		background-color: #000000;
		color: #ffffff;
	}
`;

const CancelButton = styled.button`
	padding: 10px 20px;
	border: 2px solid #000000;
	cursor: pointer;
	transition: all 0.2s ease-in;
	font-weight: 500;
	display: ${({ answerClicked }) => (answerClicked ? "none" : "")};
	width: 90px;

	&:hover {
		background-color: #000000;
		color: #ffffff;
	}
`;

const getColor = (props) => {
	if (props.isDragAccept) {
		return "#00e676";
	}
	if (props.isDragReject) {
		return "#ff1744";
	}
	if (props.isFocused) {
		return "#2196f3";
	}
	return "#eeeeee";
};

const Upload = (props) => {
	const [dragged, setDragged] = useState(false);

	// const [fileList, setFileList] = useState(props.files);

	const dragOver = (e) => {
		e.preventDefault();
		setDragged(true);
	};

	const dragEnter = (e) => {
		e.preventDefault();
		setDragged(true);
	};

	const dragLeave = (e) => {
		e.preventDefault();
		setDragged(false);
	};

	const fileDrop = (e) => {
		e.preventDefault();

		setDragged(false);

		const newFile = e.target.files[0];
		console.log(newFile);
		if (newFile) {
			// const updatedList = props.files;
			// updatedList.push(newFile);
			const updatedList = [...props.files, newFile];
			// props.setFiles(props.files.push(newFile));
			props.setFiles(updatedList);
			// props.onFileChange(updatedList);
		}

		console.log("All Files", props.files);
		console.log(props.files.length);
		if(props.files.length >= 3){ //less than 3 because it starts from 0; and we are expecting 4 files
			setMaxedOut(true);
			return;
		}


	};

	const fileRemove = (file) => {

		const updatedList = [...props.files];
		updatedList.splice(props.files.indexOf(file), 1);
		props.setFiles(updatedList);
		// props.onFileChange(updatedList);

		console.log(props.files.length);
		if(props.files.length < 5){ //less than 5 because ??????????
			setMaxedOut(false);
		}
		
	};

	const changeUI = (arg) => {
		if (!dragged) {
			if (arg === "headerText") {
				// return "Drag & Drop to Upload File";
				return "Upload File";
			} else {
				return 1;
			}
		} else {
			if (arg === "headerText") {
				return "Release to Upload";
			} else {
				return 0.6;
			}
		}
	};

	const [maxedOut, setMaxedOut] = useState(false);


	return props.trigger ? (
		<Container>
			<OuterArea></OuterArea>
			<DropBox>
				<CloseArea>
					<CloseButton onClick={() => props.setTrigger(false)}>
						<CloseIcon />
					</CloseButton>
				</CloseArea>
				<DropZone
					onDragOver={dragOver}
					onDragEnter={dragEnter}
					onDragLeave={dragLeave}
					onDrop={fileDrop}
					dragged={dragged}
				>
					{!maxedOut ? (
						<Wrapper>
							<UploadIcon>
								<CloudUploadIcon
									style={{
										width: "120px",
										height: "120px",
										opacity: changeUI("iconOpacity"),
									}}
								/>
							</UploadIcon>
							<Header>{changeUI("headerText")}</Header>
							{/* <p>OR</p> */}

							<Browse>
								<Input
									type="file"
									id="file"
									name="product-image"
									onChange={fileDrop}
									accept="image/*"
								/>
								<BrowseText htmlFor="file">Browse File</BrowseText>
							</Browse>
						</Wrapper>
					) : (
						<Header>You can only add upto 4 images</Header>
					)}
				</DropZone>

				{props.files.length > 0 ? (
						<Container2>
							<DropFilePreview>
								<DropFilePreviewTitle>{/* Preview */}</DropFilePreviewTitle>
								<DropFileItems>
									{props.files.map((file, index) => {
										console.log(file);
										return (
											<DropFilePreviewItem key={index}>
												<DropFileImg
													src={URL.createObjectURL(file)}
													alt=""
												/>
												<RemoveDropFile onClick={() => fileRemove(file)}>
													x
												</RemoveDropFile>
											</DropFilePreviewItem>
										);
									})}
								</DropFileItems>
							</DropFilePreview>
							<Buttons>
								<PostButton
									productimage={props.files}
									onClick={() => props.setTrigger(false)}
								>
									Post
								</PostButton>
								<CancelButton onClick={() => props.setTrigger(false)}>
									Cancel
								</CancelButton>
							</Buttons>
						</Container2>
					)
				 : null}
			</DropBox>
		</Container>
	) : (
		""
	);
};

Upload.propTypes = {
	onFileChange: PropTypes.func,
};

export default Upload;
