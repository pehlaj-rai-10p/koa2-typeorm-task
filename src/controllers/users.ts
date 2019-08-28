import * as services from '../services/users'
import { Context } from 'koa';
import { IUserRequest } from '../interfaces/user';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await services.getAll();
    await next();
};

export const getById = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.getById(id);
    await next();
};

export const loginUser = async (ctx: Context, next: () => void) => {
    const user: IUserRequest = ctx.request.body;
    ctx.state.data = await services.loginUser(user);
    await next();
};

export const addUser = async (ctx: Context, next: () => void) => {
    const user: IUserRequest = ctx.request.body;
    ctx.state.data = await services.addUser(user);
    await next();
};

export const updateUser = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    const user: IUserRequest = ctx.request.body;
    ctx.state.data = await services.updateUser(id, user);
    await next();
};

export const deleteUser = async (ctx: Context, next: () => void) => {
    const id: number = ctx.params.id;
    ctx.state.data = await services.hardDelete(id);
    await next();
};
