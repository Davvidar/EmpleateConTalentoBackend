import express from "express";
import { PORT } from "./utils/config";
import db from "./database/db";
import userRouter from "./routes/userRouter";
import cors from "cors";
import CardsRouter from "./routes/CardsRouter";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/", userRouter);
app.use("/api/Cards", CardsRouter);


try {
  db.authenticate();
  console.log("💫💫💫conected to database💫💫💫");
  db.sync();
  console.log("All models were synchronized successfully.");
} catch (error) {
  console.log(`error:' ${error}`);
}

export const server = app.listen(PORT, () => {
  console.log(`🚀server up in http://localhost:${PORT}/`);
});


