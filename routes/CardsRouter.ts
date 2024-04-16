import { Router } from "express";
import db from "../database/db";
import CardsController from "../controllers/CardsController";

const CardsRouter = Router();


CardsRouter.route("/").get(CardsController.getAllCards);
/*CardsRouter.route("/").post(CardsController.addCard);
CardsRouter.route("/:id").get(CardsController.getCardById);
CardsRouter.route("/:id").delete(CardsController.deleteCard); */

export default  CardsRouter