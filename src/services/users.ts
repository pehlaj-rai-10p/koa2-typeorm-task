import * as joi from 'joi';
import * as boom from 'boom';
import * as usersRepo from '../repositories/users'
import { IUserRequest } from '../interfaces/user';
import { Users } from '../entities/users';
import * as jwt from 'jsonwebtoken';
import config from "../../config";
import * as bcrypt from 'bcryptjs';

export const getAll = async() => {
    return usersRepo.getAll();
};

export const getById = async (id: number) => {
    const user = await usersRepo.getById(id);
    if (!user) {
        boom.badRequest('Invalid id');
    }
    return user;
};

export const loginUser = async (payload: IUserRequest) => {
    await joi.validate(payload, {
        email: joi.string().required(),
        password: joi.string().required(),
    }, { allowUnknown: true});

    try {

        var result = await usersRepo.findUserByEmail(payload.email); //This will fail if user not found b/c of findOneOrFail users repo
        
        if (result) {

            var user = result as Users;

            if (user.checkIfUnencryptedPasswordIsValid(payload.password)) {
                const token = jwt.sign(payload.password, config.jwtSecret);
                return token;
            }
        }
    } catch (error) {

        return boom.unauthorized(`Invalid Credentials: ${error}`);
    }
    
    return boom.unauthorized('Invalid Credentials');

};

export const addUser = async (payload: IUserRequest) => {
    await joi.validate(payload, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    }, { allowUnknown: true});
    const newUser = new Users();
    newUser.name = payload.name;
    newUser.email = payload.email;
    newUser.password = bcrypt.hashSync(payload.password, 8);
    return usersRepo.insert(newUser);
};

export const updateUser = async (id: number, payload: IUserRequest) => {
    await joi.validate({ ...payload, id }, {
        id: joi.number().required(),
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    }, { allowUnknown: true});
    return usersRepo.update(id, payload);
};

export const softDelete = async (id: number) => {
    const user = await getById(id);
    await usersRepo.update(id, { isDeleted: true });
    return { success: true };
};

export const hardDelete = async (id: number) => {
    const user = await getById(id);
    await usersRepo.hardDelete(id);
    return { success: true };
};