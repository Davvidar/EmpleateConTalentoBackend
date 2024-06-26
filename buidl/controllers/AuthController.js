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
exports.loginController = exports.registerController = void 0;
const handlePassword_1 = require("../utils/handlePassword");
const userModel_1 = __importDefault(require("../models/userModel"));
const handleError_1 = require("../utils/handleError");
const handlejwt_1 = require("../utils/handlejwt");
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const newPassword = data.password;
        const passwordHash = yield (0, handlePassword_1.encrypt)(newPassword);
        const newUser = Object.assign(Object.assign({}, data), { password: passwordHash });
        console.log(newUser);
        const user = yield userModel_1.default.create(newUser);
        const userData = {
            id: user === null || user === void 0 ? void 0 : user.get("id"),
            name: user === null || user === void 0 ? void 0 : user.get("name"),
            email: user === null || user === void 0 ? void 0 : user.get("email"),
            role: user === null || user === void 0 ? void 0 : user.get("role"),
        };
        const sesiondata = {
            token: yield (0, handlejwt_1.tokenSign)(user),
            user: userData,
        };
        return res.status(201).json({ sesiondata });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_REGISTER_USER");
    }
});
exports.registerController = registerController;
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userEmail = req.body.email;
        const loginPassword = req.body.password;
        const user = yield userModel_1.default.findOne({ where: { email: userEmail } });
        if (!user) {
            return (0, handleError_1.handleHttpError)(res, "USER_NOT_EXISTS", 404);
        }
        const userData = {
            id: user === null || user === void 0 ? void 0 : user.get("id"),
            name: user === null || user === void 0 ? void 0 : user.get("name"),
            email: user === null || user === void 0 ? void 0 : user.get("email"),
            role: user === null || user === void 0 ? void 0 : user.get("role"),
        };
        const hashPassword = user === null || user === void 0 ? void 0 : user.get("password");
        const check = yield (0, handlePassword_1.compare)(loginPassword, hashPassword);
        if (!check) {
            return (0, handleError_1.handleHttpError)(res, "PASSWORD_INVALID", 401);
        }
        const sesiondata = {
            token: yield (0, handlejwt_1.tokenSign)(user),
            user: userData,
        };
        return res.status(200).json({ sesiondata });
    }
    catch (error) {
        console.log(error);
        return (0, handleError_1.handleHttpError)(res, "ERROR_LOGIN_USER");
    }
});
exports.loginController = loginController;
