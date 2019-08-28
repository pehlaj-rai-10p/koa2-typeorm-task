import { Users } from './../entities/users';
export declare const getAll: () => Promise<Users[]>;
export declare const getById: (id: number) => Promise<Users | undefined>;
export declare const insert: (user: Users) => Promise<import("typeorm").InsertResult>;
export declare const update: (id: number, users: Partial<Users>) => Promise<import("typeorm").UpdateResult>;
export declare const hardDelete: (id: number) => Promise<import("typeorm").DeleteResult>;
