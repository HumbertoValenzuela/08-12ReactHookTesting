import React, { useState } from 'react';
import { MultipleCustomHokk } from '../03-examples/MultipleCustomHokk';

// Renderizar un componente de manera condicional.
// Se ocupa MultipleCustomHokk y useFetch. En el useFetch - useEffect - Existe un problema: cuando se carga la info, es posible
// que cierre la ventana antes de terminar o que tarde mucho en responder la API y la persona cierra el componente. Luego de cerrar
// se llamará al setState. Esto lanzará un ERROr. 

// Replicando el error.
// Ir useFetch y agregar un setTimeOut. Ir al sistema - botón hide/show - Muestra la api y el botón sgte quote. Mostrará el Loading de 4seg
// antes de terminar, presiona el boton show/hide. ¿Que hicimos? desmontamos un componente y despues hacemos el setState, lanza un error.
// Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

// Y la Solución. Ir useFetch - para ver explicación

export const RealExampleRef = () => {

    // State para mostrar y ocultar condicionalmente el componente MultipleCustomHokk
    const [show, setShow] = useState(false);

    return (
        <div>
            <h4>RealExampleRef</h4>
            { show && <MultipleCustomHokk />}

            <button 
            className="btn btn-primary mt-5"
            onClick={ () => { setShow( !show ); } }
            >Show/Hide
            </button>
        </div>
    )
}
