import { AUTO_LENGUAGE, SUPPORTED_LENGUAGES } from "./utils/constants"

export type Lenguage = keyof typeof SUPPORTED_LENGUAGES
export type AutoLenguage = typeof AUTO_LENGUAGE
export type FromLenguage = Lenguage


export enum Action_types {
    INTERCHANGE_LENGUAGES = 'INTERCHANGE_LENGUAGES',
    SET_FROM_LENGUAGE = 'SET_FROM_LENGUAGE',
    SET_TO_LENGUAGE = 'SET_TO_LENGUAGE',
    SET_FROM_TEXT = 'SET_FROM_TEXT',
    SET_RESULT = 'SET_RESULT',
}

export enum Section_Types {
    From = 'from',
    To = 'to'
}

export interface State {
    fromLenguage: FromLenguage
    toLenguage: Lenguage
    fromText: string
    // loading: boolean
    result: string
}

export type Action = 
| {type : Action_types.INTERCHANGE_LENGUAGES }
| {type: Action_types.SET_FROM_LENGUAGE, payload: FromLenguage}
| {type: Action_types.SET_TO_LENGUAGE, payload: Lenguage}
| {type: Action_types.SET_FROM_TEXT, payload: string}
| {type: Action_types.SET_RESULT, payload: string}