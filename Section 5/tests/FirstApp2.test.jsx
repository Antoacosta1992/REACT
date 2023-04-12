import { render, screen } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';
import React from "react";

//screen = limpiezas automaticas
describe('Pruebas en <FirstApp />', () => {
    const title = 'Hola, soy Anto';
    const subTitle= 'Soy, lo que siento'

    test('Debe hacer match con Snapshot', () => { 
    
        const {container} = render( <FirstApp title={title}/>);
        expect (container).toMatchSnapshot();
     });


     test('Debe mostrar el mensaje "Hola, soy Anto"', () => { 
        render( <FirstApp title={title}/>);
        expect( screen.getByText(title)).toBeTruthy();
        //screen.debug();   para ver el objeto
      });

      test('debe de mostrar el titulo en un h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );

      });

      test('debe de mostrar el subtitulo enviado por props', () => {
        
        render( 
            <FirstApp 
                title={ title }
                subTitle={ subTitle }
            />  
        );

        expect( screen.getAllByText(subTitle).length ).toBe(2);

    });





    });
