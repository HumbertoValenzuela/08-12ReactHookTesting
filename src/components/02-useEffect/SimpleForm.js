// rafc
import React, { useEffect, useState } from 'react';
import './effects.css';

// Los hook como useState no puede ser llamado de manera condicional, es decir, que este dentro de un if
// Los hook deben estar lo más arriba posible, cerca del componente
// useEffect se ocupa para escuchar cambios especificos del useState o de la aplicación, tambien se aplica a funciones o objetos.
// useEffect trabaja en base a la posición y no en base a un nombre de una función.
// useEffect tiene un return, ¿que retorna? una función. Utilizado para limpiar cuando el componente se desmonta
export const SimpleForm = () => {

    // Manejar el estado de formulario
    const [formState, setFormState] = useState({
        name:  '',
        email: ''
    });

    // Extraer elementos de formState
    const {name, email} = formState;

    // useEffect se dispara inmediatamente y cada vez que useState cambia
    // useEffect(() => {
    //     console.log('hey!');
    // });
    
    // useEffect se dispara una vez
     useEffect(() => {
        console.log('hey!');
    }, []);

    // Ejecutar algo cada vez que formState cambie
    useEffect(() => {
        console.log('formState Cambio');
    }, [formState]);

    // Ejecutar algo solo cuando cambia el email
    useEffect(() => {
        console.log('Email Cambio');
    }, [email]);
    // Cambios en el Input
    const handleInputChange = ({target}) => {
        // obtener elemento que cambio
        // console.log(e.target.name);

        // Para ver el Input en pantalla, llamar setFormState
        setFormState({...formState, [ target.name ]: target.value})
    }

    return (
        <>
            <h4>cuando algo suceda</h4>
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

            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Tu Correo" 
                    autoComplete="off" 
                    value={email}
                    onChange={ handleInputChange}
                >
                </input>                
            </div>                     
        </>
    )
}
