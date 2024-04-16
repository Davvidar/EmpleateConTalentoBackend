import { Router } from "express";
import {
  saveQuizResultsController,
  getAllQuizResultsController,
  getQuizResultsByUserIdController,
} from "../controllers/resultsQuizController";

const resultsQuizRouter = Router();

resultsQuizRouter.post("/savequiz", saveQuizResultsController);
resultsQuizRouter.get("/allquizresults", getAllQuizResultsController);
resultsQuizRouter.get("/quizresultsbyuser", getQuizResultsByUserIdController);

export default resultsQuizRouter;
