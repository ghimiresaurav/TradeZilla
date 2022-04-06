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
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Upload from './Components/Upload';
import SubCategoriesPath from './routes/routeSubCategories';

const isLoggedIn = () =>   
   ( localStorage.getItem("name") &&
    localStorage.getItem("userId") &&
    localStorage.getItem("token") &&
    localStorage.getItem("email") )

// const isActive = localStorage.getItem("isActive");
// console.log(isActive);

const CategoriesPath = () => useRoutes([
  { path: "/fashion", element: <ProductList loggedIn={isLoggedIn()} title="Fashion"/>},
  { path: "/sports", element: <ProductList loggedIn={isLoggedIn()} title="Sports"/> },
  { path: "/electronics", element: <ProductList loggedIn={isLoggedIn()} title="Electronics"/> },
  { path: "/households", element: <ProductList loggedIn={isLoggedIn()} title="Households"/> },
  { path: "/music", element: <ProductList loggedIn={isLoggedIn()} title="Music"/> },
  { path: "/groceries", element: <ProductList loggedIn={isLoggedIn()} title="Groceries"/> },
  { path: "/books", element: <ProductList loggedIn={isLoggedIn()} title="Books"/> }
]);



function App() {
  return (
    <>
      <Globalstyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home loggedIn={isLoggedIn()}/>}/>
          <Route path="/product/:id" element={<Product loggedIn={isLoggedIn()}/>}/>
          <Route path="/register" element={isLoggedIn() ? <Navigate to="/" /> : <Register />}/>
          <Route path="/login" element={isLoggedIn() ? <Navigate to="/" /> : <Login />}/>
          <Route path="/cart" element={<Cart loggedIn={isLoggedIn()} />}/>
          <Route path="/useraccount" element={<UserAccount loggedIn = {isLoggedIn()}/>}/>
          <Route path="/sellontradezilla" element={<SellOnTradeZilla loggedIn = {isLoggedIn()}/>}/>
          <Route path="/otp" element={(isLoggedIn() && !(localStorage.getItem("isActive") === "true") ? <OTP loggedIn = {isLoggedIn()}/> : <Navigate to="/" />)}/>
          <Route exact path="/upload" element={<Upload loggedIn={isLoggedIn()}/>}/>
          <Route path="/privacy-policy" element={<PrivacyPolicy loggedIn = {isLoggedIn()}/>} />
          <Route path="/payment" element={!isLoggedIn() ? <Navigate to="/" /> : <Payment loggedIn = {isLoggedIn()}/>}/>
        </Routes>
        <CategoriesPath/>
        <SubCategoriesPath loggedIn={isLoggedIn()}/>
      </Router>
    </>
  );
}

export default App;
