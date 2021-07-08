import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../datosFijos/demoTodos';


// Componente TodoListItem, tiene como argumento un todo(elemento), index (posición indice ), función handleDelete, handleToggle se hace click en el parrafo para tachalo
describe('Pruebas en <TodoListItem />', () => {


    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        // Agregar los argumentos
        <TodoListItem 
            todo = { demoTodos[0] }
            indice = { 0 } 
            // Mandar a llamar con los argumentos
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />
     )
    
    test('debe de mostrar correctamente', () => {
        // snapshot
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de llamar la función handleDelete', () => {
        // jest.fn( )Asegurar que la función haya sido llamada
        // toHaveBeenCalled no indica que fue llamada con los argumentos que se espera
        // toHaveBeenCalledWith esta se puede especificar el argumento con el cuál tiene que ser llamada la función


        // Ocupar la referencia al botón
        wrapper.find('button').simulate('click');

        // Se espera que se llamará con el id de 1
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('debe de llamar la función handleToggle', () => {
        // Se dispara cuando hace click en el parrafo y cambia el done
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);

    });

    test('debe de mostrar el texto correctamente', () => {
        // evaluar en base al texto parrafo
        // <p 
        //         className={`${ todo.done && 'complete' }` }
        //         onClick= { () => handleToggle(todo.id)}
        //     >
        //         {indice + 1}.

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(`1. ${demoTodos[0].desc}`);
    })

    // Condición a evaluar   className={`${ todo.done && 'complete' }` }
    // Si el todo.done esta en true entonces tiene que tener la clase complete
    test('debe de tener la clase complete si el TODO.done=true ', () => {
        

        // cambiar la extracción del todo. Uno que este completado
        const todo = demoTodos[0];
        todo.done = true;

        // Como las funciones son hipoteticas solo, se asegura a que llama la función. Entonces copiar la constante wrapper
        const wrapper = shallow(           
            <TodoListItem 
                todo = { todo }             
            />
         );

        //  console.log(wrapper.html());// <p class="complete">

        // Evaluar con el método hasClass sirve para ver las clases
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
    
    
    
})
