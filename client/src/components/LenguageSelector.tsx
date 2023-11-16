
import {Form } from 'react-bootstrap'
import { /*AUTO_LENGUAGE*/ SUPPORTED_LENGUAGES } from '../utils/constants'
import {  FromLenguage, Lenguage, Section_Types } from '../types.d'

type Props =  
|{ type: Section_Types.From, value: FromLenguage,  onChange : (payload : FromLenguage) => void}
|{ type: Section_Types.To, value: Lenguage,  onChange : (payload : Lenguage) => void}



export const LenguageSelector: React.FC<Props> = ({onChange, value, /*type*/}) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Lenguage)

    }
    return ( 
        <Form.Select aria-label='Selecciona el idioma' onChange={(event) => handleChange(event)} value= {value}>

            {/* {type === Section_Types.From && <option value={AUTO_LENGUAGE}> Detectar idioma</option>} */}
            {Object.entries(SUPPORTED_LENGUAGES).map(([key, literal]) => {
                return (
                    <option key={key} value={key}>
                        {literal}

                    </option>
                )
            })}

        </Form.Select>

    )


}



