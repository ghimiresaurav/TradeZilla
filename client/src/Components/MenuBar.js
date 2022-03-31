import styled from "styled-components";
import { mobile, tab } from "../responsive";
import CloseIcon from "@mui/icons-material/Close";
// import {DropdownBestSellers, DropdownTodaysDeal, DropdownFashion,  DropdownElectronics, DropdownHomeKitchen, DropdownGroceries, DropdownBooks} from './Dropdown';
import { DropdownCat } from "./Dropdown";
import { useState } from "react";


const ContainerMain = styled.div`
  width: 100%;
  background-color: #ffffff;
  left: ${({ isOpen }) => (isOpen ? "0px" : "-300px")};
  transition: 0.3s ease-in-out;
  border-bottom: 2px solid #000000;
  z-index: 100;
  
  ${tab({
    overflow: "hidden",
    overflowX: "auto", //adds scroll during overflow and removes when not needed
    border: "none"
  })}

  ${mobile({
    width: "300px",
    height: "100vh",
    position: "fixed",
    top: "0",
    overflowX: "",
    border: "none"
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
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 9px 15px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    // border-bottom: 2px solid #000000;
  }

  ${mobile({ borderBottom: "1px solid gray" })}
`;

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
  const [dropdownTodaysDeal, setDropdownTodaysDeal] = useState(false);

  const showTodaysDeal = () => {
    if (window.innerWidth < 960) {
      setDropdownTodaysDeal(false);
    } else {
      setDropdownTodaysDeal(true);
    }
  };

  const hideTodaysDeal = () => {
    setDropdownTodaysDeal(false);
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
  const [dropdownHomeKitchen, setDropdownHomeKitchen] = useState(false);

  const showHomeKitchen = () => {
    if (window.innerWidth < 960) {
      setDropdownHomeKitchen(false);
    } else {
      setDropdownHomeKitchen(true);
    }
  };

  const hideHomeKitchen = () => {
    setDropdownHomeKitchen(false);
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
            Fashion
            {dropdownFashion && <DropdownCat cat="Fashion" />}
          </MenuItem>
          <MenuItem onMouseEnter={showTodaysDeal} onMouseLeave={hideTodaysDeal}>
            Sports
            {dropdownTodaysDeal && <DropdownCat cat="Sports" />}
          </MenuItem>
          <MenuItem onMouseEnter={showElectronics} onMouseLeave={hideElectronics}>
            Electronics
            {dropdownElectronics && <DropdownCat cat="Electronics" />}
          </MenuItem>
          <MenuItem onMouseEnter={showHomeKitchen} onMouseLeave={hideHomeKitchen}>
            Households
            {dropdownHomeKitchen && <DropdownCat cat="Households" />}
          </MenuItem>
          <MenuItem onMouseEnter={showBestSellers} onMouseLeave={hideBestSellers}>
            Music
            {dropdownBestSellers && <DropdownCat cat="Music" />}
          </MenuItem>
          <MenuItem onMouseEnter={showGroceries} onMouseLeave={hideGroceries}>
            Groceries
            {dropdownGroceries && <DropdownCat cat="Groceries" />}
          </MenuItem>
          <MenuItem onMouseEnter={showBooks} onMouseLeave={hideBooks}>
            Books
            {dropdownBooks && <DropdownCat cat="Books" />}
          </MenuItem>
        </Wrapper>
      </Container>
    </ContainerMain>
  );
};

export default MenuBar;
