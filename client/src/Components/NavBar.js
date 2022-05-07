import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile, tab, vTab } from "../responsive";
import { Link } from "react-router-dom";
import { DropdownUser } from "./Dropdown";
import { useState } from "react";
import Search from "../Pages/Search";
import logo from "../images/logo.png";

const colorCodes = [
  "rgb(171,71,188)",
  "rgb(51,105,30)",
  "rgb(81,45,168)",
  "rgb(1,87,155)",
  "rgb(191,54,12)",
  "rgb(0,151,167)",
  "rgb(236,64,122)",
  "rgb(244,81,30)",
];

const getRandomNumber = (max, min) => {
  return Math.round(Math.random() * (max - min) + min);
};

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #000000;
  // position: ${({ scrollNav }) => (scrollNav ? "fixed" : "relative")};
  top: 0;
  z-index: 10;

  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 80px;
  color: #ffffff;
  align-items: center;

  ${mobile({ padding: "10px 0" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  // background-color: green;
`;

const MenuContainer = styled.div`
  display: none;

  ${mobile({ display: "flex", margin: "0 25px", cursor: "pointer" })}
`;

const SearchContainer = styled.div`
  width: 60%;
  // border: 0.5px solid white;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // padding: 5px 10px;
  // background-color: green;

  ${vTab({ width: "20%" })}

  ${mobile({ display: "none" })}
`;

const Form = styled.form`
  width: 100%;
  border: 0.5px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;

  // ${vTab({ width: "20%" })}

  // ${mobile({ display: "none" })}
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  color: #ffffff;
  outline: none;

  ::placeholder {
    color: white;
    opacity: 90%;
    letter-spacing: 2px;
  }

  ${tab({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;

`;

const Company = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: green;
`;

const Logo = styled.img`
  width: 50px;
  ${mobile({ width: "40px" })}
`;

const CompanyName = styled.h1`
${mobile({ fontSize: "24px" })}
`;

// const Logo = styled.h1`
//   font-weight: bold;

//   ${mobile({ fontSize: "24px" })}
// `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SignInContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #ded9d9;
  }

  ${vTab({ display: "none" })}

  ${mobile({ display: "none" })};
`;

const UserField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  height: 40px;
  width: 40px;
  // padding: 9px 0;
  border: 2px solid #ffffff;
  border-radius: 50%;
  position: relative;
  background-color: ${colorCodes[getRandomNumber(11, 0)]};

  ${vTab({ display: "none" })};

  ${mobile({ display: "none" })};
`;

const UserName = styled.div`
  // position: absolute;
  // margin-bottom: 9px;
  // background-color: green;
  margin: 9px 0;
`;

const SignIn = styled.div`
  font-size: 14px;
  margin-left: 10px;
`;

const Cart = styled.div`
  cursor: pointer;
  margin-left: 30px;

  ${mobile({ marginRight: "25px" })};
`;

const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
};

const RightJSX = (props) => {
  const getInitials = (name) => {
    const x = name.split(" ");
    return x[0].split("")[0] + x[x.length - 1].split("")[0];
  };

  const [dropdownUser, setDropdownUser] = useState(false);

  const showDropdown = () => {
    setDropdownUser(true);
  };

  const hideDropdown = () => {
    setDropdownUser(false);
  };

  return props.loggedIn ? (
    <UserField
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      // color={colorCodes[getUserColor(11, 0)]}
    >
      <Link style={linkStyle} to={"/useraccount"}>
        <UserName>{getInitials(localStorage.getItem("name"))}</UserName>
      </Link>
      {dropdownUser && <DropdownUser />}
    </UserField>
  ) : (
    <Link style={linkStyle} to={"/login"}>
      <SignInContainer>
        <PersonIcon />
        <SignIn>SIGN IN</SignIn>
      </SignInContainer>
    </Link>
  );
};

const NavBar = (props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchProduct = (e) => {
    e.preventDefault();
    window.location.assign(`/search/${search}`);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <MenuContainer onClick={props.toggle}>
            <MenuIcon />
          </MenuContainer>
          <SearchContainer>
            <Form onSubmit={(e) => searchProduct(e)}>
              <Input
                placeholder="Search TradeZilla..."
                value={search.name}
                name="search"
                onChange={handleChange}
              />
              <SearchIcon />
            </Form>
          </SearchContainer>
        </Left>
        <Center>
          <Link style={linkStyle} to={"/"}>
            <Company>
              <Logo src={logo}></Logo>
              <CompanyName>TradeZilla</CompanyName>
            </Company>
          </Link>
        </Center>
        <Right>
          <RightJSX loggedIn={props.loggedIn} />
          <Cart>
            <Link style={linkStyle} to={"/cart"}>
              <Badge
                badgeContent={localStorage.getItem("numberOfItemsOnCart")}
                color="primary"
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </Cart>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
