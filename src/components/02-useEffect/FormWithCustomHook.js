// rafc
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => {

    // Usando el hook useForm
    const [valueForm, handleInputChange] = useForm({ name:  '', email:  '', password:  '' } );

    // Extraer elementos de valueForm
    const {name, email, password} = valueForm;      
    
    useEffect(() => {
        console.log('email cambió')
    }, [ email ]);


    const handleSubmit = e => {
        e.preventDefault();
        console.log( valueForm );
    }

    return (
        <form onSubmit={ handleSubmit } >
            <h4>FormWithCustomHook</h4>
            <div className="form-group">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu Nombre" 
                    autoComplete="off" 
                    value={name}
                    onChange={ handleInputChange}
                >
                </input>                
            </div>    

             <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Tu Correo" 
                    autoComplete="off" 
                    value={email}
                    onChange={ handleInputChange}
                >
                </input>                
            </div>     

             <div className="form-group">
                <input 
                    type="password" 
                    name="password" 
                    className="form-control" 
                    placeholder="****" 
                    autoComplete="off" 
                    value={password}
                    onChange={ handleInputChange}
                >
                </input>                
            </div>  

            <button type="submit" className="btn btn-primary">Guardar</button>        
        </form>
    )
}
