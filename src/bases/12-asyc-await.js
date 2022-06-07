// Asyc - Await

/* La declaración de función async define
una función asíncrona, la cual devuelve
un objeto AsyncFunction. */

/* Cuando se llama a una función async,
esta devuelve un elemento Promise */

/* Una función async puede contener una expresión
await, la cual pausa la ejecución de la función
asíncrona y espera la resolución de la Promise
pasada y, a continuación, reanuda la ejecución
de la función async y devuelve el valor resuelto. */

const getImagen = async() => {
  //return 'eefrerfe.com';

  try {

    const apiKey = 'x9aVkQmy0lqfOqhv0fVsd69N1gQp3Hfh';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    
    } catch (error) {
    console.error(error);
  }
}

getImagen();