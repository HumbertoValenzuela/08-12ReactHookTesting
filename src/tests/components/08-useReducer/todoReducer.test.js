import { renderHook, act } from '@testing-library/react-hooks';
import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../datosFijos/demoTodos';

// todoReducer(siempre regresan un estado) regresa un arreglo y una action
describe('Pruebas en todoReducer', () => {

    test('debe de retornar el estado por defecto ', () => {
        // state tendrá demotodos y un objeto vacio
        const state = todoReducer(demoTodos, {});
        //Se espera demoTodos será igual a demoTodos
        expect( state ).toEqual( demoTodos );
    });

    test('debe de agregar un TODO ', () => {

        // Objeto a insertar
        const newTodo = {
            id:3,
            desc:'Aprender Express',
            done: false
        };

        // action para entender la acción
        const action = {
            type:'add',
            payload: newTodo
        }

        // state tendrá demotodos y un objeto vacio
         const state = todoReducer(demoTodos, action);
        //Se espera que el objeto demoTodos será 3
         expect( state.length ).toBe( 3 );
          //Se espera que el objeto demoTodos es igual a demoTodos
          expect( state ).toEqual( [...demoTodos, newTodo] );
    });

    
    test('debe de borrar un TODO', () => {
        // el action.payload debe de ser el id del TODO

        // action para entender la acción
        const action = {
            type:'delete',
            payload: 1
        }
      
        const state = todoReducer(demoTodos, action);
        expect( state.length ).toBe( 1 );
        // Que solo queda el primero, es decir, 1
        // Si son objetos se evalua con toEqual
        expect( state ).toEqual( [ demoTodos[1] ] );
    });

    // de false a true de true a false
    test('debe de hacer el TOGGLE del TODO', () => {
          // action para entender la acción
          const action = {
            type:'toggle',
            payload: 1
        }
     
        const state = todoReducer(demoTodos, action);
        // Se espera que el primer elemento.done estaba en false y ahora estará en true
        expect( state[0].done ).toBe( true );
        // Asegurar que el segundo elemento no cambio
        // Si son objetos se evalua con toEqual
        expect( state[1] ).toEqual( demoTodos[1] );
    })
});
