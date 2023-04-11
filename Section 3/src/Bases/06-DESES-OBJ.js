// Desestructuración
// Asignación Desestructurante
const person = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'soldier'
  };
  
   //const { age, key, name1, } = person;
  
   //console.log( name1 );
   //console.log( age );
   //console.log( key );
  
   const usContext = ({ clave, nombre1, edad, rango = 'Capitán' }) => {
  
    //console.log( name, age, range );
   
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
          lat: 14.1232,
          lng: -12.3232
      }
  }
  
  }
  
  const { nombreClave, anios, latlng: { lat, lng } } = usContext( person );
  
  console.log(nombreClave, anios);
  console.log( lat, lng );

