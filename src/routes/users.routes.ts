import { Router } from 'express';
import { createUserController } from '../useCase/createUser/';

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
  createUserController.handle(request, response);
});

export { usersRoutes };
