// rafc
import React, { useState } from 'react';
import './counter.css';

// useState con valor numero fijo en 10
export const CounterApp = () => {
    // Valor usestate en 10
    const [counter, setCounter]= useState(10);      

    return (
        <>
           <h4>Counter= { counter }</h4>            

           <button 
           className="btn btn-primary"
           onClick={ () => {
               setCounter( counter + 1);
           }}
           >+1
           </button>
        </>
    )
};

// useState con objeto. Se pierde el estado actual de counter2
export const CounterAppObjeto = () => {
    // useState con objeto como valor
    const [{counter1, counter2}, setCounter]= useState( {
        counter1: 10,
        counter2:20,
        counter3: 30,
        counter4:40 
    } );      

    return (
        <>
           <h4>Counter1= { counter1 }</h4>
           <h4>Counter2= { counter2 }</h4>            

           <button 
           className="btn btn-primary"
           onClick={ () => {
               setCounter( {counter1: counter1 + 1});
           }}
           >+1
           </button>
        </>
    )
};


// useState con objeto. Y utilizando el Spread Operator
export const CounterAppObjetoSpreadOperator = () => {
    // useState con objeto como valor
    const [state, setState]= useState( {
        counter1: 10,
        counter2:20,
        counter3: 30,
        counter4:40 
    } );  
    
    // Extraer de State
    const { counter1, counter2 } = state;

    return (
        <>
           <h4>Counter1= { counter1 }</h4>
           <h4>Counter2= { counter2 }</h4>            

           <button 
           className="btn btn-primary"
           onClick={ () => {
                setState( {
                    // Extrae todas las propiedades y realiza una copia
                    ...state,
                    // Coloca encima de lo que tiene y mantiene todos los valores anteriores
                    counter1: counter1 + 1
                });
           }}
           >+1
           </button>
        </>
    )
};
