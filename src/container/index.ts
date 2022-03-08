import { UsersRepository } from 'Repositories/implementations/UsersRepository';
import { IUserRepository } from 'Repositories/IUsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
