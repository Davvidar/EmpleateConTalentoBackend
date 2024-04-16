import db from "../database/db";
import { Request, Response } from "express";
import CardsModel from "../models/CardsModel";

const CardsController = {

    getAllCards: async (req: Request, res: Response) => {
        try {
            const cards = await CardsModel.getAllCards();
            res.json(cards);
        } catch (error) {

        }
    },
   /* addCard: async (req: Request, res: Response) => {
        const { title, description, image} = req.body;
        if (!title || !description || !image) {
            res.status(400).json({ message: 'Faltan datos' });
            return;
        }
        const result = await CardsModel.addCard(title, description, image);
        res.send(result);

    }
     getCardById: async (req: Request, res: Response) => {
        try {
            const title = req.params.title;
            const card = await CardsModel.getCardById(id);
            if (!Array.isArray(card) || card.length === 0) {
                res.status(404).json({ message: "Card not found" });
                return
            }
        } catch (error) {
            console.log(error)
        }
    }  */
}
export default CardsController

