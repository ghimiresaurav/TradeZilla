import { useRoutes } from "react-router-dom";
import ProductList from '../Pages/ProductList';

const SubCategoriesPath = (props) => useRoutes([
  //Fashion
  { path: "/fashion/mens-wear", element: <ProductList loggedIn = {props.loggedIn} title="Mens Wear"/>},
  { path: "/fashion/womens-wear", element: <ProductList loggedIn = {props.loggedIn} title="Womens wear"/>},
  { path: "/fashion/accessories", element: <ProductList loggedIn = {props.loggedIn} title=" Fashion Accessories"/>},
  { path: "/fashion/shoes", element: <ProductList loggedIn = {props.loggedIn} title="Shoes"/>},
  { path: "/fashion/bags", element: <ProductList loggedIn = {props.loggedIn} title="Bags"/>},


  //Sports
  { path: "/sports/sports-wear", element: <ProductList loggedIn = {props.loggedIn} title="Sports Wear"/> },
  { path: "/sports/equipments", element: <ProductList loggedIn = {props.loggedIn} title="Sports Equipments"/> },
  { path: "/sports/nutrition", element: <ProductList loggedIn = {props.loggedIn} title="Sports Nutrition"/> },
  { path: "/sports/fitness", element: <ProductList loggedIn = {props.loggedIn} title="Fitness"/> },
  { path: "/sports/accessories", element: <ProductList loggedIn = {props.loggedIn} title="Sports Accessories"/> },


  //Electronics
  { path: "/electronics/tablets-and-phones", element: <ProductList loggedIn = {props.loggedIn} title="Tablets and Phones"/> },
  { path: "/electronics/computers", element: <ProductList loggedIn = {props.loggedIn} title="Computers"/> },
  { path: "/electronics/cameras-and-accessories", element: <ProductList loggedIn = {props.loggedIn} title="Cameras and Accessories"/> },
  { path: "/electronics/household-appliances", element: <ProductList loggedIn = {props.loggedIn} title="Household Appliances"/> },


  //Households
  { path: "/households/furnitures", element: <ProductList loggedIn = {props.loggedIn} title="Furnitures"/> },
  { path: "/households/utensils", element: <ProductList loggedIn = {props.loggedIn} title="Utensils"/> },
  { path: "/households/decorations", element: <ProductList loggedIn = {props.loggedIn} title="Decorations"/> },
  { path: "/households/health-care", element: <ProductList loggedIn = {props.loggedIn} title="Health Care"/> },
  { path: "/households/outdoors", element: <ProductList loggedIn = {props.loggedIn} title="Outdoors"/> },
  

  //Music
  { path: "/music/cd-and-cassettes", element: <ProductList loggedIn = {props.loggedIn} title="CD and Cassettes"/> },
  { path: "/music/instruments", element: <ProductList loggedIn = {props.loggedIn} title="Instruments"/> },
  { path: "/music/accessories", element: <ProductList loggedIn = {props.loggedIn} title="Music Accessories"/> },
  { path: "/music/studio-items", element: <ProductList loggedIn = {props.loggedIn} title="Studio Items"/> },

  //Groceries
  { path: "/groceries/beverages", element: <ProductList loggedIn = {props.loggedIn} title="Beverages"/> },
  { path: "/groceries/packaged-foods", element: <ProductList loggedIn = {props.loggedIn} title="Packaged Foods"/> },
  { path: "/groceries/cooking-ingredients", element: <ProductList loggedIn = {props.loggedIn} title="Cooking Ingredients"/> },
  { path: "/groceries/fresh-goods", element: <ProductList loggedIn = {props.loggedIn} title="Fresh Goods"/> },
  { path: "/groceries/cleaning", element: <ProductList loggedIn = {props.loggedIn} title="Cleaning"/> },

  //Books
  { path: "/books/fiction", element: <ProductList loggedIn = {props.loggedIn} title="Fiction"/> },
  { path: "/books/non-fiction", element: <ProductList loggedIn = {props.loggedIn} title="Non-Fiction"/> },
  { path: "/books/literature", element: <ProductList loggedIn = {props.loggedIn} title="Literature"/> },
  { path: "/books/biography", element: <ProductList loggedIn = {props.loggedIn} title="Biography"/> },
  { path: "/books/education", element: <ProductList loggedIn = {props.loggedIn} title="Education"/> }  
]);

export default SubCategoriesPath;