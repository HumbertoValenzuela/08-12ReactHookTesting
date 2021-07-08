import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../datosFijos/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />', () => {
    
    const wrapper = shallow( <TodoApp /> );

    // Verificar si llamamos el localStorage.
    Storage.prototype.setItem = jest.fn( ()=> {});

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();  
    });

    // Llamar métodos como el handleAddTodo={ handleAddTodo } 
    test('debe de agregar un TODO', () => {
        // la dif es que no hará match con el shallow. Se necesita montar todo porque se quiere ver el localStorage, simular
        // mount de enzyme: Se ocupa para probar ya toda la aplicación en contexto, en general. Funciona igual que shallow la diferencia, es el nivel el cuál es renderizada la aplicación
        const wrapper = mount( <TodoApp /> );

        // Buscar elemento TodoAdd. Este componente se agrega una prop que se llama handleAddTodo
        //  Warning: An update to TodoApp inside a test was not wrapped in act(...).
        //  Se debe agregar el act
        // wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        // Como se a montado y se a realizado un cambio. Se necesita envolverlo en el act
        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        });

        // Se realizaron dos cambios, se agregaron
        // Se espera que el h1 tenga un texto TodoApp ( 2 )

        // console.log(wrapper.debug()) cuidado que si se repite el h2 dará error en .text que debe haber uno
        
        expect( wrapper.find('h2').text() ).toBe('TodoApp ( 2 )');

        // Revisar el useEffect(() => {localStorage.setItem('todos'
        // Verificar si llamamos el localStorage. Verificar que el setItem se a llamado. Pero no que se grabo o elimino
        expect( localStorage.setItem).toHaveBeenCalledTimes(2);
        // Para revisar lo que tiene dará error
        // expect( localStorage.setItem).toHaveBeenCalledWith({});
    });

    test('debe de eliminar un todo', () => {
        // Agrega uno
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        // Entra a todoList y elimina uno
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect( wrapper.find('h2').text().trim() ).toBe('TodoApp ( 0 )');
    })
    
    
})
