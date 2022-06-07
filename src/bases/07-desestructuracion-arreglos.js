// desestructuración de arreglos

const personajes = ['goku', 'vegeta', 'trunks']
const [ , , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
    return ['ABC' , 123];
}

const [letras, nuemeros] = retornaArreglo();

console.log(letras, nuemeros);


// tarea
// 1. el primer valor del arr se llamara nombre
// 2. la segunda se llamara setnombre

const userState = (valor) => {
    return [valor, ()=>{console.log('hola mundo')}];
}

//const arr = userState('goku');

const [nombre, setnombre] = userState('goku');

console.log(nombre);

setnombre();

