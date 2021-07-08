import { useState } from "react"


export const useCounter = ( initialState = 10) => {
  
    const [state, setState] = useState(initialState);

    const increment = () => {
        setState ( state + 1);
    };

    const decrement = () => {
        setState ( state - 1);
    };

    return {
        state, 
        increment,
        decrement
    };
}

// useCounter con argumento factor
export const useCounterArgumento = ( initialState = 100) => {
  
    const [state1, setState1] = useState(initialState);

    const increment1 = () => {
        setState1 ( state1 + 1);
    };

    const reset = () => {
        setState1(initialState);
    };

    const decrement1 = () => {
        setState1 ( state1 - 1);
    };

    return {
        state1, 
        reset,
        increment1,
        decrement1
    };
};

//Al llamar useCounterArgumento tenemos un return. Contiene un state1(numero) y 3 funciones