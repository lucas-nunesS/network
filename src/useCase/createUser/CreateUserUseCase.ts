import { hash } from 'bcrypt';

import { IUserRepository } from '../../repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({ name, email, password }: IRequest) {
    const emailAlreadyExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await hash(password, 8);

    this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });
  }
}

export { CreateUserUseCase };
