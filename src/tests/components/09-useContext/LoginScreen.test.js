import React from 'react';
import { mount } from 'enzyme';
import { renderHook, act } from '@testing-library/react-hooks';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
LoginScreen
describe('Pruebas en <LoginScreen', () => {

    const setUser = jest.fn();

    const wrapper = mount(             
          
        <UserContext.Provider value= {{
            // ¿Que se provee en este context? const { setUser }
            // Es posible crear la función acá. Pero no se sabe que fue llamada como argumentos. Entonces mejor
            // setUser: jest.fn() pero como se tiene que evaluar es mejor desde fuera 
            setUser               
        }}   >
            <LoginScreen /> ;
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de ejecutar el setUser con el argumento esperado', () => {
        // La prueba con el botón. wrapper con el mount para llegar al botón
        // el () es para mandar a llamar
        wrapper.find('button').prop('onClick')();
        // Se espera que el setUser sea llamado con ciertos argumentos
        expect( setUser ).toHaveBeenCalledWith({id: 123,
            name: 'humberto',})
    });
})
