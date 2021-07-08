import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHokk } from '../../../components/03-examples/MultipleCustomHokk';
import { useFetch } from '../../../hooks/useFetch';
import { useCounterArgumento } from '../../../hooks/useCounter';

// jest.mock: cuando yo vaya a utilizar en este archivo, entonces en lugar de usar el useFetch, vamos a utlizar una implementación que me invento del useFetch
jest.mock( '../../../hooks/useFetch');
jest.mock( '../../../hooks/useCounter');
//  TypeError: Cannot destructure property 'loading' of '(0 , _useFetch.useFetch)(...)' as it is undefined.
// Es un error del componente no de la prueba



// Renderizar de manera condicional
describe('Pruebas en ', () => {

    useCounterArgumento.mockReturnValue( {
        state1: 1,
        increment1: () => {}
    });

    test('debe de mostrar snapshot por defecto ', () => {

        useFetch.mockReturnValue( {
            data:null,
            loading:true,
            error:null
        });

        const wrapper = shallow(<MultipleCustomHokk />);
        expect(wrapper).toMatchSnapshot();
    });

    // Mandar info de prueba hacia un Custom Hook
    test('debe de mostrar la info real', () => {
        // useFetch Interesa la info que retorna
        // un Mook, es decir, no interesa la implementación. Interesa los resultados
        useFetch.mockReturnValue( {
            data: [{
                author: 'Humberto',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHokk />);
        // console.log( wrapper.html());
        // <div><h4>Breaking Bad Quotes</h4><blockquote class="blockquote text-right"><p class="mb-0">Hola Mundo</p><footer class="blockquote-footer">Humberto</footer></blockquote><button class="btn btn-primary">Siguiente quote</button></div>

        // Busquedas en el wrapper por una clase alert. No debería de existir si tengo información
        expect( wrapper.find('.alert').exists() ).toBe(false);
        // se espera la clase .mb-0 el texto sea Hola Mundo
        expect( wrapper.find('.mb-0').text().trim() ).toBe('Hola Mundo');
        expect( wrapper.find('footer').text().trim() ).toBe('Humberto');
    })
    
})
