import { Router } from "express";
import {
  saveCvResultsController,
  getAllCvResultsController,
  getCvResultsByUserIdController,
} from "../controllers/resultsCvController";

const userRouter = Router();

userRouter.post("/savecv", saveCvResultsController);
userRouter.get("/allcvresults", getAllCvResultsController);
userRouter.get("/cvresultsbyuser", getCvResultsByUserIdController);

export default userRouter;
// cambiar endpoints!!
