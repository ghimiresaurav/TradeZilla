import styled from 'styled-components';
import { categories } from '../data';
import CategoryItem from "./CategoryItem";
import { mobile } from "../responsive";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    
  ${mobile({
    display: "block"
  })}
`;

const Categories = () => {
    return (
        <Container>
            {categories.map((item)=>(
                <CategoryItem item = {item} key = {item.id}></CategoryItem>
            ))} 
        </Container>
    )
}


export default Categories;
