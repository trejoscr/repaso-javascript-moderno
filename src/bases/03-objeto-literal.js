// objetos literales

/* Un objeto es una colección de propiedades,
y una propiedad es una asociación entre un
nombre (o clave) y un valor. */

/* En JavaScript, un objeto es un entidad
independiente con propiedades y tipos. */

const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: '54654',
        lat: 14.54654,
        long: '-34.5456',
    }
};

//console.table(persona);

const persona2 = { ...persona};

persona2.nombre = 'peter';
persona2.apellido = 'parker';

console.log( persona );

console.log( persona2 );