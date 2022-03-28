import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import SellOnTradeZilla from './Pages/SellOnTradeZilla';
import OTP from './Pages/OTP';
import Globalstyle from './globalStyles';
import UserAccount from './Pages/UserAccount';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Payment from './Pages/Payment';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Upload from './Components/Upload';

const isLoggedIn = () => {
  if (
    localStorage.getItem("name") &&
    localStorage.getItem("userId") &&
    localStorage.getItem("token")
  )
    return true;
  return false;
};

function App() {
  return (
    <>
      <Globalstyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home loggedIn={isLoggedIn()}/>}/>
          <Route path="/product-list/:category" element={<ProductList loggedIn={isLoggedIn()}/>}/>
          <Route path="/product/:id" element={<Product loggedIn={isLoggedIn()}/>}/>
          <Route path="/register" element={isLoggedIn() ? <Navigate to="/" /> : <Register />}/>
          <Route path="/login" element={isLoggedIn() ? <Navigate to="/" /> : <Login />}/>
          <Route path="/cart" element={<Cart loggedIn={isLoggedIn()} />}/>
          <Route path="/useraccount" element={<UserAccount loggedIn = {isLoggedIn()}/>}/>
          <Route path="/sellontradezilla" element={<SellOnTradeZilla loggedIn = {isLoggedIn()}/>}/>
          <Route path="/otp" element={!isLoggedIn() ? <Navigate to="/" /> : <OTP loggedIn = {isLoggedIn()}/>}/>
          <Route exact path="/upload" element={<Upload loggedIn={isLoggedIn()}/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy loggedIn = {isLoggedIn()}/>} />
          {/* <Route path="/payment" element={!isLoggedIn() ? <Navigate to="/" /> : <Payment />}/> */}
          <Route path="/payment" element={!isLoggedIn() ? <Navigate to="/" /> : <Payment loggedIn = {isLoggedIn()}/>}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
