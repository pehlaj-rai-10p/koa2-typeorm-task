import { IUserRequest } from '../interfaces/user';
import { Users } from '../entities/users';
export declare const getAll: () => Promise<Users[]>;
export declare const getById: (id: number) => Promise<Users | undefined>;
export declare const addUser: (payload: IUserRequest) => Promise<any>;
export declare const updateUser: (id: number, payload: IUserRequest) => Promise<any>;
export declare const softDelete: (id: number) => Promise<{
    success: boolean;
}>;
export declare const hardDelete: (id: number) => Promise<{
    success: boolean;
}>;
