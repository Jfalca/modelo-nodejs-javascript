import { Router } from 'express';

import Hello from './index';

const routes = new Router();

routes.get('/teste', Hello.index);

export default routes;
