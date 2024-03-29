import styled from "styled-components";
import TopBars from "../Components/TopBars";
import Footer from "../Components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Container = styled.div`
  width: 100%;
  position: absolute;
  /* top: 100px; */

  ${mobile({ top: "50px" })}
`;

const Wrapper = styled.div`
  position: relative;
  top: 100px;
`;

const ContentArea = styled.div`
  width: 100%;
  padding: 150px 0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://res.cloudinary.com/tradezilla/image/upload/v1651981732/4_xeji4l.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobile({ padding: "50px" })}
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

const Box = styled.div`
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

  ::placeholder {
    font-size: 12px;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: -4px;
  margin-bottom: 10px;
  font-size: 14px;
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

const ForgotPassword = styled.div`
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
    color: "#000000",
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [errorText, setErrorText] = useState({
    email: "",
    password: "",
  });

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
      // Store the information sent from server in the local storage
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.id);
      localStorage.setItem("name", response.name);
      localStorage.setItem("isActive", response.isActive);
      localStorage.setItem("email", response.email);
      localStorage.setItem("numberOfItemsOnCart", response.numberOfItemsOnCart);
      localStorage.setItem("myProducts", response.myProductsID);

      localStorage.getItem("isActive") === "true"
        ? window.location.assign("/")
        : window.location.assign("/otp");
    } else {
      const errorInField =
        response.message.split(" ")[1] === "email" ? "email" : "password";
      setErrorText({ [errorInField]: response.message });
    }
  };

  return (
    <Container>
      <TopBars />
      <Wrapper>
        <ContentArea>
          <WhiteArea>
            <Box>
              <Title>SIGN IN</Title>
              <Form onSubmit={login} autoComplete="none">
                <InputContainer>
                  <Input
                    placeholder="Email Address"
                    value={values.name}
                    name="email"
                    onChange={handleChange}
                    required={true}
                  ></Input>
                </InputContainer>
                <ErrorText>{errorText.email}</ErrorText>
                <InputContainer>
                  <Input
                    placeholder="Password"
                    type={passwordVisibility ? "text" : "password"}
                    style={{ fontFamily: "Verdana", fontSize: "20px" }}
                    value={values.name}
                    name="password"
                    onChange={handleChange}
                    required={true}
                  ></Input>
                  <PasswordOption onClick={changePasswordVisibility}>
                    {passwordVisibility ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </PasswordOption>
                </InputContainer>
                <ErrorText>{errorText.password}</ErrorText>
                <Button type="submit">LOGIN</Button>
                <ForgotPassword>Forgot Password?</ForgotPassword>
                <Link to="/register" style={linkStyle}>
                  <Register>Create New Account</Register>
                </Link>
              </Form>
            </Box>
          </WhiteArea>
        </ContentArea>
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Login;
