// operador condicional ternario

/* El operador condicional (ternario) es el
único operador en JavaScript que tiene
tres operandos. Este operador se usa con
frecuencia como atajo para la instrucción if. */

const activo = true;

/* let mensaje = '';

if (activo) {
  mensaje = 'activo'
} else {
  mensaje = 'inactivo'
} */

//const mensaje = (activo) ? 'Activo' : 'Inactivo';
//const mensaje = (!activo) ? 'Activo' : null;

const mensaje = activo && 'activo';

console.log(mensaje);