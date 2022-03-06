import { PublicationsRepository } from '../../Repositories/implementations/PublicationsRepository';
import { CreatePublicationController } from './CreatePublicationController';
import { CreatePublicationUseCase } from './CreatePublicationUseCase';

const publicationsRepository = PublicationsRepository.getInstance();
const createPublicationUseCase = new CreatePublicationUseCase(
  publicationsRepository,
);
const createPublicationController = new CreatePublicationController(
  createPublicationUseCase,
);

export { createPublicationController };
