import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const {user, setUser} = useContext(UserContext);
    // Al presionar el botón LogOut se quita el objeto ¿por que?
    // useContext sufre una modificación y notifica a todo sus hijos con el respectivo cambio. Y fuerza el redibujo de cada uno de las partes afectadas
    const handleClick = () => {
        setUser( {} );
    }

    return (
        <div>
            <div>
            <h1>AboutScreen</h1>
            <hr />
            <pre>
                {
                    JSON.stringify(user, null, 3)
                }
            </pre>
            <button
                className="btn btn-warning"
                onClick={ handleClick }
                >
                LogOut
            </button>
        </div>
        </div>
    )
}
