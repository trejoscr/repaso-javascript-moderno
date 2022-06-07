// funciones js

/* Una función en JavaScript es similar a un
procedimiento — un conjunto de instrucciones
que realiza una tarea o calcula un valor,
pero para que un procedimiento califique como
función, debe tomar alguna entrada y devolver
una salida donde hay alguna relación obvia
entre la entrada y la salida.  */

//const saludar =  function(nombre){
  //  return `hola, ${ nombre }`;
//}

const saludar2 =  (nombre) => {
    return `hola, ${ nombre }`;
}

const saludar3 =  (nombre) => `hola, ${ nombre }`;

const saludar4 =  () => `hola mundo`;

//console.log(saludar('goku'));

console.log(saludar2('trunks'));
console.log(saludar3('trunks'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'dogy132',
});

const user = getUser();

console.log(user);

// tarea

// 1. transformar a una funcion de flecha
// 2. tiene que retornar un objeto implicito (es el que va en parentesis)
// 3. pruebas

/* function getUsuarioActivo(nombre){
    return{
        uid: 'ABC456',
        username: nombre,
    }
} */

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('anddresMT');

console.log(usuarioActivo);