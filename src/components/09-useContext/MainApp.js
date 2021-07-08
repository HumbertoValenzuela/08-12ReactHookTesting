// Lo que se coloca en el index
import React, { useState } from 'react';
import { AppRouter } from './AppRouter';
import { UserContext } from './UserContext';

// 5._Configurar_Router_en_React. Se coloca algo dentro del return para que la aplicación sepa que rutas tiene. Y que direcciones tiene.
// Se hará una aplicación de una sola página, es decir, que si de MainApp quiero navegar a AboutScreen yo no quiero que haga una peticón al servidor y que el servidor me regrese la pagina solicitada. Esto hará que retorne código de React, css y cosas que ya tiene el navegador web cliente.
// La idea es que cambie lo que es independiente de esa pantalla, es decir, renderizará el componente código que necesita cargar. Es posible realizar peticiones http, traer info, recursos. Pero la idea no hacer refresh del navegador web para cambiar entre pantallas
export const MainApp = () => {

    // const user = {
    //     id: 123,
    //     name: 'Humberto',
    //     email: 'hvg.informatico@gmail.com'
    // }

      // useContext cambiar, nuevos valores o borrar, hacer un logout. ¿Como se hace?
      const [user, setUser] = useState( {} );


    return (
        // UserContext.Provider Provee info a lo largo de sus componentes hijos. 
        // ¿Como hago para usar user en HomeScreen? ir a HomeScreen para ver
      
        <UserContext.Provider value={{
            user,
            setUser,            
        } } >
            <AppRouter />
        </UserContext.Provider>
    )
}
