import React from 'react'
import { useForm } from '../../hooks/useForm';
// 12._Optimización_#2_-_Agregar_TODO
// Funciones y valores handleSubmit, handleInputChange, description se encuentran amarradas al useForm. ¿Cómo optimizar?
// Preguntar el componente TodoApp necesita que este useForm dentro de ella: respuesta es NO.
// Se agregará una handleAddTodo en el componenete TodoApp para realizar la comunicación
export const TodoAdd = ( { handleAddTodo } ) => {

    // Manejo de formulario
    const [ { description }, handleInputChange, reset ] = useForm( {  description: '' } );
    // console.log(description);
    // console.log(todos);

    const handleSubmit = ( e ) => {
        e.preventDefault();

        // Validar string vacios
        if( description.trim().length <= 1 ) {
            return;
        };

        const newTodo = {
            id: new Date().getTime(),           
            desc: description,
            done: false
        };

        // Utiliza la función que viene por parametro y envía el objeto newTodo
        handleAddTodo( newTodo );
      
        // reset de input
        reset();
    };

    return (
        <>
         <h4>Agregar TODO</h4>
 
            <form onSubmit={ handleSubmit }>
                <input 
                    autoComplete="off"
                    className="form-control"
                    name="description"
                    type="text"                     
                    placeholder="Aprender ..."     
                    onChange={handleInputChange} 
                    value={description} />                       
                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                    type="submit">
                    Agregar
                </button>
            </form>           
        </>
    )
}
