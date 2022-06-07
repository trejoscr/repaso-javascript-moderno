// promesas

/* El objeto Promise (Promesa) es usado para
computaciones asíncronas.
Una promesa representa un valor que
puede estar disponible ahora, en el futuro,
o nunca. */

import { getHeroeById } from "./bases/08-import-export-y-funciones-comunes-de-arreglos";

/* const promesa = new Promise((resolve, reject) => {

   setTimeout(() => {
      const heroe = getHeroeById(2);
      resolve(heroe);

      //reject('error not found');

   }, 2000);


});

promesa.then((heroe) => {
  console.log('heroe', heroe);
})
.catch(err => console.warn(err)); */


const getHeoreByIdAsync = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
       const heroe = getHeroeById(id);

       if(heroe){
        resolve(heroe); 
       }else{
        reject('heroe no existe');
       }
        
    }, 2000);
  
  });

}

/* getHeoreByIdAsync(1)
.then(heroe => console.log('heroe', heroe))
.catch(err => console.warn(err)); */

getHeoreByIdAsync(10)
.then(console.log)
.catch(console.warn);