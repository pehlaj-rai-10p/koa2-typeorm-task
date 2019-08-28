import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const getById: (ctx: Context, next: () => void) => Promise<void>;
export declare const addUser: (ctx: Context, next: () => void) => Promise<void>;
export declare const updateUser: (ctx: Context, next: () => void) => Promise<void>;
export declare const deleteUser: (ctx: Context, next: () => void) => Promise<void>;
