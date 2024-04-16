import { Router } from "express";
import {
  saveQuizResultsController,
  getAllQuizResultsController,
  getQuizResultsByUserIdController,
} from "../controllers/resultsQuizController";

const userRouter = Router();

userRouter.post("/savequiz", saveQuizResultsController);
userRouter.get("/allquizresults", getAllQuizResultsController);
userRouter.get("/quizresultsbyuser", getQuizResultsByUserIdController);

export default userRouter;
