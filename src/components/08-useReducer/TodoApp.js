import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import './styles.css';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

// reducer es la función reducer,
    // initializerArg es el estado inicial que se puede mandar
    // init es usado como una función ára inicializar el initializerArg, en caso de que sea como procesado o haga varias accciones.
    // init: cada vez que el componente se redibuja , entonces al ser una función  que esta externa al compoenente lo hace más ligero y tambien puede memorizar
    // state
    // dispatch: despacha las acciones asía mi reducer. Cuando se hace cambios en el initializerArg, React se enterá para redibujar en pantalla

   

    // Punto inicial de la aplicación
// const initializerArg = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

// initializerArg queda dentro de la función init , pero se realiza un return del objeto. initializerArg en el useReducer queda []
const init = () => {

    // Extraer de LocalStorage
    // localStorage.getItem('noexiste') es null
    // JSON.parse(null) es null
    return JSON.parse(localStorage.getItem('todos') ) || [];
     //Extrae y si es null muestra []

    // return [{
    //         id: new Date().getTime(),
    //         desc: 'Aprender React',
    //         done: false
    //     }];
}

export const TodoApp = () => {

    
    // dispatch: función con una acción, sabe a que reducer mandar info
    // y cuando cambia initializerArg va a redibujar lo que cambie
    // init, ayudará a computar el estado inicial para que funcione más rápido el componente, y se re vuelva a ejecutar
    const [ todos, dispatch ] = useReducer(todoReducer, [], init );

    // Custom hook maneja el formulario
    // const [ formValues, handleInputChange] = useForm( {  description: '' });// Se asocia con el input name= description
    // console.log(formValues);
   
    // initializer

    // Grabar en LocalStorage. ¿Cuando? cuando los 'todos' cambien. usar useEffect
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
        // return () => {
        //     cleanup
        // }
    }, [todos]);
    // 10._Toggle_Todo_-_ Marcar_como_completado _ o _ pendiente_un_TODO
    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    };

    // Se puede solo la descripcion o todo el newTodo (objeto)
    const handleAddTodo = ( newTodo ) => {
        // ¿Como mandar action al todoReducer? con dispatch          
        dispatch( { 
            type: 'add',
            payload: newTodo
        } );
    };

    const handleDelete = (todoId) => {
        console.log(todoId);
        // crear la action borrar
        const action = {
            type: 'delete',
            payload: todoId
        }
        // dispatch
        dispatch(action);
    }   

    // 6._Creando_el_cascaron_de_la_lista_de_TODOs
    return (
        <div>
             <h2>TodoApp ( { todos.length } )</h2>

            <div className="row">

                <div className="col-7">
                <TodoList 
                    todos={todos} 
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                    />
                </div>

                <div className="col-5">
                   <TodoAdd 
                //    Mandar por referencia a TodoAdd
                    handleAddTodo={ handleAddTodo } />
                </div>
            </div>
        </div>
    )
}
