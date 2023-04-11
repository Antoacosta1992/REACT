

// ARRAYS EN JAVASCRIPT [ ]

// const array = new Array( 100 );
const array = [1,2,3,4];
//EL PUSH MODIFICA EL ARREGLO PRINCIPAL
// array.push(1)
// array.push(2)
// array.push(3)
// array.push(4)

let array2 = [ ...array, 5 ];
//MAP CREA UN NUEVO ARRAY
const array3 = array2.map( function(number) {
    return number * 2;
});
//funcion callback : (fuction(number){ return number *2;})

console.log( array );
console.log( array2 );
console.log( array3 );