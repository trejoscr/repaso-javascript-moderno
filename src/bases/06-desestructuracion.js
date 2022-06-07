// desestructuración
// asignacion desestructurante

/* Es una expresión de JavaScript que permite
desempacar valores de arreglos o propiedades
de objetos en distintas variables. */

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'iroman',
    rango: 'soldado',
};

/* console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave); */

//const { nombre, edad, clave } = persona;
/* console.log(nombre);
console.log(edad);
console.log(clave); */

const userContext = ({ clave, nombre, edad, rango = 'capitan' }) => {
    //console.log(usuario);
    //console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.564564,
            long: -34.4564654,
        }
    }

}

//const avenger = userContext(persona);
//console.log(avenger);

// desestructuración
const {nombreClave, anios, latlng:{lat, long}} = userContext(persona);

console.log(nombreClave, anios);

console.log(lat, long);