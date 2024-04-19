"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../utils/config");
const DB_NAME = config_1.NODE_ENV === "test" ? config_1.DB_TEST_DATABASE : config_1.DB_DATABASE;
const db = new sequelize_1.Sequelize(config_1.DB_DATABASE, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: "mysql",
    define: {
        timestamps: false,
    },
    port: config_1.PORT,
});
exports.default = db;
