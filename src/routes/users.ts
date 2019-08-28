import config from '../../config'
import * as Router from 'koa-router'
import * as ctrl from '../controllers/users'
import { checkJwt } from "../middlewares/checkJwt";
import * as compose from 'koa-compose'

const router = new Router({
  prefix: `${config.api.baseURL}/users`,
});

//Login
router.post('/login', ctrl.loginUser);

//Sign Up
router.post('/register', ctrl.addUser);

//CRUD operations with JWT validations in middleware

//Get
router.get('/', checkJwt, ctrl.getAll);

//Get By ID
router.get('/:id', checkJwt, ctrl.getById);

//UPDATE
router.put('/:id', checkJwt, ctrl.updateUser);

//DELETE
router.delete('/:id', checkJwt, ctrl.deleteUser);

const routes = router.routes();
export default compose([routes]);