import { useState } from "react"

// Custom hook maneja el formulario
export const useForm = (initialState = {} ) => {

    const [valueForm, setValueForm] = useState(initialState);
    // Limpiar input
    const reset = () => {
        setValueForm( initialState );
    }
    // Copia lo anterior y agrega uno nuevo
    const handleInputChange = ( { target } ) => {

        setValueForm( { ...valueForm, [ target.name ]: target.value } 
        );
    }
    
    return [ valueForm, handleInputChange , reset];
}


