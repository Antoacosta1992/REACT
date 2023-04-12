import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import React from "react";


describe('Pruebas en <FirstApp />', () => {
    
    // test('debe de hacer match con el snapshot', () => {
        
    //     const title = 'Hola, Soy Goku';
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();

    // })

    test('debe mostrar el título en un h1', ()=>{
        const title = 'Hola, Soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect (getByText(title)).toBeTruthy();

        //const h1= container.querySelector('h1');
        //expect(h1.innerHTML).toContain(title)
        expect(getByTestId('test-title').innerHTML).toContain(title)
    });

    test('Debe mostrar el subtitulo enviando por props',()=>{
        const title = 'Hola, Soy Goku';
        const subTitle = 'La unión hace la fuerza';
        const {getAllByText} = render( <FirstApp title={ title } subTitle={subTitle} /> );
        expect (getAllByText(subTitle).length).toBe(2);
    });

});
