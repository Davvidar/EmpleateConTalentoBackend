"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resultsCvController_1 = require("../controllers/resultsCvController");
const resultsCvRouter = (0, express_1.Router)();
resultsCvRouter.post("/savecv", resultsCvController_1.saveCvResultsController);
resultsCvRouter.get("/allcvresults", resultsCvController_1.getAllCvResultsController);
resultsCvRouter.get("/cvresultsbyuser", resultsCvController_1.getCvResultsByUserIdController);
exports.default = resultsCvRouter;
