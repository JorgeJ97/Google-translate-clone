"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = require("openai");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { OPENAI_API_KEY } = process.env;
const configuration = new openai_1.Configuration({
    apiKey: OPENAI_API_KEY
});
const openai = new openai_1.OpenAIApi(configuration);
exports.default = openai;
