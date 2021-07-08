// rafc
// 10._useFetch_-_CustomHook. Peticiones GET a cualquier URL
// https://breakingbadapi.com/
import { useEffect, useRef, useState } from "react";

export const useFetch = ( url ) => {

    // useRef por defecto cuando es llamado, el componente esta montado porque se esta renderizando la primera vez
    // La idea de ismounted es que mantenga la referencia cuando este hook esta vivo o cuando el componente que lo usa sigue montado
    // Cuando se cambia los valores de ismounted, no se quiere lanzar una renderización del componente. Simplemente se mantiene la 
    // referencia al valor
    const isMounted = useRef(true);

    useEffect( () => {

        // Cuando se desmonte
        return () => {
            isMounted.current = false;
        }

    }, [])

    // estado inicial data: null, loading: true, error: null
    const [ state, setState ] = useState( { data: null, loading: true, error: null } );
    
    // Cambia el url realizar un Effect
    useEffect( () => {

        // Al comienzo de la petición, modificar State para que muestre el loading
        setState( { data: null, loading: true, error: null } );

        fetch( url )
            .then( resp => resp.json() ) // retorna otra promesa
            .then( data => {
                
                // Establecer el primer cambio de State
                // setTimeout(() => {
                    // Para impedir el error usando useRef
                    // true esta montado, false no esta montado
                    if ( isMounted.current ) {
                        setState( { 
                            loading: false,
                            error: null,
                            data // será igual a la respuesta del EndPoint
                         })                        
                    }  else {
                        console.log('setState no se llamó');
                    }                  
                // }, 4000);
                
               
            })
            .catch( () => {
                setState({
                    data:null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })
    }, [url] )

    return state;
}
