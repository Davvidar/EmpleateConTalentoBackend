import { Router } from "express";
import {
  loginController,
  registerController,
  getAllUsers,
} from "../controllers/AuthController";

const userRouter = Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/users", getAllUsers);

export default userRouter;
