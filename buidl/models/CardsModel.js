"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsModel = void 0;
const db_1 = __importDefault(require("../database/db"));
const sequelize_1 = require("sequelize");
exports.CardsModel = db_1.default.define("cards", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo title no puede estar vacío",
            },
        },
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo description no puede estar vacío",
            },
        },
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo image no puede estar vacío",
            },
        },
    },
}, {
    timestamps: false,
});
exports.default = exports.CardsModel;
