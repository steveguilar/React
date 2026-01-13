function hola(): string {
    return "Hola Mundo";
}

console.log(hola());

let miFuncion = (a: string)  =>(
    {
        "uid": 'AF2e-e2d2-DF3d-23g4',
        "username" : "Steve",
        "parameter": a
    }
)


const resultado = (val: string) => `Hola ${val}`;

console.log(resultado("hola mundo"));
console.log(miFuncion("Hola"));

