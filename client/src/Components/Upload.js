import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { useDropzone } from "react-dropzone";
import { useState } from "react";

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
    height: 70%;
    display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 20px 0 20px;
	background-color: #ffffff;
	color: #000000;
	outline: none;
	transition: border 0.24s ease-in-out;
    z-index: 3000;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 80%;
    border-width: 7px;
	border-radius: 2px;
	border-color: ${(props) => getColor(props)};
	border-style: dashed;
    // border-style: ${(props) => getColor(props)};

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

    &:hover{
        background-color: #000000;
        color: #ffffff;
    }
`;

const Header = styled.header`
    font-size: 30px;
    font-weight: 500;
    text-align: center;
`;

const Text = styled.span`
    font-size: 25px;
    font-weight: 500;
    margin: 10px 0 15px 0;
`;

const Button = styled.button`
    padding: 10px 25px;
    font-size: 20px;
    font-weight: 500;
    border: none;
    outline: none;
    background: #000000;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
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
    
	// const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({ accept: "image/*" });

    const [header, setHeader] = useState(false);

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
        setHeader(true);
    }

    const dragLeave = (e) => {
        e.preventDefault();
        setHeader(false);
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        props.setTrigger(false);
        setHeader(false);
        console.log(files);
    }

    

    const headerText = () =>{
        if (!header){
            return "Drag & Drop to Upload File";
        }
        else{
            return "Release to Upload";
        }
    }
    
	return (props.trigger) ? (
        <Container>
            <OuterArea></OuterArea>
            <DropBox>
                <CloseArea>
                    <CloseButton onClick={() => props.setTrigger(false)}>
                        <CloseIcon/>
                    </CloseButton>
                </CloseArea>
                <DropZone onDragOver={dragOver}
                    onDragEnter={dragEnter}
                    onDragLeave={dragLeave}
                    onDrop={fileDrop}>
                {/* <DropZone {...getRootProps({ isFocused, isDragAccept, isDragReject })}> */}
                    {/* <input {...getInputProps()} /> */}
                    <UploadIcon>
                        <CloudUploadIcon style = {{width: "120px", height:"120px"}}/>
                    </UploadIcon>
                    <Header>{headerText()}</Header>
                    <Text>OR</Text>
                    <Button>Browse File</Button>
                </DropZone>
            </DropBox>
        </Container>
    ) : "";
    // )
}

export default Upload;
