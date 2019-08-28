import { Users } from './../entities/users'

import { getRepository } from 'typeorm'

export const getAll = async () => {
    return getRepository(Users).find({
        where: {
            isActive: true
        },
    });
}

export const findUserByEmail = async (email: string) => {
    return getRepository(Users).findOneOrFail({
        where: {
            email: email
        },
    });
}

export const getById = async (id: number) => {
    return getRepository(Users).findOne({ id });
}

export const getByEmail = async (email: string) => {
    return getRepository(Users).findOne({ email });
}

export const insert = async (user: Users) => {
    return getRepository(Users).save(user);
}

export const update = async (id: number, users: Partial<Users>) => {
    return getRepository(Users).update({ id }, users);
}

export const hardDelete = async (id: number) => {
    return getRepository(Users).delete({ id });
}