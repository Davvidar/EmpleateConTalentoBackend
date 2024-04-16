"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleHttpError = void 0;
const handleHttpError = (res, message = "Ups something happened!", code = 403) => {
    res.status(code);
    res.send({ error: message });
};
exports.handleHttpError = handleHttpError;
