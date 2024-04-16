"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const db_1 = __importDefault(require("../database/db"));
const sequelize_1 = require("sequelize");
exports.UserModel = db_1.default.define("users", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "el campo name no puede estar vacío",
            },
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "el campo email no puede estar vacío",
            },
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "el campo password no puede estar vacío",
            },
        },
    },
    role: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 1,
    },
}, {
    timestamps: false,
});
exports.default = exports.UserModel;
