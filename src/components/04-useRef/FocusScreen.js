import React, { useRef } from 'react'

export const FocusScreen = () => {

    // useRef es para mantener una referencia mutable. Es posible cambiar a lo que apunta este ref sin necesidad de disparar una renderización en la parte de React
    // Hook
    const inputRef = useRef();
    // console.log(inputRef); // current: input#focus.form-control

    // Focus en el input nombre .focus .select
    const handleClick = () => {
        // document.querySelector('#focus').select();

        // Usando el useRef
        inputRef.current.select();
        // console.log(inputRef);// muestra toda la referencia del input
    };   

   return (
       <div>
           <h4>Focus Screen</h4>
           <input 
            ref={ inputRef }
            // id="focus" //dejamos de ocupar, debido a useRef
            className="form-control" 
            placeholder="Su nommbre" />

           <button className="btn btn-outline-primary mt-4" onClick={ handleClick } >Focus</button>
       </div>
   )
}
