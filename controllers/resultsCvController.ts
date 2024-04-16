import resultsCvModel from "../models/resultsCvModel";
import { handleHttpError } from "../utils/handleError";
import { Request, Response } from "express";
import { Results, NewResults } from "../interfaces/resultsInterface";
import { Model } from "sequelize";

export const saveCvResultsController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const data = req.body;
    const newResult: NewResults = { ...data };
    console.log(newResult);
    const result: Model<Results> = await resultsCvModel.create(newResult);

    const resultsData: Results = {
      userId: result?.get("user_id") as number,
      score: result?.get("score") as string,
      createdAt: result?.get("createdAt") as Date,
    };

    return res.status(201).json({ resultsData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_SAVING_RESULTS");
  }
};

export const getAllCvResultsController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const results: Model<Results>[] = await resultsCvModel.findAll();

    const resultsData: Results[] = results.map((result) => ({
      id: result.get("id") as number,
      userId: result.get("userId") as number,
      score: result.get("score") as string,
      createdAt: result.get("createdAt") as Date,
    }));

    return res.status(200).json({ results: resultsData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_GETTING_RESULTS");
  }
};

export const getCvResultsByUserIdController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const userId = req.params.userId;

    const results: Model<Results>[] = await resultsCvModel.findAll({
      where: {
        userId: userId,
      },
    });

    const resultsData: Results[] = results.map((result) => ({
      id: result.get("id") as number,
      userId: result.get("userId") as number,
      score: result.get("score") as string,
      createdAt: result.get("createdAt") as Date,
    }));

    return res.status(200).json({ results: resultsData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_GETTING_RESULTS_BY_USER_ID");
  }
};
