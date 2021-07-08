import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

// https://reactrouter.com/web/guides/testing

describe('Pruebas en <AppRouter />', () => {
    // const wrapper = mount( <AppRouter /> );

    // test('debe de mostrar correctamente ', () => {
    //     // Dará error porque HomeScreen necesitan del user: The above error occurred in the <HomeScreen> component:
    //     expect( wrapper ).toMatchSnapshot();
    // });

    // Mostrará el html. el user necesario por homeScreen.
    // Proveer el user
    const user = {
        id:1,
        name: 'Humberto'
    }
    // Solución proveer el contexto
    const wrapper = mount( 
        <UserContext.Provider value={{user}}>
            <AppRouter />
        </UserContext.Provider>
         ); 
    
    test('debe de mostrar Correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });
    
    
})
