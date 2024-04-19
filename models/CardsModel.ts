import db from "../database/db";
import { DataTypes } from "sequelize";

export const CardsModel = db.define(
  "cards",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo title no puede estar vacío",
        },
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo description no puede estar vacío",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "El campo image no puede estar vacío",
        },
      },
    },
  },
  {
    timestamps: false,
  }
);

export default CardsModel;
