"use strict";
// -------------Api chatgpt------------------------
// import openai from "../services/translateConfiguration";
// import { ChatCompletionRequestMessageRoleEnum } from "openai";
// -------------Api chatgpt------------------------
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
exports.translate = void 0;
const axios_1 = __importDefault(require("axios"));
const translate = ({ fromLenguage, toLenguage, text }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (fromLenguage === toLenguage)
        return { translation: text };
    const res = yield (0, axios_1.default)(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLenguage}|${toLenguage}`);
    const data = yield res.data;
    // const translatedText = data
    const translatedText = (_a = data.matches[0]) === null || _a === void 0 ? void 0 : _a.translation;
    return { translation: translatedText };
});
exports.translate = translate;
// ------------------libre translate---------------
//     const res = await axios.post("https://es.libretranslate.com/translate", {
// 		q: "hola",
// 		source: "es",          
// 		target: "en",
// 		format: "text",
// 		api_key: ""
// });
// return res.data;
// ------------------libre translate----------------
// -------------Api chatgpt------------------------
// const messages = [
//     {
//         role: ChatCompletionRequestMessageRoleEnum.System,
//         content: `You are a AI that translate text. You receive a text from the user.
//         Do not answer, just translate the text. The original lenguage is surrounded by '{{' and '}}'.
//         You can also receive {{auto}} which means that you have to detect the lenguage.
//         The lenguage you translate to is surrounded by '[[' and ']]'.`
//     },
//     {
//         role: ChatCompletionRequestMessageRoleEnum.User,
//         content: 'Hola mundo! {{Español}} [[English]]'
//     },
//     {
//         role: ChatCompletionRequestMessageRoleEnum.Assistant,
//         content: 'Hello world!'
//     },
//     // {
//     //     role: ChatCompletionRequestMessageRoleEnum.User,
//     //     content: 'How are you? {{auto}} [[Deutsch]]'
//     // },
//     // {
//     //     role: ChatCompletionRequestMessageRoleEnum.Assistant,
//     //     content: 'Wie geht es dir'
//     // }
// ]
// const completion = await openai.createChatCompletion({
//     model: 'gpt-3.5-turbo',
//     messages: [
//         ...messages,
//         {
//             role: ChatCompletionRequestMessageRoleEnum.User,
//             content: `${text} {{${fromLenguage}}} [[${toLenguage}]]`
//         }
//     ]
// })
// return completion.data.choices[0]?.message?.content;
// -------------Api chatgpt------------------------
