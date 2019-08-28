import * as joi from 'joi'
import * as repo from '../repositories/heroes'
import { IHeroRequest } from '../interfaces/hero';
import { Heroes } from '../entities/heroes';

export const getAll = async() => {
    return repo.getAll();
};

export const addhero = async (hero: IHeroRequest) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    });
    const toSaveHero = new Heroes();
    toSaveHero.name = hero.name;
    return repo.save(toSaveHero);
};

export const updatehero = async (hero: IHeroRequest) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    }, { allowUnknown: true});
    const toSaveHero = new Heroes();
    toSaveHero.id = hero.id;
    toSaveHero.name = hero.name;
    return repo.save(toSaveHero);
};

export const deletehero = async (id: number) => {
    return repo.deleteHero(id);
};


/*
import * as boom from 'boom';
import * as joi from 'joi';
import * as heroesRepo from '../repositories/heroes';
import { Heroe } from '../entities/heroes';
import { IHeroRequest } from '../interfaces/hero';

export const getAll = async () => {
    return heroesRepo.getAll();
};

export const getById = async (id: number) => {
    const hero = await heroesRepo.getById(id);
    if (!hero) {
        boom.badRequest('Invalid id');
    }
    return hero;
};

export const addHero = async (payload: IHeroRequest) => {
    await joi.validate(payload, {
        name: joi.string().required()
    });
    const hero = new Heroe();
    hero.name = payload.name;
    const savedHero = await heroesRepo.insert(hero);
    return savedHero[0];
};

export const updateHero = async (id: number, payload: IHeroRequest) => {
    await joi.validate({ ...payload, id }, {
        id: joi.number().required(),
        name: joi.string().required()
    });
    await getById(id);
    const savedHero = await heroesRepo.update(id, payload);
    return savedHero[0];
};

export const softDelete = async (id: number) => {
    const hero = await getById(id);
    await heroesRepo.update(id, { isDeleted: true });
    return { success: true };
};

export const hardDelete = async (id: number) => {
    const hero = await getById(id);
    await heroesRepo.hardDelete(id);
    return { success: true };
};

*/