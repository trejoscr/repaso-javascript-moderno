// Fetch API

/* La API Fetch proporciona una interfaz para
recuperar recursos */ 

const apiKey = 'x9aVkQmy0lqfOqhv0fVsd69N1gQp3Hfh';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// promesas en cadena
peticion
.then(resp => resp.json())
.then(({data}) => {
  //console.log(data.images.original.url);
  const {url} = data.images.original;
  
  const img = document.createElement('img');
  img.src = url;

  document.body.append(img);
})
.catch(console.warn);