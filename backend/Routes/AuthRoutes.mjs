import e from "express";
import AuthController from "../Controllers/AuthController.mjs";
const AuthRouter = e.Router();
AuthRouter.post("/logout", AuthController.logout);
AuthRouter.get("/google", AuthController.google);
AuthRouter.get("/google/callback", AuthController.googleCallback);
export default AuthRouter;
