
export const todoReducer = ( state = [], action) => {
    // Se puede ocupar condicionales en esta sección
    switch ( action.type) {

        case 'add':
            // Obtener el state anterior y añadir el nuevo elemento
            return [ ...state, action.payload]
        case 'delete':
            // .filter regresa un new Array
            return state.filter(todo => todo.id !== action.payload);
        case 'toggle':
            return state.map(todo =>
                    ( todo.id === action.payload )
                        ? { ...todo, done: !todo.done }
                        : todo
                )
        // case 'toggle-old':            
        //     return state.map(todo => { 
        //         if ( todo.id === action.payload ) {
        //             // retornar todo los elementos pero se quiere cambiar el done
        //             return {
        //                 ...todo,
        //                 done: !todo.done
        //             }
        //         } else {
        //             // Sino cambia regresar algo, sino da error undefined
        //             return todo;
        //         }
               
        //     });
        default:
            return state;
    }
}