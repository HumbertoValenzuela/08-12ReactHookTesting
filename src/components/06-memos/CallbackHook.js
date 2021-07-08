// Componente 17._useCallback hook
import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

// callback hook: 2 casos de usos. 1-Mandar una función a un componente hijo.
// 2-con useEffect el efecto tiene una dependencia. Y esa dependencia es la función. Se recomiendo usar useCallback.
// ¿Porque? de esta manera esta función no esta cambiando. Pero si no se hace con useCallback este efecto se dispararía cada vez que se renderice o se vuelva a construir esa función
export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter(counter + 1);
    // }

    // Regresa una versión memorizada, sirve para mandar como argumentos en otros lugares y React sabe que no va a cambiar. Si la dependencia no a cambiado
    const increment = useCallback( ( numIncrement ) => {
        // setCounter(counter + 1); // Esta con 2 dependencia  ¿Como sacar la dependencia counter?
        // setCounter( counter => counter + 1); 
        setCounter( counter => counter + numIncrement); 
        
    }, [ setCounter ] )

    useEffect(() => {
        // ??
    }, [ increment ])
    
    return (
        <div>
            <h4>useCallback Hook: { counter } </h4>
            <ShowIncrement increment={ increment } />
        </div>
    )
}
