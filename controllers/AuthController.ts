import { encrypt, compare } from "../utils/handlePassword";
import userModel from "../models/userModel";
import { handleHttpError } from "../utils/handleError";
import { Request, Response } from "express";
import { tokenSign } from "../utils/handlejwt";
import {
  SesionData,
  newUser,
  UserAttributes,
  UserData,
} from "../interfaces/userInterface";
import { Model } from "sequelize";

export const registerController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const data = req.body;
    const newPassword = data.password;
    const passwordHash = await encrypt(newPassword);
    const newUser: newUser = { ...data, password: passwordHash };
    console.log(newUser);
    const user: Model<UserAttributes> = await userModel.create(newUser);

    const userData: UserData = {
      id: user?.get("id") as number,
      name: user?.get("name") as string,
      email: user?.get("email") as string,
      role: user?.get("role") as string,
    };

    const sesiondata: SesionData = {
      token: await tokenSign(user),
      user: userData,
    };

    return res.status(201).json({ sesiondata });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_REGISTER_USER");
  }
};

export const loginController = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const userEmail = req.body.email;
    const loginPassword = req.body.password;
    const user = await userModel.findOne({ where: { email: userEmail } });
    if (!user) {
      return handleHttpError(res, "USER_NOT_EXISTS", 404);
    }
    const userData: UserData = {
      id: user?.get("id") as number,
      name: user?.get("name") as string,
      email: user?.get("email") as string,
      role: user?.get("role") as string,
    };
    const hashPassword = user?.get("password") as string;
    const check = await compare(loginPassword, hashPassword);

    if (!check) {
      return handleHttpError(res, "PASSWORD_INVALID", 401);
    }

    const sesiondata: SesionData = {
      token: await tokenSign(user),
      user: userData,
    };
    return res.status(200).json({ sesiondata });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

export const getAllUsers = async (
  _: Request,
  res: Response
): Promise<Response | void> => {
  try {
    const users: Model<UserAttributes>[] = await userModel.findAll();
    const userData: UserData[] = users.map((user) => ({
      id: user.get("id") as number,
      name: user.get("name") as string,
      email: user.get("email") as string,
      role: user.get("role") as string,
    }));
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
    return handleHttpError(res, "ERROR_GET_ALL_USERS");
  }
};
