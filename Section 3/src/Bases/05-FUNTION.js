
// fUNCIONES 
// const greeting = function( name ) {
//     return `Hello, ${ name }`;
// }

const greeting2 = ( name ) => {
  return `Hello, ${ name }`;
}
//Si quiero tranformas la funcion anterior en una funcion de flecha:
const greeting3 = (name) => `Hello, ${ name }`;
const greeting4 = () => `Hello World`;

// console.log( saludar('Goku') )

console.log( greeting2('Vegeta') );
console.log( greeting3('Goku') );
console.log( greeting4() );

// CON LOS PARENTESIS LO REGRESO. EL RUTURN ES UN OBJETO
const getUser = () => ({
      uid: 'ABC123',
      username: 'la_biblioteca2324'
});


const user = getUser();
console.log(user);


const getUserActive = ( name ) =>({
  uid: 'ABC567',
  username: name
})

const userActive = getUserActive('Antonela');
console.log( userActive );