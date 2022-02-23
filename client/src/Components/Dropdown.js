import categories from "../datas/MenuItems";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2px;
`;

const Arrow = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  transform: rotate(45deg);
  border: 2px solid #000000;
  // z-index: 1000;
`;

const DropdownList = styled.ul`
  width: 200px;
  position: absolute;
  margin-top: 8px; //(20/2 - 2 = 8) height of arrow/2 - margin-top of the dropdown container
  list-style: none;
  text-align: start;
  border-bottom: 2px solid #000000;
  border-left: 2px solid #000000;
  border-right: 2px solid #000000;
  // z-index: 300;
`;

const DropdownItem = styled.li`
  background: #ffffff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SubCategory = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #000000;
    padding: 10px;
}`;

const linkStyle = {
  textDecoration: "none",
  color: "#000000",
};

function DropdownCat(props) {
  return (
    <Container>
      <Arrow />
      <DropdownList>
        {categories[props.cat].map((item, index) => {
          return (
            <DropdownItem key={index}>
              <Link to={item.path} style={linkStyle}>
                <SubCategory>{item.title}</SubCategory>
              </Link>
            </DropdownItem>
          );
        })}
      </DropdownList>
    </Container>
  );
}

function DropdownUser() {
  return (
    <Container>
      <Arrow />
      <DropdownList>
        <DropdownItem>
          <Link to="./cart" style={linkStyle}>
            <SubCategory>My Account</SubCategory>
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link to="/cart" style={linkStyle}>
            <SubCategory>Log Out</SubCategory>
          </Link>
        </DropdownItem>
      </DropdownList>
    </Container>
  );
}

// function DropdownBooks() {

//     const [click, setClick] = useState(false);

//     const handleClick = () => setClick(!click);

//     return (
//         <Container>
//             <Arrow/>
//             <ul onclick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
//                 {Books.map((item, index) => {
//                     return (
//                         <li key = {index}>
//                             <Link to = {item.path} onClick = {() => setClick(false)} style = {linkStyle}>
//                                 <SubCategory>
//                                     {item.title}
//                                 </SubCategory>
//                             </Link>
//                         </li>
//                     );
//                 })}
//             </ul>
//         </Container>
//     )
// }

export { DropdownCat, DropdownUser };
