"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CardsController_1 = require("../controllers/CardsController");
const CardsRouter = (0, express_1.Router)();
CardsRouter.get("/Cards", CardsController_1.getAllCardsController);
CardsRouter.get("/Cards/:id", CardsController_1.getCardsByIdController);
/*CardsRouter.route("/").post(CardsController.addCard);
CardsRouter.route("/:id").get(CardsController.getCardById);
CardsRouter.route("/:id").delete(CardsController.deleteCard); */
exports.default = CardsRouter;
