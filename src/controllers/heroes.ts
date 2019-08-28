
import * as service from '../services/heroes'
import { Context } from 'koa';
import { IHeroRequest } from '../interfaces/hero';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};

export const save = async (ctx: Context, next: () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.addhero(payload);
    await next();
};

export const update = async (ctx: Context, next: () => void) => {
    const payload: IHeroRequest = ctx.request.body;
    ctx.state.data = await service.updatehero(payload);
    await next();
};

export const deleteHero = async (ctx: Context, next: () => void) => {
    const id: number = ctx.query.id;
    ctx.state.data = await service.deletehero(id);
    await next();
};

/*

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await services.getAll();
    await next();
};

export const getById = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.getById(id);
    await next();
};

export const addHero = async (ctx: Context, next: () => void) => {
    const hero = {
        name: ctx.request.body.name
    };
    ctx.state.data = await services.addHero(hero);
    await next();
};

export const updateHero = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    const hero = {
        name: ctx.request.body.name
    };
    ctx.state.data = await services.updateHero(id, hero);
    await next();
};

export const deleteHero = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.softDelete(id);
    await next();
};

*/