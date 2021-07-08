import React from 'react';
import {shallow} from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../datosFijos/demoTodos';
// 13._Pruebas_en_el_TodoList
// TodoList: hace que depende de la cantidad de todos, se debe de contar cuantos elementos de tipo TodoListItem deberían de haber. Si al mandar 2 se debe de obtener 2
describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
        // mandar objeto a todos
            todos = { demoTodos }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
    );
    test('debe de mostrarse Correctamente', () => {
        // wrapper tiene que hacer Match con el Snapshot
        expect( wrapper ).toMatchSnapshot();
               
    });

    test('debe de tener dos  <TodoListItem />', () => {
        // Analizar que tiene dos elementos o con sus
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        // TodoListItem  tenga las propiedades correctas
        // console.log( wrapper.find('TodoListItem').at(0).props());// son funciones
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function) );
    })
    
    
})
