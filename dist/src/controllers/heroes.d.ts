import { Context } from 'koa';
export declare const getAll: (ctx: Context, next: () => void) => Promise<void>;
export declare const save: (ctx: Context, next: () => void) => Promise<void>;
export declare const update: (ctx: Context, next: () => void) => Promise<void>;
export declare const deleteHero: (ctx: Context, next: () => void) => Promise<void>;
