import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";


// Componente TodoAdd que recibe una función de handleAddTodo. La llama y añade un newTodo

// handleSubmit no se llama sino tiene descripcion
// reset el formulario se debe de resetear. el reset lo tenemos de useForm

describe('Pruebas en <TodoAdd />', () => {
    
    // mock
    const handleAddTodo = jest.fn();

    const wrapper = shallow( 
        <TodoAdd 
            handleAddTodo = { handleAddTodo }
        />
     )
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    // Simular la petición submit del formulario. Por defecto en value={description} no tiene valor. Entonces con la validación hace Nada
    test('NO debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        //console.log(formSubmit); //function

        // formSubmit necesita de preventDefault sino da error
        formSubmit( { preventDefault(){} });

        // Se espera que handleAddTodo toHaveBeenCalledTimes sea llamado cero veces
        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('debe de llamar la función handleAddTodo', () => {
        // valor de la caja de texto
        const value = 'Aprender React';
        // Cambiar el input
        wrapper.find('input').simulate('change', {
            target: {
                value: value,
                name: 'description'
            }
        });

        // Realizar el Submit. Se tiene la referencia al formulario. hace el submit. y se debe de llamar 1 vez
        const formSubmit = wrapper.find('form').prop('onSubmit');
        //console.log(formSubmit); //function

        // formSubmit necesita de preventDefault sino da error
        formSubmit( { preventDefault(){} });

        // Se espera que handleAddTodo toHaveBeenCalledTimes sea llamado cero veces
        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        // Se tiene un problema, se necesita que sea llamado con un objeto. Ese objeto es el que se evalua
        // La prueba pasa es un objeto. Pero si es vacio {}. ¿Si uno lo quiere más preciso?
        expect( handleAddTodo ).toHaveBeenCalledWith( expect.any(Object) );
        // ¿Como lo hacemo? Si se manda un objeto vacio mandará un error debido a que se espera un objeto con datos. Además notar que el id cambia cada vez que es creado. id cambia id: new Date().getTime()
        // expect( handleAddTodo ).toHaveBeenCalledWith( {});
        expect( handleAddTodo ).toHaveBeenCalledWith( {
            // ¿Como le digo jest que id lo revise como un numero
            id: expect.any(Number),
            desc: value,
            done: false,
        });

        // el submit tambien llama al reset(). Por lo cual vuelvo a presionar el botón se realiza nuevamente el posteo con el mismo valor
        // ¿Como saber si se llamo el reset?
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});

