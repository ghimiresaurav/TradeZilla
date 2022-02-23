import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SellOnTradeZilla from './Pages/SellOnTradeZilla';
import Globalstyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


const isLoggedIn = () => localStorage.getItem("name") && localStorage.getItem("userId") && localStorage.getItem("token");

function App() {

  // let userLoggedIn = isLoggedIn();
  let userLoggedIn = false;

  return (
    <>
      <Globalstyle/>
      <Router>
        <Routes>
          <Route exact path="/" element={userLoggedIn ? <Home loggedIn = "true"/> : <Home loggedIn = "false"/>}/>
          <Route path="/product-list/:category" element={userLoggedIn ? <ProductList loggedIn = "true"/> : <ProductList loggedIn = "false"/>}/>
          <Route path="/product/:id" element={userLoggedIn ? <Product loggedIn = "true"/> : <Product loggedIn = "false"/> }/>
          <Route path="/register" element = {userLoggedIn ? <Navigate to = "/"/> : <Register/>}/>
          <Route path="/login" element={userLoggedIn ? <Navigate to = "/"/> :<Login/>}/>
          <Route path="/cart" element={userLoggedIn ? <Cart loggedIn = "true"/> : <Cart loggedIn = "false"/>}/>
          <Route path="/sellontradezilla" element={userLoggedIn ? <SellOnTradeZilla loggedIn = "true"/> : <SellOnTradeZilla loggedIn = "false"/>}/>       
        </Routes>
      </Router>
    </>
  );
}

export default App;