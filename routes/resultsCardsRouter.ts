import { Router } from "express";
import {
  saveCardsResultsController,
  getAllCardsResultsController,
  getCardsResultsByUserIdController,
} from "../controllers/resultsCardsController";

const userRouter = Router();

userRouter.post("/savecards", saveCardsResultsController);
userRouter.get("/allcardsresults", getAllCardsResultsController);
userRouter.get("/cardsresultsbyuser", getCardsResultsByUserIdController);

export default userRouter;
