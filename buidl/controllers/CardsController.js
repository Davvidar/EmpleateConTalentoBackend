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
exports.updateCardController = exports.deleteCardController = exports.getCardsByIdController = exports.getAllCardsController = exports.saveCardsController = void 0;
const CardsModel_1 = __importDefault(require("../models/CardsModel"));
const handleError_1 = require("../utils/handleError");
const saveCardsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newCard = Object.assign({}, data);
        console.log(newCard);
        const card = yield CardsModel_1.default.create(newCard);
        const CardsData = {
            id: card.get("id"),
            title: card.get("title"),
            description: card.get("description"),
            image: card.get("image"),
        };
        return res.status(201).json({ CardsData });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_SAVING_CARD");
    }
});
exports.saveCardsController = saveCardsController;
const getAllCardsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield CardsModel_1.default.findAll();
        const cardsData = results.map((result) => ({
            id: result.get("id"),
            title: result.get("title"),
            description: result.get("description"),
            image: result.get("image"),
        }));
        return res.status(200).json({ results: cardsData });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_GETTING_CARDS");
    }
});
exports.getAllCardsController = getAllCardsController;
const getCardsByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardId = req.params.id;
        const results = yield CardsModel_1.default.findAll({
            where: {
                id: cardId,
            },
        });
        if (results.length === 0) {
            return res.status(404).json({ message: "Card not found" });
        }
        const cardsData = results.map((result) => ({
            id: result.get("id"),
            title: result.get("title"),
            description: result.get("description"),
            image: result.get("image"),
        }));
        return res.status(200).json({ results: cardsData });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_GETTING_CARD_BY_ID");
    }
});
exports.getCardsByIdController = getCardsByIdController;
const deleteCardController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardId = req.params.id;
        const cardToDelete = yield CardsModel_1.default.findOne({
            where: {
                id: cardId,
            },
        });
        if (!cardToDelete) {
            return res.status(404).json({ message: "Card not found" });
        }
        yield cardToDelete.destroy();
        return res.status(200).json({ message: "Card deleted successfully" });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_DELETING_CARD");
    }
});
exports.deleteCardController = deleteCardController;
const updateCardController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cardId = req.params.id;
        const { title, description, image } = req.body;
        let cardToUpdate = yield CardsModel_1.default.findOne({
            where: {
                id: cardId,
            },
        });
        4;
        if (!cardToUpdate) {
            return res.status(404).json({ message: "Card not found" });
        }
        cardToUpdate = yield cardToUpdate.update({
            title,
            description,
            image,
        });
        return res.status(200).json({ card: cardToUpdate });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_UPDATING_CARD");
    }
});
exports.updateCardController = updateCardController;
