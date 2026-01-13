const myPromise = new Promise( (resolve, reject) => 
{
    setTimeout( () => {
       // resolve('Promesa cumplida');
        reject('Promesa rechazada');
    }, 3000);
});

myPromise.then( (response) => {
    console.log(response);
});
myPromise.catch( (error) => {
    console.warn('Error en la promesa: ', error);
});
myPromise.finally( () => {
    console.log('La promesa ha finalizado');
});