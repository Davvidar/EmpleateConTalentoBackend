"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCvResultsByUserIdController = exports.getAllCvResultsController = exports.saveCvResultsController = void 0;
const resultsCvModel_1 = __importDefault(require("../models/resultsCvModel"));
const handleError_1 = require("../utils/handleError");
const saveCvResultsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newResult = Object.assign({}, data);
        console.log(newResult);
        const result = yield resultsCvModel_1.default.create(newResult);
        const resultsData = {
            userId: result === null || result === void 0 ? void 0 : result.get("user_id"),
            score: result === null || result === void 0 ? void 0 : result.get("score"),
            createdAt: result === null || result === void 0 ? void 0 : result.get("createdAt"),
        };
        return res.status(201).json({ resultsData });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_SAVING_RESULTS");
    }
});
exports.saveCvResultsController = saveCvResultsController;
const getAllCvResultsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield resultsCvModel_1.default.findAll();
        const resultsData = results.map((result) => ({
            id: result.get("id"),
            userId: result.get("userId"),
            score: result.get("score"),
            createdAt: result.get("createdAt"),
        }));
        return res.status(200).json({ results: resultsData });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_GETTING_RESULTS");
    }
});
exports.getAllCvResultsController = getAllCvResultsController;
const getCvResultsByUserIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const results = yield resultsCvModel_1.default.findAll({
            where: {
                userId: userId,
            },
        });
        const resultsData = results.map((result) => ({
            id: result.get("id"),
            userId: result.get("userId"),
            score: result.get("score"),
            createdAt: result.get("createdAt"),
        }));
        return res.status(200).json({ results: resultsData });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_GETTING_RESULTS_BY_USER_ID");
    }
});
exports.getCvResultsByUserIdController = getCvResultsByUserIdController;
