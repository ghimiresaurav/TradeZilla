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
import rejectOrder from "../controllers/rejectOrder";
import getOrderHistories from "../controllers/getOrderHistory";
import getOwnProducts from "../controllers/getOwnProducts";
import handleOrders from "../controllers/handleOrders";

router.post("/add-product", addProduct);

router.post("/add-to-cart/:p_id", addToCart);
router.delete("/remove-from-cart/:c_id", removeFromCart);

router.post("/add-review/:p_id", addReview);
router.post("/add-query/:p_id", addQuery);
router.post("/answer-query/:p_id", answerQuery);

router.post("/order/:p_id", order);
router.post("/order", handleOrders);
router.post("/dispatch/:o_id", confirmOrder);
router.delete("/reject-order/:o_id", rejectOrder);

router.get("/get-order-history", getOrderHistories);
router.get("/getOrders", getOrders);
router.get("/get-cart-items", getCartItems);

router.get("/get-own-products", getOwnProducts);

export default router;
