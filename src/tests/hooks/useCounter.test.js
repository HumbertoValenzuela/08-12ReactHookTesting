import { renderHook, act } from '@testing-library/react-hooks';
import { useCounterArgumento } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {
    
    test('debe de retornar valores por default', () => {
        
        // La info no se encuentra en result. es en result.current
        const { result } = renderHook( () => useCounterArgumento() );
        console.log( result.current );

        //debe ir en orden. igual que en el return. Se espera un 100
        expect( result.current.state1 ).toBe(100);
        // Se espera una funcion
        expect( typeof result.current.reset ).toBe('function');
        expect( typeof result.current.increment1 ).toBe('function');
        expect( typeof result.current.decrement1 ).toBe('function');
    });

    test('debe de tener el state1 en 100', () => {
        
        // La info no se encuentra en result. es en result.current
        const { result } = renderHook( () => useCounterArgumento(100) );        

        //debe ir en orden. igual que en el return. Se espera un 100
        expect( result.current.state1 ).toBe(100);      
    });
    
    test('debe de incrementar el state1 en 1', () => {        
        // La info no se encuentra en result. es en result.current
        const { result } = renderHook( () => useCounterArgumento(100) );     
        const { increment1 } = result.current;

        act( () => {
            increment1();
        });

        const { state1 } = result.current;
        expect( state1 ).toBe(101);             
    });

    test('debe de decrementar el state1 en 1', () => {        
        // La info no se encuentra en result. es en result.current
        const { result } = renderHook( () => useCounterArgumento(100) );     
        const { decrement1 } = result.current;

        act( () => {
            decrement1();
        });

        const { state1 } = result.current;
        expect( state1 ).toBe(99);             
    });

    test('debe de reset en 100', () => {        
      
        const { result } = renderHook( () => useCounterArgumento(100) );     
        const { decrement1, reset } = result.current;

        act( () => {
            decrement1();
            reset();
        });

        const { state1 } = result.current;
        expect( state1 ).toBe(100);             
    });

})
