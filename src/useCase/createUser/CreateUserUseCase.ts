import { hash } from 'bcrypt';

import { IUserRepository } from 'Repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUserRepository) {}

  execute({ name, email, password }: IRequest) {
    // const hashedPassword = hash(password, 8);

    const emailAlreadyExists = this.usersRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new Error('Email already exists');
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export { CreateUserUseCase };
