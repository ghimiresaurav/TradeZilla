import styled from 'styled-components';
import { useState } from "react";
import "./RegisterForm.css";


const Label = styled.label`
    display: flex;
    margin: 10px 0 10px 0;
    font-size: 12px;
    color: #02222e;
`;

const RegisterForm = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div id='userField'>
      <Label>{label}</Label>
      <input className='register'
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span id='message'>{errorMessage}</span>
    </div>
  );
};

export default RegisterForm;


