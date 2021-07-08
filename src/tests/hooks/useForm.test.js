import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';
  // reset: initialState debe ser igual al initialForm
    // useForm regresa un arreglo. Primer argumento valor del formulario. segundo evento para hacer modificaciones. tercero el reset. es el orden de importar
describe('Pruebas en useForm', () => {

    // Variable para inicializar el formulario
    const initialForm = {
        name: 'Humberto',
        email: 'hvg@gmail.com'
    };

    test('debe de regresar un formulario por defecto ', () => {
        const { result } = renderHook( () => useForm(initialForm) )
        // el return del userForm es un arreglo
        const [ valueForm, handleInputChange, reset ] = result.current;
        // expect toEqual
        expect( valueForm ).toEqual(initialForm)
        // expect function
        expect( typeof handleInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    });

    test('debe de cambiar el valor del formulario', () => {
        // Llamar al handleInputChange recibe el evento target
        const { result } = renderHook( () => useForm( initialForm ) );
         // el return del userForm es un arreglo
         const [ , handleInputChange ] = result.current;

        act( () => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Elena'
                }
            });
        });

        const [ valueForm ] = result.current;
        // console.log(valueForm);
        // Asegurarse que solo cambio Elena
        expect(valueForm).toEqual( { ...initialForm, name: 'Elena' } );
    });

    // Name sigue cambiado a Valor de Elena
    test('debe de re-establecer el formulario con RESET', () => {
        // debe de ser igual al initialForm
          // Llamar al handleInputChange recibe el evento target
          const { result } = renderHook( () => useForm( initialForm ) );
          // el return del userForm es un arreglo
          const [ , handleInputChange, reset ] = result.current;
        
        //   Realizar modificación
         act( () => {
             handleInputChange({
                 target: {
                     name: 'name',
                     value: 'Elena'
                 }
             });
         });
        //  Resetear cambio, por tanto debería de quedar igual a initialForm
         reset();
 
         const [ valueForm ] = result.current;
        
         expect(valueForm).toEqual( initialForm );
    })
})
