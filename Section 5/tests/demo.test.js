//Titulo para la prueba,se pueden crear varios en el mismo pero no es aconsejable
describe('Pruebas en <DemoComponent/>', () =>{
    
    
    test('Esta prueba no debe fallar', ()=> {
        //1.INICIALIZANDO
         const message1 = 'Hola mundo';
         //2.ESTIMULO O ACCION
         const message2 = message1.trim();
         //3.OBSERVAR EL COMPORTAMIENTO... esperando.
         //expect( message1 ).toBe( message2 );}
         expect( message1 ).toBe( message2 );
        
        });

});
//primera prueba en Jest.