import React, {memo} from 'react'

// Functional component se dispara ,cada vez que se realiza un cambio en pantalla
export const Small = memo(( { value }  ) => {
    // Como prevenir que este componente se vuelva a renderizar, si sus props son las mismas ¿? Metodo memo
    console.log('me volvi a llamar :(');
    
    return (
        <div>
            <small>{value}</small>
        </div>
    )
});
