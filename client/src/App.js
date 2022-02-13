import Home from './Pages/Home';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Globalstyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 63eea585e4728ac3010bef4ac3766df28850050a


const isLoggedIn = () => localStorage.getItem("name") && localStorage.getItem("userId") && localStorage.getItem("token");

function App() {
<<<<<<< HEAD
  const user = false
=======

  // let userLoggedIn = isLoggedIn();
  let userLoggedIn = false;

>>>>>>> 63eea585e4728ac3010bef4ac3766df28850050a
  return (
    <>
      <Globalstyle/>
      <Router>
        <Routes>
<<<<<<< HEAD
          <Route exact path="/" element={<Home/>}/>
          <Route path="/product-list/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/register" element = {user ? <Navigate to = "/"/> : <Register/>}/>
          <Route path="/login" element={user ? <Navigate to = "/"/> :<Login/>}/>
=======
          <Route exact path="/" element={userLoggedIn ? <Home LoggedIn = "true"/> : <Home LoggedIn = "false"/> }/>
          <Route path="/product-list/:category" element={<ProductList/>}/>
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/register" element = {userLoggedIn ? <Navigate to = "/"/> : <Register/>}/>
          <Route path="/login" element={userLoggedIn ? <Navigate to = "/"/> :<Login/>}/>
>>>>>>> 63eea585e4728ac3010bef4ac3766df28850050a
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;