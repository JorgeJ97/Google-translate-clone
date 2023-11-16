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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const translate_1 = require("../controllers/translate");
const translateRouter = (0, express_1.Router)();
translateRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { fromLenguage, toLenguage, text } = req.body;
    try {
        const response = yield (0, translate_1.translate)({ fromLenguage, toLenguage, text });
        res.status(200).json(response);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}));
exports.default = translateRouter;
