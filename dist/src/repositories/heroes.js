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
const heroes_1 = require("./../entities/heroes");
const typeorm_1 = require("typeorm");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(heroes_1.Heroes).find({
        where: {
            isActive: true
        }
    });
});
exports.save = (hero) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(heroes_1.Heroes).save(hero);
});
exports.update = (hero) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(heroes_1.Heroes).save(hero);
});
exports.deleteHero = (id) => __awaiter(this, void 0, void 0, function* () {
    return typeorm_1.getRepository(heroes_1.Heroes).delete(id);
});
//# sourceMappingURL=heroes.js.map