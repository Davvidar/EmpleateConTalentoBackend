"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultsQuizController_1 = require("../controllers/resultsQuizController");
const resultsQuizRouter = (0, express_1.Router)();
resultsQuizRouter.post("/savequiz", resultsQuizController_1.saveQuizResultsController);
resultsQuizRouter.get("/allquizresults", resultsQuizController_1.getAllQuizResultsController);
resultsQuizRouter.get("/quizresultsbyuser", resultsQuizController_1.getQuizResultsByUserIdController);
exports.default = resultsQuizRouter;
