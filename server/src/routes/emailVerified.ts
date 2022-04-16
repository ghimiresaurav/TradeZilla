import express, { Router } from "express";

// Import auth function
import auth from "../auth/emailVerified.auth";

const router: Router = express.Router();
router.use(auth);

// Import controllers
import addProduct from "../controllers/addProduct";
import addQuery from "../controllers/addQuery";
import answerQuery from "../controllers/answerQuery";
import order from "../controllers/order";
import confirmOrder from "../controllers/confirmOrder";
import addReview from "../controllers/review";

router.post("/add-product", addProduct);

router.post("/add-query/:p_id", addQuery);
router.post("/answer-query/:p_id", answerQuery);

router.post("/order/:p_id", order);
router.post("/dispatch/:o_id", confirmOrder);

router.post("/add-review/:p_id", addReview);

export default router;
