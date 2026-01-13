const names: string[] = ['Ironman', 'Spiderman', 'Thor'];

const [,,thor] = names;

console.log({ thor });

const returnArrayOrNumbers = () => {
  return ["asd", 233] as const;
}

const [letters, numbers] = returnArrayOrNumbers();

console.log(numbers+100, letters);