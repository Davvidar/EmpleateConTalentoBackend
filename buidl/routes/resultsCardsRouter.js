"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultsCardsController_1 = require("../controllers/resultsCardsController");
const resultsCardsRouter = (0, express_1.Router)();
resultsCardsRouter.post("/savecards", resultsCardsController_1.saveCardsResultsController);
resultsCardsRouter.get("/allcardsresults", resultsCardsController_1.getAllCardsResultsController);
resultsCardsRouter.get("/cardsresultsbyuser", resultsCardsController_1.getCardsResultsByUserIdController);
exports.default = resultsCardsRouter;
