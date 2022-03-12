import { UsersRepository } from '../repositories/implementations/UsersRepository';
import { IUserRepository } from '../repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
