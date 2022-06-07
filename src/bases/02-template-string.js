// templates strings

/*Las plantillas literales son cadenas literales
que habilitan el uso de expresiones incrustadas.
Con ellas, es posible utilizar cadenas de
caracteres de más de una línea, y
funcionalidades de interpolación de cadenas
de caracteres.*/

const nombre = 'andres';
const apellido = 'molina';

//const nombreCompleto = nombre + ' ' + apellido;

const nombreCompleto = `${ nombre } ${ apellido } ${ 1+2 }`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( apellido ) } `);