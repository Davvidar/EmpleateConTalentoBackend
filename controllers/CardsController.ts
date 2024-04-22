import CardsModel from "../models/CardsModel";
import { handleHttpError } from "../utils/handleError";
import { Request, Response } from "express";
import { Cards, NewCard } from "../interfaces/cardsInterface";
import { Model } from "sequelize";



export const saveCardsController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const data = req.body;
    const newCard: NewCard = { ...data };
    console.log(newCard);        
    const card: Model<Cards> = await CardsModel.create(newCard);

    const CardsData: Cards = {
      id: card.get("id") as number,
      title: card.get("title") as string,
      description: card.get("description") as string,
      image: card.get("image") as string,
    };

    return res.status(201).json({ CardsData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_SAVING_CARD");
  }
};

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

    if (!results) {
      return res.status(404).json({ message: "Card not found" });
    }
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
export const deleteCardController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const cardId = req.params.id;

    const cardToDelete: Model<Cards> | null = await CardsModel.findOne({
      where: {
        id: cardId,
      },
    });

    if (!cardToDelete) {
      return res.status(404).json({ message: "Card not found" });
    }

    await cardToDelete.destroy();

  
    return res.status(200).json({ message: "Card deleted successfully" });
  } catch (error) {
    console.log(error);
    
    return handleHttpError(res, "ERROR_DELETING_CARD");
  }
};
export const updateCardController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const cardId = req.params.id;
    const { title, description, image } = req.body;

    let cardToUpdate: Model<Cards> | null = await CardsModel.findOne({
      where: {
        id: cardId,
      },
    });

 4
    if (!cardToUpdate) {
      return res.status(404).json({ message: "Card not found" });
    }

  
    cardToUpdate = await cardToUpdate.update({
      title,
      description,
      image,
    });


    return res.status(200).json({ card: cardToUpdate });
  } catch (error) {
    console.log(error);

    return handleHttpError(res, "ERROR_UPDATING_CARD");
  }
};

