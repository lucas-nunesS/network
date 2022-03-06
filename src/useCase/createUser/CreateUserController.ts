import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const user = this.createUserUseCase.execute({ name, email, password });

    return response.status(201).json({ user });
  }
}

export { CreateUserController };
