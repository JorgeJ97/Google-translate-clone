// -------------Api chatgpt------------------------
// import openai from "../services/translateConfiguration";
// import { ChatCompletionRequestMessageRoleEnum } from "openai";
// -------------Api chatgpt------------------------

import axios from 'axios'
import { type TranslateProps } from "../../types.d";


export const translate = async ({ fromLenguage, toLenguage, text }: TranslateProps) => {

    if(fromLenguage === toLenguage) return { translation : text};
    const res = await axios(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLenguage}|${toLenguage}`)
    const data = await res.data
    // const translatedText = data
    const translatedText = data.matches[0]?.translation
    return { translation : translatedText}
}



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







