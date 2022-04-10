import express, { Request, Response, Router } from "express";

// Import auth function
import auth from "../auth/auth";

// Import controllers
import logout from "../controllers/logout";
import verifyEmail from "../controllers/verifyEmail";
import addQuery from "../controllers/addQuery";
import addProduct from "../controllers/addProduct";
import requestOTP from "../controllers/requestOTP";
import answerQuery from "../controllers/answerQuery";
import order from "../controllers/order";
import addReview from "../controllers/review"
import confirmOrder from "../controllers/confirmOrder";

const router: Router = express.Router();

router.use(auth);

router.get("/test", (req: Request, res: Response) => {
  return res.json("welcome");
});

router.post("/add-query/:p_id", addQuery);
router.post("/answer-query/:p_id", answerQuery);

router.post("/add-review/:p_id", addReview);

router.post("/dispatch/:o_id", confirmOrder);

router.post("/order/:p_id", order);

router.post("/add-product", addProduct);

router.post("/verify-email", verifyEmail);
router.get("/otp", requestOTP);

router.delete("/logout", logout);

export default router;
