import React from 'react'
import { useCounterArgumento } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHokk = () => {

    // custom hook que maneja el counter
    const {state1, increment1} = useCounterArgumento(1);

    // componente useFetch
    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ state1 }`);
    
    // 11._useFetch_+_useCounter Mostrar en pantalla
    // quote_id: 3, quote: "IFT", author: "Skyler White", series: "Breaking Bad"

    //!!data && data[0] Si viene la data entonces extrae la data[0]
    // !! doble negación transforma el null en un false
    // !null es true y !!null false
    // !null && 'hola' Si es true entonces hola
    // !!null && 'hola' Si no tiene valor entonces no va a ejecutar ni evaluar. retorna false
    const { author, quote} = !!data && data[0];
    // console.log(author, quote);
    return (
        <div>
            <h4>Breaking Bad Quotes</h4>          
            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className="blockquote text-right">
                            <p className="mb-0">{ quote }</p>
                            <footer className="blockquote-footer">{ author }</footer>
                        </blockquote>
                    )
            }

            <button 
                className="btn btn-primary"
                onClick={increment1}
                >
                Siguiente quote
            </button>  
             
        </div>
    )
}
