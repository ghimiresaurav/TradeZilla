import styled from "styled-components";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100vh;
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
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginForm = styled.input`
  min-width: 90%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 3px;
  border: 0px solid black;
  box-shadow: 3px 3px 5px grey;    
  display: flex;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 10px 0;
  background-color: teal;
  color: #ffffff;
  cursor: pointer;
  border-radius: 3px;
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  document.title = 'Sign In | TradeZilla';

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
      window.location.assign("/p/dash");
    }
    console.log(response);
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
      <Wrapper>
           <Title>SIGN IN</Title>
        <Form onSubmit={login}>
          {inputs.map((input) => (
            <LoginForm
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
            />
          ))}
          {/* <Input placeholder="Username"></Input>
          <Input placeholder="Password"></Input> */}
          <Button>LOGIN</Button>
          <Link>Forgot Password?</Link>
          <Link>Create New Account</Link>
        </Form>      
      </Wrapper>
    </Container>
  );
};

export default Login;
