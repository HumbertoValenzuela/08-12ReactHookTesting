import React from 'react'

// Memoriza este componente si los argumentos no cambian
export const ShowIncrement = React.memo(( { increment } ) => {

    console.log('Me volvi a ejecutar :(');

    return (
        <button 
            onClick= { () => {
                // increment();// argumento sin modificar
                increment( 5 );// modificando argumento
                } } 
        >
            Incrementar
        </button> 
    )
});
