import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import SellOnTradeZilla from "./Pages/SellOnTradeZilla";
import OTP from "./Pages/OTP";
import Globalstyle from "./globalStyles";
import UserAccount from "./Pages/UserAccount";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Payment from "./Pages/Payment";
import Search from "./Pages/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useRoutes,
} from "react-router-dom";
import Upload from "./Components/Upload";
import SubCategoriesPath from "./routes/routeSubCategories";
import Category from "./Pages/Category";

const isLoggedIn = () =>
  localStorage.getItem("name") &&
  localStorage.getItem("userId") &&
  localStorage.getItem("token") &&
  localStorage.getItem("email");

const CategoriesPath = () =>
  useRoutes([
    {
      path: "cat/:category",
      element: <Category loggedIn={isLoggedIn()} />,
    },
  ]);

const SearchPath = "";
function App() {
  return (
    <>
      <Globalstyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home loggedIn={isLoggedIn()} />} />
          <Route
            path="/product/:id"
            element={<ProductDetail loggedIn={isLoggedIn()} />}
          />
          <Route
            path="/register"
            element={isLoggedIn() ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={isLoggedIn() ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/cart"
            element={
              !isLoggedIn() ? (
                <Navigate to="/" />
              ) : (
                <Cart loggedIn={isLoggedIn()} />
              )
            }
          />
          <Route
            path="/useraccount"
            element={
              !isLoggedIn() ? (
                <Navigate to="/" />
              ) : (
                <UserAccount loggedIn={isLoggedIn()} />
              )
            }
          />
          <Route
            path="/sellontradezilla"
            element={
              !isLoggedIn() ? (
                <Navigate to="/" />
              ) : (
                <SellOnTradeZilla loggedIn={isLoggedIn()} />
              )
            }
          />
          <Route
            path="/otp"
            element={
              isLoggedIn() && !(localStorage.getItem("isActive") === "true") ? (
                <OTP loggedIn={isLoggedIn()} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            exact
            path="/upload"
            element={<Upload loggedIn={isLoggedIn()} />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy loggedIn={isLoggedIn()} />}
          />
          <Route
            path="/payment"
            element={
              !isLoggedIn() ? (
                <Navigate to="/" />
              ) : (
                <Payment loggedIn={isLoggedIn()} />
              )
            }
          />
          <Route
            path="/search/:product"
            element={<Search loggedIn={isLoggedIn()} />}
          />
        </Routes>
        <CategoriesPath />
        <SubCategoriesPath loggedIn={isLoggedIn()} />
      </Router>
    </>
  );
}

export default App;
