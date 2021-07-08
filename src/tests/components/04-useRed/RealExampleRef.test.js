import React from 'react';
import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en <RealExampleRef />', () => {
    // <RealExampleRef argumento= proveer/>
    const wrapper = shallow(<RealExampleRef />);

    test('debe mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('MultipleCustomHokk').exists() ).toBe(false);
    });

    test('debe de mostrar el componente <MultipleCustomHokk />', () => {
        // Simular Click
        wrapper.find('button').simulate('click');
        expect( wrapper.find('MultipleCustomHokk').exists() ).toBe(true);
    });
    
    
})
