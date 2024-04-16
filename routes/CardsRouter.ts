import { Router } from "express";
import {
    getAllCardsController,
    getCardsByIdController,
} from "../controllers/CardsController";

const CardsRouter = Router();

CardsRouter.get("/Cards", getAllCardsController);
CardsRouter.get("/Cards/:id", getCardsByIdController);
/*CardsRouter.route("/").post(CardsController.addCard);
CardsRouter.route("/:id").get(CardsController.getCardById);
CardsRouter.route("/:id").delete(CardsController.deleteCard); */

export default CardsRouter