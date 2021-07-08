import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounterArgumento } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layout.css';

// https://es.reactjs.org/docs/hooks-reference.html#uselayouteffect
// 14._useLayoutEffect: Despues de que se renderice algo, yo puedo sacar mediciones de como quedaron divs o dif componentes (ej: los tamaños). O ejecutar código después de que se renderiza todo mi HTML
// Crear un archivo css para obtener un caso real. Ver el tamaño de <p>


export const Layout = () => {

    // custom hook que maneja el counter
    const {state1, increment1} = useCounterArgumento(1);

    // componente useFetch
    const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ state1 }`);    
   
    const { quote } = !!data && data[0];
    

    const [boxSize, setBoxSize] = useState( {} );

    // Mantener la Referencia al parrafo  <p className="mb-0">{ quote }</p>
    const pTag = useRef();

    useLayoutEffect(() => {
        // Dentro useLayoutEffect se puede utilizar como dependencia, cuando la data cambia (quote). Si cambia quote significa que parrafo que lo contiene, se modifico
        setBoxSize( pTag.current.getBoundingClientRect() );
        // Arreglo de dependencias
    }, [quote])

    return (
        <div className="css">
            <h4>Layout Effect</h4>          
           
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={ pTag }
                >{ quote }
                </p>               
            </blockquote>

            <pre>
                { JSON.stringify(boxSize, null, 3) }
            </pre>

            <button 
                className="btn btn-primary"
                onClick={increment1}
                >
                Siguiente quote
            </button>  
             
        </div>
    )
}
