import express, { Router } from "express";

// Import auth function
import auth from "../auth/emailVerified.auth";

const router: Router = express.Router();
router.use(auth);

// Import controllers
import addProduct from "../controllers/addProduct";
import addToCart from "../controllers/addToCart";
import addQuery from "../controllers/addQuery";
import answerQuery from "../controllers/answerQuery";
import order from "../controllers/order";
import confirmOrder from "../controllers/confirmOrder";
import getOrders from "../controllers/getOrders";
import addReview from "../controllers/review";
import getCartItems from "../controllers/getCartItems";
import removeFromCart from "../controllers/removeFromCart";

router.post("/add-product", addProduct);

router.post("/add-to-cart/:p_id", addToCart);
router.delete("/remove-from-cart/:c_id", removeFromCart);

router.post("/add-query/:p_id", addQuery);
router.post("/answer-query/:p_id", answerQuery);

router.post("/order/:p_id", order);
router.post("/dispatch/:o_id", confirmOrder);
router.get("/getOrders", getOrders);
router.get("/get-cart-items", getCartItems);
router.post("/add-review/:p_id", addReview);

export default router;
