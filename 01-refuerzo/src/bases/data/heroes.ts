//type Owner = 'DC' | 'Marvel';
//enum OwnerEnum {
//    DC = 'DC',
//    Marvel = 'Marvel'
//}


export const OwnerEnum = { DC: 'DC', Marvel: 'Marvel' } as const;
export type OwnerEnum = typeof OwnerEnum[keyof typeof OwnerEnum];


export interface Hero {
    id: number;
    name: string;
    owner: OwnerEnum;
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: OwnerEnum.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: OwnerEnum.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: OwnerEnum.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: OwnerEnum.Marvel,
  },
  {
    id: 6,
    name: 'Thor',
    owner: OwnerEnum.Marvel,
  }
];