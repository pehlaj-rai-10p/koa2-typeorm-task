"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
const Router = require("koa-router");
const ctrl = require("../controllers/users");
const compose = require("koa-compose");
const router = new Router({
    prefix: `${config_1.default.api.baseURL}/users`,
});
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.addUser);
router.put('/:id', ctrl.updateUser);
router.delete('/:id', ctrl.deleteUser);
const routes = router.routes();
exports.default = compose([routes]);
//# sourceMappingURL=users.js.map