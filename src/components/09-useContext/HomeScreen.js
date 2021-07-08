// Tener la info del usuario
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

    // useContext busca la sgte instancia en este árbol de componentes que sea de tipo UserContext
    // const userContext = useContext(UserContext);
    // console.log(userContext);

    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            <pre>
                { JSON.stringify(user, null, 3)}
            </pre>
        </div>
    )
}
