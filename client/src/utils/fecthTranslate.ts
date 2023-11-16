import { FromLenguage, Lenguage } from "../types"
import axios from 'axios'
import { URL } from "./constants"

interface Props {
    fromLenguage : FromLenguage
    toLenguage: Lenguage
    debounceFromText: string
}

export const fecthTranslate =  async ( {fromLenguage, toLenguage, debounceFromText}: Props) => {
        
    const response = await axios.post(URL, {
      fromLenguage,
      toLenguage,
      text: debounceFromText,
    })
    const data =  await response?.data
    const translation: string = data?.translation;
    // console.log(data)
    return (translation)
    
  }