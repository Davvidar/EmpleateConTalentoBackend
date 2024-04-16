import { Router } from "express";
import {
  saveCardsResultsController,
  getAllCardsResultsController,
  getCardsResultsByUserIdController,
} from "../controllers/resultsCardsController";

const resultsCardsRouter = Router();

resultsCardsRouter.post("/savecards", saveCardsResultsController);
resultsCardsRouter.get("/allcardsresults", getAllCardsResultsController);
resultsCardsRouter.get(
  "/cardsresultsbyuser",
  getCardsResultsByUserIdController
);

export default resultsCardsRouter;
