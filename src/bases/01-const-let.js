// variables y constantes

/*variables: Una variable es un contenedor para
un valor, como un número que podríamos usar en
una suma, o una cadena que podríamos usar como
parte de una oración. Pero una cosa especial
acerca de las variables es que los valores que
contienen pueden cambiar. */

/*Let: let te permite declarar variables
limitando su alcance (scope) al bloque,
declaración, o expresión donde se está usando. a
diferencia de la palabra clave var
la cual define una variable global o local
en una función sin importar el ámbito del bloque.
La otra diferencia entre var y let
es que este último se inicializa a un valor
sólo cuando un analizador lo evalúa. */

/*Const: Las variables constantes presentan un
ámbito de bloque (block scope) tal y como lo
hacen las variables definidas usando la
instrucción let, con la particularidad de
que el valor de una constante no puede
cambiarse a través de la reasignación.
Las constantes no se pueden redeclarar.*/


const nombre = 'anddres';
const apellido = 'molina';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var no se debe usar
if (true){
    const nombre = 'dogy';

    let valorDado = 6;
    console.log(nombre);
}

console.log(valorDado);
