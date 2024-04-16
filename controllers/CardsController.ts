import CardsModel from "../models/CardsModel";
import { handleHttpError } from "../utils/handleError";
import { Request, Response } from "express";
import { Cards } from "../interfaces/cardsInterface";
import { Model } from "sequelize";

export const getAllCardsController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const results: Model<Cards>[] = await CardsModel.findAll();

    const cardsData: Cards[] = results.map((result) => ({
      id: result.get("id") as number,
      title: result.get("title") as string,
      description: result.get("description") as string,
      image: result.get("image") as string,
    }));

    return res.status(200).json({ results: cardsData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_GETTING_CARDS");
  }
};

export const getCardsByIdController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const cardId = req.params.id;

    const results: Model<Cards>[] = await CardsModel.findAll({
      where: {
        Id: cardId,
      },
    });

    const cardsData: Cards[] = results.map((result) => ({
        id: result.get("id") as number,
        title: result.get("title") as string,
        description: result.get("description") as string,
        image: result.get("image") as string,
    }));

    return res.status(200).json({ results: cardsData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_GETTING_CARD_BY_ID");
  }
};
