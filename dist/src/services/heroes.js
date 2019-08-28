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
const repo = require("../repositories/heroes");
const heroes_1 = require("../entities/heroes");
exports.getAll = () => __awaiter(this, void 0, void 0, function* () {
    return repo.getAll();
});
exports.addhero = (hero) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(hero, {
        name: joi.string().required(),
    });
    const toSaveHero = new heroes_1.Heroes();
    toSaveHero.name = hero.name;
    return repo.save(toSaveHero);
});
exports.updatehero = (hero) => __awaiter(this, void 0, void 0, function* () {
    yield joi.validate(hero, {
        name: joi.string().required(),
    }, { allowUnknown: true });
    const toSaveHero = new heroes_1.Heroes();
    toSaveHero.id = hero.id;
    toSaveHero.name = hero.name;
    return repo.save(toSaveHero);
});
exports.deletehero = (id) => __awaiter(this, void 0, void 0, function* () {
    return repo.deleteHero(id);
});
//# sourceMappingURL=heroes.js.map