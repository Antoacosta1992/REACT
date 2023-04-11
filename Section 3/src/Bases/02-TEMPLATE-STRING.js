//TEMPLATE STRING

const nombre   = 'Antonela';
const apellido = 'Acosta';


// const nombreCompleto = nombre + ' ' + apellido;
//concatenación ``
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log( nombreCompleto );


function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );