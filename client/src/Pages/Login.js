import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import {mobile} from '../responsive';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Container = styled.div`
	width: 100%;
  position: absolute;
  top: 100px;

  ${mobile({top: "50px"})}
`;

const ContentArea = styled.div`
  width: 100%;
  padding: 150px 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({padding: "50px"})}
`;

const WhiteArea = styled.div`
  width: 25%;
  min-width: 300px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
    width: 90%;
`;

const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
  margin-bottom: 15px;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const InputContainer = styled.div`  
  display: flex;
  border: 2px solid #757575;
  align-items: center;
  height: 40px;
  margin-bottom: 10px;
  // background-color: green;
`;

const Input = styled.input`
	margin: 0px 5px;
	padding: 10px;
	border: none;
  outline: none;
  width: 100%;
  height: 80%;

  ::placeholder{
    font-size: 12px;
  }
`;

const PasswordOption = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;


const Button = styled.button`
	margin: 15px 0;
	border: none;
	padding: 10px 0;
	background-color: teal;
	color: #ffffff;
	cursor: pointer;
	border-radius: 3px;
`;

const ForgotPassword= styled.div`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Register = styled.div`
	margin: 5px 0;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;

const Login = () => {

  document.title = "Sign In | TradeZilla";

  const linkStyle = {
    textDecoration: "none",
    color: "#000000"
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const changePasswordVisibility = () =>{
    setPasswordVisibility(!passwordVisibility);
  }

  // const passwordType = () =>{
  //   console.log("PasswoRD Visible " + passwordVisibility);
  //   if (passwordVisibility){
  //     return "text";
  //   }
  //   else{
  //     return "password";
  //   }
  // }

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await resp.json();

    if (response.success) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.id);
      localStorage.setItem("name", response.name);
      window.location.assign("/");
    }
    console.log(response);
    console.log(resp);
    console.log(values);
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
  ];

  return (
    <Container>
      <TopBars />
      <ContentArea>
        <WhiteArea>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
              {/* {inputs.map((input) => (
                <LoginForm
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={handleChange}
                />
              ))} */}
              <InputContainer>
                <Input placeholder="Username"></Input>
              </InputContainer>
              <InputContainer>
                <Input placeholder="Password" type = {passwordVisibility ? "text" : "password"} style = {{fontFamily: "Verdana", fontSize: "20px"}}></Input>
                <PasswordOption onClick = {changePasswordVisibility}>
                  {passwordVisibility ? (<VisibilityOffIcon/>) : (<VisibilityIcon/>)}
                </PasswordOption>
              </InputContainer>
              <Button onSubmit={login}>LOGIN</Button>
              <ForgotPassword>
                Forgot Password?
              </ForgotPassword>
              <Link to = '/register' style={linkStyle}>
                <Register>
                  Create New Account
                </Register>
              </Link>
            </Form>
          </Wrapper>
        </WhiteArea>
      </ContentArea>
      <Footer/>
    </Container>
  );
};

export default Login;
