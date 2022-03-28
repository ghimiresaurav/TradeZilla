import styled from "styled-components";
import TopBars from "../Components/TopBars";

const Container = styled.div`

`;

const Payment = (props) => {
  return (
    <Container>
        <TopBars loggedIn = {props.loggedIn}/>	
    </Container>
  )
}

export default Payment