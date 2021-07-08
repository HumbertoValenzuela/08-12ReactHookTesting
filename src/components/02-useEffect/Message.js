import React, { useEffect } from 'react';

export const Message = () => {

    useEffect( () => {
        console.log('componente Montado');
        return () => {
            console.log('componente Desmontado');
        }
        // [] solo mostrar cuando el componente es mostrado por primera vez
    }, [])

    return (
        <div>
            <p>Si name existe y es = a '123', entonces mostrar Message </p>
        </div>
    )
}
