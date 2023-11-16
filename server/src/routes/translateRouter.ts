import { Router } from "express";
import { translate } from "../controllers/translate";

const translateRouter = Router()

translateRouter.post('/', async (req, res)=> {
    const {fromLenguage, toLenguage, text } = req.body
    try {
        const response = await translate({fromLenguage, toLenguage, text})
        res.status(200).json(response)
    } catch (error: any) {
        res.status(400).json({error: error.message})
        
    }

})
export default translateRouter;

