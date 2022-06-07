import heroes, {owners} from "./data/heroes";

console.log(owners);

// find
const getHeroe = (id) => heroes.find((heroe) => heroe.id === id)
console.log(getHeroe(5));

// filter
const getHerosByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner)
console.log(getHerosByOwner('Marvel'));