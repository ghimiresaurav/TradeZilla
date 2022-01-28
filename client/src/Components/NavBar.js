import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000000;
  position: ${(props) => props.pos};
  z-index: 100;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  color: #ffffff;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  background-color: #000000;
  color: #ffffff;
  outline: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const RightJSX = (props) => {
  const getInitials = (name) => {
    const x = name.split(" ");
    return x[0].split("")[0] + x[x.length - 1].split("")[0];
  };

  return props.loggedIn ? (
    <Right>
      <MenuItem>{getInitials(localStorage.getItem("name"))}</MenuItem>
      <MenuItem>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon />
        </Badge>
      </MenuItem>
    </Right>
  ) : (
    <Right>
      <MenuItem>REGISTER</MenuItem>
      <MenuItem>SIGN IN</MenuItem>
    </Right>
  );
};

const NavBar = (props) => {
  const [pos] = useState(0);
  const posFunction = (direction) => {
    if (Container.top === "0px") {
      pos = "relative";
    } else {
      pos = "fixed";
    }
  };

  return (
    <Container pos={"relative"}>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>TradeZilla</Logo>
        </Center>
        <RightJSX loggedIn={props.loggedIn} />
      </Wrapper>
    </Container>
  );
};

export default NavBar;
