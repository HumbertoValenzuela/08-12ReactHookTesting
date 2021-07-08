import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small';

export const Memorize = () => {

    // Memorize, primero algo tiene que suceder, para que dispare la renderización de este componente
    const {state, increment} = useCounter( 10 );

    // Caso donde el componente Small no se debe de llamar
    const [show, setShow] = useState(true);

    // Crear nuevo componente que renderice <small>{counter}</small>
    return (
        <div>
            <h4>Memorize Counter: <Small value={ state } /> </h4>

            <button onClick={increment} >+ 1</button>

            {/* Valor Booleano no se muestran entonces */}
            <button
                onClick={ () => {
                    setShow( !show) }
                    } 
                >
                    show/hide { JSON.stringify(show)} 
                </button>
        </div>
    )
}
