import express, { Request, Response, Router } from "express";

// Import auth function
import auth from "../auth/auth";

// Import controllers
import logout from "../controllers/logout";
import verifyEmail from "../controllers/verifyEmail";

const router: Router = express.Router();

router.use(auth);

router.get("/test", (req: Request, res: Response) => {
  return res.json("welcome");
});

router.post("/verify-email", verifyEmail);

router.delete("/logout", logout);

export default router;
