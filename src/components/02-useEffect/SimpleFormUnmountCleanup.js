// rafc
import React, { useState } from 'react';
import './effects.css';
import { Message } from './Message';
import { Coordenadas } from './Coordenadas';

// Los hook como useState no puede ser llamado de manera condicional, es decir, que este dentro de un if
// Los hook deben estar lo más arriba posible, cerca del componente
// useEffect se ocupa para escuchar cambios especificos del useState o de la aplicación, tambien se aplica a funciones o objetos.
// useEffect trabaja en base a la posición y no en base a un nombre de una función.
// useEffect tiene un return, ¿que retorna? una función. Utilizado para limpiar cuando el componente se desmonta
export const SimpleFormUnmountCleanup = () => {

    // Manejar el estado de formulario
    const [formState, setFormState] = useState({ name:  '' } );

    // Extraer elementos de formState
    const {name} = formState;
      
    // Cambios en el Input
    const handleInputChange = ({target}) => {    

        // Para ver el Input en pantalla, llamar setFormState
        setFormState({...formState, [ target.name ]: target.value})
    }

    return (
        <>
            <h4>name 123 mostrar Message  Cleanup</h4>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu Nombre" 
                    autoComplete="off" 
                    value={name}
                    onChange={ handleInputChange}
                >
                </input>                
            </div>          
           
            {/* Si name existe y es = a '123', entonces mostrar Message */}
              {(name === '123') && <Message />}  
              {(name === '123') && <Coordenadas />}           
        </>
    )
}
