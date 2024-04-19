import { Router } from "express";
import {
    saveCardsController,
    updateCardController,
    deleteCardController,
    getAllCardsController,
    getCardsByIdController
} from "../controllers/CardsController";

const CardsRouter = Router();

CardsRouter.get("/Cards", getAllCardsController);
CardsRouter.get("/Cards/:id", getCardsByIdController);
CardsRouter.post("/Cards", saveCardsController);
CardsRouter.delete('/Cards/:id', deleteCardController);
CardsRouter.put('/cards/:id', updateCardController);

export default CardsRouter