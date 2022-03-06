import { Router } from 'express';
import { createPublicationController } from '../useCase/createPublication';

const publicationsRoutes = Router();

publicationsRoutes.post('/', (request, response) => {
  createPublicationController.handle(request, response);
});

export { publicationsRoutes };
