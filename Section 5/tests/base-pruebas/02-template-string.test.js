//NO se pueden hacer pruebas de algo que NO esta siendo exportado.
import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Prueba 02-template-string', () =>{

    test('getSaludo debe retornar "Hola Antonela"', ()=>{

        const name = 'Antonela';
        const message = getSaludo ( name );

        expect ( message ).toBe(`Hola ${name}`)

    });
});
