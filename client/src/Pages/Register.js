import styled from "styled-components";
import TopBars from "../Components/TopBars";
import RegisterForm from "../Pages/RegisterForm";
import Footer from "../Components/Footer";
import RegistrationComplete from "../Components/SuccessPopup/RegistrationComplete";
import { useState } from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  position: absolute;
  // top: 100px;
  height: ${(props) => props.setHeight};
  overflow-y: ${(props) => props.setOverflow};

  ${mobile({ top: "50px" })}
`;

const Wrapper = styled.div`
  position: relative;
  top: 100px;
`;

const ContentArea = styled.div`
  width: 100%;
  padding: 50px 0;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://res.cloudinary.com/tradezilla/image/upload/v1651982114/12491_Balls-from-all-sport-Do-sport-all-the-time-HD-wallpaper_r1zfbc.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteArea = styled.div`
  width: 40%;
  min-width: 300px;
  padding: 20px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  min-width: 380px;
  padding: 20px;
  overflow: hidden;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
`;

const Agreement = styled.div`
  font-size: 12px;
  margin: 20px 0;
`;

const Register = (props) => {
  document.title = "Register | TradeZilla";

  const [registrationCompletePopup, setRegistrationCompletePopup] =
    useState(false);

  function checkPopup(argument) {
    if (registrationCompletePopup) {
      if (argument === "height") {
        return "100vh";
      } else {
        return "hidden";
      }
    } else {
      if (argument === "height") {
        return "";
      } else {
        return "none";
      }
    }
  }

  const [values, setValues] = useState({
    name: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Full Name",
      errorMessage: "Please enter your full name",
      label: "Full Name:",
      pattern: "^[a-zA-Z]{2,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$",
      required: true,
    },

    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter a valid email address!",
      label: "Email Address:",
      pattern: "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$",
      required: true,
    },

    {
      id: 3,
      name: "birthday",
      type: "date",
      min: "1900-01-01",
      max: "2005-12-31",
      errorMessage: "Please enter your date of birth",
      label: "Date of Birth:",
      required: true,
    },

    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password:",
      pattern: `?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}`,
      required: true,
    },

    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password:",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email,
        password: values.password,
        dob: values.birthday,
      }),
    });

    const response = await resp.json();
    console.log(response);

    if (response.success) setRegistrationCompletePopup(true);
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Container
      setHeight={checkPopup("height")}
      setOverflow={checkPopup("overflow")}
    >
      <TopBars loggedIn={props.loggedIn} />
      <Wrapper>
        <ContentArea>
          <WhiteArea>
            <Box>
              <Title>CREATE AN ACCOUNT</Title>
              <Form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                  <RegisterForm
                    {...input}
                    key={input.id}
                    value={values[input.name]}
                    onChange={handleChange}
                  />
                ))}
                <Agreement>
                  <input type="checkbox" id="select" />
                  <label for="select">
                    {" "}
                    By creating an account, I consent to the processing of my
                    personal data in accordance with the{" "}
                    <a href="../privacy-policy" target="_">
                      PRIVACY POLICY
                    </a>{" "}
                  </label>
                  <br />
                </Agreement>
                <button id="submitForm" type="submit">
                  Submit
                </button>
              </Form>
            </Box>
          </WhiteArea>
        </ContentArea>
        <Footer />
        <RegistrationComplete
          trigger={registrationCompletePopup}
          setTrigger={setRegistrationCompletePopup}
        />
      </Wrapper>
    </Container>
  );
};

export default Register;
