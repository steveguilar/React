interface Person {
    name: string;
    lastName: string;
    age: number;
    address?: Address;
}
interface Address {
    street: string;
    city: string;
    country: string;
}

const person: Person = {
    name: "Steve",
    lastName: "Doe",
    age: 2,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        country: "USA"
    }
};

person.age = 26;

console.log(person);