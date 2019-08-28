import { Heroes } from './../entities/heroes'

import { getRepository } from 'typeorm'

export const getAll = async () => {
    return getRepository(Heroes).find({
        where:{
            isActive: true
        }
    });
};

export const save = async(hero: Heroes) => {
    return getRepository(Heroes).save(hero);
    //return getRepository(Heroes).insert(hero);
};

export const update = async(hero: Heroes) => {
    return getRepository(Heroes).save(hero);
};

export const deleteHero = async(id: number) => {
    return getRepository(Heroes).delete(id);
};

/*
export const getAll = async () => {
    return getRepository(Heroe).find({ isActive: true });
}

export const getById = async (id: number) => {
    return getRepository(Heroe).findOne({ id });
}

export const insert = async (heroe: Heroe) => {
    return getRepository(Heroe).insert(heroe);
}

export const update = async (id: number, heroes: Partial<Heroe>) => {
    return getRepository(Heroe).update({ id }, heroes);
}

export const hardDelete = async (id: number) => {
    return getRepository(Heroe).delete({ id });
}
*/