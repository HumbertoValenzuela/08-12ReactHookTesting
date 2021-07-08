// 7._Pruebas_sobre_useFetch_-_CustomHook
// Recordando el useFetchGifs.test.js se tenía un problema. Cuando se realiza useFetchGifs y se trae la info. Se tenía un await waitForNextUpdate porque sino revienta la aplicación porque estaba manejando de manera insegura el setState. Es decir, estabamos llamando el setState en nuestro Hook cuando ya se había desmontado y eso nos disparaba un error.
import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from "../../hooks/useFetch";

// Ahora no será necesario porque se tíene el useRef en nuestro Hook 

describe('Pruebas en useFetch', () => {
    // el return de useFetch es state. ¿ Qué es el state? En primera instancia son los datos por defecto
    test('debe de retornar la info por defecto', () => {
        // result y waitFor palabra reservada de renderHook
        const { result } = renderHook( () => useFetch( 'https://www.breakingbadapi.com/api/quotes/1' ));

        // Extraer la info del state básico. desestructurar el result
        const { data, loading, error } = result.current;
        // esto es sincrono antes de que el useFetch lo resuelva
        expect(data).toBe(null);
        expect(loading).toBe(true);
        expect(error).toBe(null);        
    });

    // Esperar el resultado del useFetch
    test('debe de tener la info, loading false error en false ', async() => {
        // waitForNextUpdate regresa una promesa
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1'));

        await waitForNextUpdate();
        // Extraer la info del state básico. desestructurar el result
        const { data, loading, error } = result.current;
        console.log(data);
        // Las aserciones, ¿que se espera?
        expect( data.length).toBe(1);//regresa un array
        expect( loading).toBe(false);
        expect( error).toBe(null);
    })

    test('debe de manejar el error ', async() => {
        // waitForNextUpdate regresa una promesa
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2'));

        await waitForNextUpdate();
        // Extraer la info del state básico. desestructurar el result
        const { data, loading, error } = result.current;
        // console.log(data.length);
        // Las aserciones, ¿que se espera?
        expect( data).toBe(null);//regresa un array
        expect( loading).toBe(false);
        expect( error).toBe('No se pudo cargar la info');
    })
    
})
