// import { heroes } from './Data/heroes';
// import { heroes } from './Data/heroes';
// import heroes, { owners } from '../Data/heroes';
import heroes from "../Data/heroes";
// console.log( owners );

//Si heroe es exactamente === igual al id.
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

// console.log( getHeroesByOwner('Marvel') );
