"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
const boom = require("boom");
const usersRepo = require("../repositories/users");
const users_1 = require("../entities/users");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return usersRepo.getAll();
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    const user = yield usersRepo.getById(id);
    if (!user) {
        boom.badRequest('Invalid id');
    }
    return user;
});
exports.addUser = (payload) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(payload, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
    }, { allowUnknown: true });
    const newUser = new users_1.Users();
    newUser.name = payload.name;
    newUser.email = payload.email;
    newUser.password = payload.password;
    const savedUser = yield usersRepo.insert(newUser);
    return savedUser[0];
});
exports.updateUser = (id, payload) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(Object.assign({}, payload, { id }), {
        id: joi.number().required(),
        name: joi.string().required(),
    });
    const savedUser = yield usersRepo.update(id, payload);
    return savedUser[0];
});
exports.softDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    const user = yield exports.getById(id);
    yield usersRepo.update(id, { isDeleted: true });
    return { success: true };
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    const user = yield exports.getById(id);
    yield usersRepo.hardDelete(id);
    return { success: true };
});
//# sourceMappingURL=users.js.map