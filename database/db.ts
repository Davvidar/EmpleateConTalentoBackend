import { Sequelize } from "sequelize";
import {
  DB_DATABASE,
  DB_TEST_DATABASE,
  DB_PASSWORD,
  DB_USER,
  NODE_ENV,
  DB_HOST,
} from "../utils/config";

const DB_NAME = NODE_ENV === "test" ? DB_TEST_DATABASE : DB_DATABASE;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

export default db;
