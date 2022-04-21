import styled from "styled-components";
import { mobile, tab } from "../responsive";
import CloseIcon from "@mui/icons-material/Close";
// import {DropdownBestSellers, DropdownTodaysDeal, DropdownFashion,  DropdownElectronics, DropdownHomeKitchen, DropdownGroceries, DropdownBooks} from './Dropdown';
import { DropdownCat } from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContainerMain = styled.div`
  width: 100%;
  background-color: #ffffff;
  height: 40px;
  left: ${({ isOpen }) => (isOpen ? "0px" : "-300px")};
  transition: 0.3s ease-in-out;
  border-bottom: 2px solid #000000;
  z-index: 100;

  ${tab({
    overflow: "hidden",
    overflowX: "auto", //adds scroll during overflow and removes when not needed
    border: "none",
  })}

  ${mobile({
    width: "300px",
    height: "100vh",
    position: "fixed",
    top: "0",
    overflowX: "",
    border: "none",
  })}
`;

const Container = styled.div`
  display: flex;

  ${mobile({
    display: "block",
  })}
`;

const CloseArea = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px;
`;

const CloseButton = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: 0.5s;
  color: #000000;
  cursor: pointer;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  ${mobile({ display: "flex" })}
`;

const Wrapper = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0;

  ${mobile({ display: "block", width: "80%" })}
`;

const MenuItem = styled.div`
  position: relative;
  height: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }

  ${mobile({ borderBottom: "1px solid gray" })}
`;

const Title = styled.div`
  margin: 9px 15px;
`;

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
};

const MenuBar = ({ isOpen, toggle }) => {
  //Best Sellers Dropdown
  const [dropdownBestSellers, setDropdownBestSellers] = useState(false);

  const showBestSellers = () => {
    if (window.innerWidth < 960) {
      setDropdownBestSellers(false);
    } else {
      setDropdownBestSellers(true);
    }
  };

  const hideBestSellers = () => {
    setDropdownBestSellers(false);
  };

  //Today's Deal Dropdown
  const [dropdownSports, setDropdownSports] = useState(false);

  const showSports = () => {
    if (window.innerWidth < 960) {
      setDropdownSports(false);
    } else {
      setDropdownSports(true);
    }
  };

  const hideSports = () => {
    setDropdownSports(false);
  };

  //Fashion Dropdown
  const [dropdownFashion, setDropdownFashion] = useState(false);

  const showFashion = () => {
    if (window.innerWidth < 960) {
      setDropdownFashion(false);
    } else {
      setDropdownFashion(true);
    }
  };

  const hideFashion = () => {
    setDropdownFashion(false);
  };

  //Electronics Dropdown
  const [dropdownElectronics, setDropdownElectronics] = useState(false);

  const showElectronics = () => {
    if (window.innerWidth < 960) {
      setDropdownElectronics(false);
    } else {
      setDropdownElectronics(true);
    }
  };

  const hideElectronics = () => {
    setDropdownElectronics(false);
  };

  //Home and Kitchen Dropdown
  const [dropdownHouseholds, setDropdownHouseholds] = useState(false);

  const showHouseholds = () => {
    if (window.innerWidth < 960) {
      setDropdownHouseholds(false);
    } else {
      setDropdownHouseholds(true);
    }
  };

  const hideHouseHolds = () => {
    setDropdownHouseholds(false);
  };

  //Groceries Dropdown
  const [dropdownGroceries, setDropdownGroceries] = useState(false);

  const showGroceries = () => {
    if (window.innerWidth < 960) {
      setDropdownGroceries(false);
    } else {
      setDropdownGroceries(true);
    }
  };

  const hideGroceries = () => {
    setDropdownGroceries(false);
  };

  //Books Dropdown
  const [dropdownBooks, setDropdownBooks] = useState(false);

  const showBooks = () => {
    if (window.innerWidth < 960) {
      setDropdownBooks(false);
    } else {
      setDropdownBooks(true);
    }
  };

  const hideBooks = () => {
    setDropdownBooks(false);
  };

  return (
    <ContainerMain isOpen={isOpen}>
      <Container>
        <CloseArea>
          <CloseButton onClick={toggle}>
            <CloseIcon />
          </CloseButton>
        </CloseArea>
        <Wrapper>
          <MenuItem onMouseEnter={showFashion} onMouseLeave={hideFashion}>
            <Link to={"/cat/fashion"} style={linkStyle}>
              {/* <CategoryRegion/> */}
              <Title>Fashion</Title>
            </Link>
            {dropdownFashion && <DropdownCat cat="Fashion" />}
          </MenuItem>
          <MenuItem onMouseEnter={showSports} onMouseLeave={hideSports}>
            <Link to={"/cat/sports"} style={linkStyle}>
              <Title>Sports</Title>
            </Link>
            {dropdownSports && <DropdownCat cat="Sports" />}
          </MenuItem>
          <MenuItem
            onMouseEnter={showElectronics}
            onMouseLeave={hideElectronics}
          >
            <Link to={"/cat/electronics"} style={linkStyle}>
              <Title>Electronics</Title>
            </Link>
            {dropdownElectronics && <DropdownCat cat="Electronics" />}
          </MenuItem>
          <MenuItem onMouseEnter={showHouseholds} onMouseLeave={hideHouseHolds}>
            <Link to={"/cat/households"} style={linkStyle}>
              <Title>Households</Title>
            </Link>
            {dropdownHouseholds && <DropdownCat cat="Households" />}
          </MenuItem>
          <MenuItem
            onMouseEnter={showBestSellers}
            onMouseLeave={hideBestSellers}
          >
            <Link to={"/cat/music"} style={linkStyle}>
              <Title>Music</Title>
            </Link>
            {dropdownBestSellers && <DropdownCat cat="Music" />}
          </MenuItem>
          <MenuItem onMouseEnter={showGroceries} onMouseLeave={hideGroceries}>
            <Link to={"/cat/groceries"} style={linkStyle}>
              <Title>Groceries</Title>
            </Link>
            {dropdownGroceries && <DropdownCat cat="Groceries" />}
          </MenuItem>
          <MenuItem onMouseEnter={showBooks} onMouseLeave={hideBooks}>
            <Link to={"/cat/books"} style={linkStyle}>
              <Title>Books</Title>
            </Link>
            {dropdownBooks && <DropdownCat cat="Books" />}
          </MenuItem>
        </Wrapper>
      </Container>
    </ContainerMain>
  );
};

export default MenuBar;
