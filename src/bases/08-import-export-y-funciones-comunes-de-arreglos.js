//import {} from './data/heroes';
//import { heroes } from './data/heroes';

/* La sentencia import se usa para importar
funciones que han sido exportadas desde
un módulo externo. */

import { heroes } from "../data/heroes";

// const getHeroe = (id) => {
//     //return heroes.find(element => element.id === id);
//     return heroes.find((heroe) => heroe.id === id);

//     // return heroes.find((heroe) => {
//     //     if(heroe === id){
//     //         return true;
//     //     }else{
//     //         return false;
//     //     }
//     // });

// }

// find
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

//console.log(getHeroe(5));


// filter
export const getHerosByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)

//console.log(getHerosByOwner('Marvel'));