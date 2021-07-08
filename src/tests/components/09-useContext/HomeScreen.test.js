import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

// Leer el contexto y extraer el usuario. Y ese usuario mostrarlo en pantalla

describe('Pruebas en <HomeScreen /> ', () => { // Revisar si HomeScreen norecibe argumento
    
    
    test('debe de mostrarse correctamente ', () => {
        
        // Match con el Snapshot
        // const wrapper = shallow( <HomeScreen /> );
        // TypeError: Cannot destructure property 'user' of '(0 , _react.useContext)(...)' as it is null.
        // Es debido a que no se tiene ningún context. Se esta ejecutando de manera aislada
        // expect( wrapper ).toMatchSnapshot();

        // ¿Como establecer un context
        // Ir a componente UserContext: Se importa la función createContext de react y se crea un UserContext.
        // ¿Como se usa este context? MainApp: crea el UserContext.Provider y el provider crea el contexto, este comporta el value a lo largo de todos sus componentes hijos, en este caso el AppRouter. Como nuestro HomeScreen esta dentro de nuestra AppRouter por eso tiene acceso al UserContext.Provider
        const user = {
            name: 'Humberto',
            email: 'hvg@gmail.com',
        };
        // const wrapper = shallow(             
            // Acá es donde se puede proveer el {user}. Que info de user quiero proveer?
            // <UserContext.Provider value= {{
                // user
                
            // }}  >
                // <HomeScreen /> ;
            // </UserContext.Provider>
        // );
        // La prueba debería de crear el snapshot. Ver el snaphshot
        // expect( wrapper ).toMatchSnapshot();
        //exports[`Pruebas en <HomeScreen />  debe de mostrarse correctamente  1`] = `Array [<HomeScreen />, " ;",] `;
        // Se observa que la prueba no sirve. ¿Porque? por que se ocupa el shallow. Shallow renderiza el primer componente, en este caso el UserContext.Provider que internamente esta renderizando el HomeScreen.

        // Se necesita revisar el HomeScreen, cambiar shallow por mount  
        //Con esto el HomeScreen se mostrará correctamente
        // Notar el console.log { name: 'Humberto', email: 'hvg@gmail.com' } que se encuentra en el compoenente HomeScreen. Tambien se ejecuta
        const wrapper = mount(             
          
            <UserContext.Provider value= {{
                user                
            }}  >
                <HomeScreen /> ;
            </UserContext.Provider>
        );
        
        expect( wrapper ).toMatchSnapshot();

    });    
});
