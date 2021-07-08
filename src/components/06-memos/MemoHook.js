import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'


export const MemoHook = () => {
   
    const {state, increment} = useCounter( 100 );    
    const [show, setShow] = useState(true);
   
    const procesoPesado = ( iteraciones ) => {

        for (let i = 0; i < iteraciones; i++) {
            console.log('Ahí vamos... !!');            
        }
        return `${iteraciones} iteraciones realizadas`;
    };

    // Memoriza este valor 5000, si los argumentos son iguales. Si cambian, entonces reprocesar  
    const memoProcesoPesado = useMemo( () => procesoPesado(state), [state]);

    return (
        <div>
            <h4>MemoHook Counter: <small>{state}</small></h4>

            <p>Proceso: { memoProcesoPesado } </p>

            <button onClick={increment} >+ 1</button>  
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
