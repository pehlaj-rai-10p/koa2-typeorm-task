"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Router = require("koa-router");
const ctrl = require("../controllers/heroes");
const compose = require("koa-compose");
const router = new Router({
    prefix: `${config_1.default.api.baseURL}/heroes`,
});
router.get('/', ctrl.getAll);
router.post('/', ctrl.save);
router.put('/', ctrl.update);
router.delete('/', ctrl.deleteHero);
const routes = router.routes();
exports.default = compose([routes]);
//# sourceMappingURL=heroes.js.map