"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const config_1 = require("./utils/config");
const db_1 = __importDefault(require("./database/db"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const resultsCardsRouter_1 = __importDefault(require("./routes/resultsCardsRouter"));
const resultsCvRouter_1 = __importDefault(require("./routes/resultsCvRouter"));
const resultsQuizRouter_1 = __importDefault(require("./routes/resultsQuizRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/", userRouter_1.default);
app.use("/api/", resultsCardsRouter_1.default);
app.use("/api/", resultsCvRouter_1.default);
app.use("/api/", resultsQuizRouter_1.default);
try {
    db_1.default.authenticate();
    console.log("💫💫💫conected to database💫💫💫");
    db_1.default.sync();
    console.log("All models were synchronized successfully.");
}
catch (error) {
    console.log(`error:' ${error}`);
}
exports.server = app.listen(config_1.PORT, () => {
    console.log(`🚀server up in http://localhost:${config_1.PORT}/`);
});
