import { useReducer } from 'react';
import { State, Action, Action_types, FromLenguage, Lenguage } from '../types.d';
// import { AUTO_LENGUAGE } from '../utils/constants';

const initialState: State = {
    fromLenguage: 'es',
    toLenguage: 'en',
    fromText: '',
    // loading: false,
    result: ''
  }
  
  const reducer = (state: State, action: Action) => {
  
    const {type} = action
    const {SET_FROM_LENGUAGE, SET_RESULT, SET_FROM_TEXT, SET_TO_LENGUAGE, INTERCHANGE_LENGUAGES} = Action_types
  
    switch(type) {
  
      case SET_RESULT:
        return {
          ...state,
          result: action.payload,
          // loading: false
        }
      case SET_FROM_TEXT:
        // const aux = state.fromText !== ''
        return {
          ...state,
          fromText: action.payload,
          // loading: aux,
          result: ''
        }
  
      case SET_TO_LENGUAGE:
        if(state.toLenguage === action.payload) return state
        // const loading = state.fromText !== ''
        return {
          ...state,
          toLenguage: action.payload,
          result: '',
          // loading
        }
  
      case SET_FROM_LENGUAGE:
        if(state.fromLenguage === action.payload) return state
        // const load = state.fromText !== ''
        return {
          ...state,
          result: '',
          fromLenguage: action.payload,
          // loading: load
        }
  
      
      case INTERCHANGE_LENGUAGES:

      // if(state.fromLenguage === AUTO_LENGUAGE) return {...state}
        return {
          ...state,
          fromLenguage: state.toLenguage,
          toLenguage: state.fromLenguage
        }
  
        default:
          return {...state}
  
    }
  
  }

  const useAppReducer = () => {
    const [{fromLenguage, toLenguage, result,fromText}, dispatch] = useReducer(reducer, initialState)


    const interchangeLenguages = () =>{
      dispatch({ type: Action_types.INTERCHANGE_LENGUAGES})
    }
    const setFromLenguage = (payload: FromLenguage) =>{
      dispatch({ type: Action_types.SET_FROM_LENGUAGE, payload })
    }
    const setToLenguage = (payload: Lenguage) =>{
      dispatch({ type: Action_types.SET_TO_LENGUAGE, payload })
    }
    const setFromText = (payload: string) =>{
      dispatch({ type: Action_types.SET_FROM_TEXT, payload })
    }
    const setResult = (payload: string) =>{
      dispatch({ type: Action_types.SET_RESULT, payload })
    }

    return {
      fromLenguage,
      toLenguage,
      fromText,
      result,
      // loading,
      interchangeLenguages,
      setFromLenguage,
      setToLenguage, 
      setFromText,
      setResult
    }
  }

  export default useAppReducer;