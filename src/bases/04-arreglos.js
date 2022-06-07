// arreglos en javascript

/* Los arrays son objetos similares a una lista */

/* El objeto Array de JavaScript es un objeto
global que es usado en la construcción de arrays,
que son objetos tipo lista de alto nivel. */


//const arreglo = new Array(100);

const arreglo = [1, 2, 3, 4];

// no usar el push por que modifica el objeto principal
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);

let arreglo2 = [ ...arreglo, 5 ];
//arreglo2.push(5)

const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);