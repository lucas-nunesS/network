import { Request, Response } from 'express';
import { CreatePublicationUseCase } from './CreatePublicationUseCase';

class CreatePublicationController {
  constructor(private createPublicationUseCase: CreatePublicationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { text, image } = request.body;

    const posts = this.createPublicationUseCase.execute({ text, image });

    return response.status(201).json(posts);
  }
}

export { CreatePublicationController };
