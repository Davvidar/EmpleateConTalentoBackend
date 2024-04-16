import { Router } from "express";
import {
  saveCvResultsController,
  getAllCvResultsController,
  getCvResultsByUserIdController,
} from "../controllers/resultsCvController";

const resultsCvRouter = Router();

resultsCvRouter.post("/savecv", saveCvResultsController);
resultsCvRouter.get("/allcvresults", getAllCvResultsController);
resultsCvRouter.get("/cvresultsbyuser", getCvResultsByUserIdController);

export default resultsCvRouter;
