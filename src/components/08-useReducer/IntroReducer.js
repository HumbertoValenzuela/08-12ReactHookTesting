// 4._Idea_general_de_un_reducer_-_Vía_código
import React from 'react'

export const IntroReducer = () => {
    // Estado inicial un arreglo de "todos" objetos
    const initialState = [{
        id: 1,
        todo: 'Comprar pan',
        done: false
    }];

    // Reduce. Las action son la que modifica el state
    const todoReducer = ( state = initialState, action) => {
        // no puede realizar peticiones asincronas, no debe tener efecto secundario
        // Cannot read property 'type' of undefined
        // para corregir agregar ? action?
        if (action?.type === 'agregar') {
            return [ ...state, action.payload ];
        }
        // Retorna un nuevo estado
        return state;
    };    

    // Inicializacón del reducer
    let todos = todoReducer();
    console.log(todos);

    // Mandar newTodo a todoReducer
    const newTodo = {
        id: 2,
        todo: 'Comprar Leche',
        done: false
    };

    // Crear una acción para a agregar el newTodo.
    // crear un objeto con un standar. type le dice a reducer que tipo de acción es (agregar modificar etc).
    // payload es un standar de programación para trabajar con los argumentos de la action, la info viene en el payload
    const agregarTodoAction = {
        type: 'agregar',
        payload: newTodo
    }

    todos = todoReducer( todos, agregarTodoAction);
    console.log(todos);// muestra el Array de objeto

    return (
        <div>
            
        </div>
    )
}
