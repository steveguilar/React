import { heroes, type OwnerEnum, type Hero } from "./data/heroes"

const getHeroById = (id: number): Hero => {
    const hero = heroes.find(h => h.id === id)!;
    return hero;
};

export const getHeroByOwner = (owner: OwnerEnum): Hero[] => heroes.filter(h => h.owner === owner);
