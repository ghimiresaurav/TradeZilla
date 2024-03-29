import express, { Request, Response, Router } from "express";

// Import auth function
import auth from "../auth/loggedIn.auth";

// Import controllers
import logout from "../controllers/logout";
import verifyEmail from "../controllers/verifyEmail";
import requestOTP from "../controllers/requestOTP";

// Import Route
import verifiedRoute from "./emailVerified";
import userInfo from "../controllers/userInfo";

const router: Router = express.Router();

router.use(auth);
router.use("/v", verifiedRoute);

router.post("/verify-email", verifyEmail);
router.get("/otp", requestOTP);

router.get("/user-info", userInfo);

router.delete("/logout", logout);

export default router;
