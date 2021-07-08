import React, { useEffect, useState } from 'react';

export const Coordenadas = () => {

    const [coordena, setCoordena] = useState( {x: 0, y: 0} );
    const {x, y} = coordena;

    // Extraer las coordenadas de la pantalla, cuando este componente este abierto
    useEffect( () => {

        // El Listener se cargará y se acumulará tantas veces como se active el componente. Y Aunque se
        // Desmonte el componente , seguirá igual
        // ¿Como prevenimos esto?
        // window.addEventListener('mousemove', (e) => {  
        //     const { x, y } = e; //Coordenados
        //     console.log(`x: ${x}, y: ${y}`);
        // });

         // ¿Como prevenimos esto? El Callback se pondrá en una función independiente. Para hacer referencia a la misma
         const mouseMove = (e) => {  
                 const coordenada = {x: e.x, y: e.y}; //Coordenados
               
                 setCoordena(coordenada)       
             };
        
         window.addEventListener('mousemove', mouseMove);

        //  Limpieza
        return () => {   
            window.removeEventListener('mousemove', mouseMove);         

        }
        // [] solo mostrar cuando el componente es mostrado por primera vez
    }, [])

    return (
        <div>            
            <p>Coordenadas x: {x}, y: {y}</p>
        </div>
    )
}