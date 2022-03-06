import { User } from 'entities/User';

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  create({ name, email, password }: ICreateUserDTO): User;
  findByEmail(email: string): User;
}

export { IUserRepository, ICreateUserDTO };