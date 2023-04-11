const persona = {
  nombre: 'John',
  apellido: 'Snow',
  edad: 45,
  direccion: {
      ciudad: 'Invernalia',
      zip: 57678676,
      lat: 16.3232,
      lng: 32.9233321
  }
};

// console.table( persona );
//(...) Clon del objeto
const persona2 = { ...persona };
persona2.nombre = 'Laura';


console.log( persona );
console.log( persona2 )