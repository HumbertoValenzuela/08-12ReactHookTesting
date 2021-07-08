import React from 'react';
import { useCounter, useCounterArgumento } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement} = useCounter();

    const {state1, increment1, decrement1, reset} = useCounterArgumento(5);

    return (
        <>
            <h4>Counter with Hook: { state }</h4>
            <button onClick={increment} className="btn btn-primary">+ 1</button>
            <button onClick={decrement} className="btn btn-primary">- 1</button>
            <hr />

            <h4>Counter with Hook and argumento factor: { state1 }</h4>
            {/* pasando como argumento () => increment1(2)*/}
            <button onClick={() => increment1(2)} className="btn btn-primary">+ 1</button>
            <button onClick={ reset } className="btn btn-primary">Reset</button>
            <button onClick={() => decrement1(2)} className="btn btn-primary">- 1</button>
        </>
    )
}
