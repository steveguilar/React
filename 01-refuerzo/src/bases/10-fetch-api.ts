import type { GiphyResponse } from "./data/giphyResponse";


const API_KEY = "785yEzdyseid2czfiWHAr3cZ14hgfHHL";
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const PARAMS = "&tag=&rating=g";

const request = fetch(API_URL + PARAMS);

request.then((response) => response.json()
        .then(( { data }  : GiphyResponse) => {
        const url = data.images.original.url;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
)
    .catch((error) => {
        console.warn('Error al convertir la respuesta a JSON: ', error);
    }).finally(() => {
        console.log('La conversión a JSON ha finalizado');
    })

request.catch((error) => {
    console.warn('Error al hacer la petición: ', error);
});
request.finally(() => {
    console.log('La petición ha finalizado');
});