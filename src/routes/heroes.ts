import config from '../../config'
import * as Router from 'koa-router'
import * as ctrl from '../controllers/heroes'
import * as compose from 'koa-compose'

const router = new Router({
    prefix: `${config.api.baseURL}/heroes`,
});

router.get('/', ctrl.getAll);

router.post('/', ctrl.save);

router.put('/', ctrl.update);

router.delete('/', ctrl.deleteHero);

const routes = router.routes();

export default compose([routes]);


/*

import * as Router from 'koa-router';
import * as compose from 'koa-compose';
import config from '../../config/index';
import * as ctrl from '../controllers/heroes';

const router = new Router({
  prefix: `${config.api.baseURL}/heroes`,
});

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.addHero);

router.put('/:id', ctrl.updateHero);

router.delete('/:id', ctrl.deleteHero);

const routes = router.routes();
export default compose([routes]);

*/