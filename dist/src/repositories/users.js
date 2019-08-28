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
const users_1 = require("./../entities/users");
const typeorm_1 = require("typeorm");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(users_1.Users).find({ isActive: true });
});
exports.getById = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(users_1.Users).findOne({ id });
});
exports.insert = (user) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(users_1.Users).insert(user);
});
exports.update = (id, users) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(users_1.Users).update({ id }, users);
});
exports.hardDelete = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(users_1.Users).delete({ id });
});
//# sourceMappingURL=users.js.map