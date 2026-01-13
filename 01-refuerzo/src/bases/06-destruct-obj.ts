interface Animal {
    name: string;
    breed: string;
    kind: string; 
}

const animal: Animal = {
    name: 'Firulais',
    breed: 'Labrador',
    kind: 'Dog'
}

const useContext = ({name, breed, kind}: Animal) => {
    return {
        name,
        breed,
        kind,
        owner: {
            name,
            age : 30
        }
    }
}

const { kind } = useContext(animal);    
    
console.log(kind);

const miFuncion = ()  =>(
    {
        "uid": 'AF2e-e2d2-DF3d-23g4',
        "username" : "Steve",
        "parameter": "param"
    }
)

const destructuracion = ({username, uid}: {username: string, uid: string}) => {
    console.log(username, uid);
}