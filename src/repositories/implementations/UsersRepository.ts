import { getRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';
import { ICreateUserDTO, IUserRepository } from '../IUsersRepository';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}

export { UsersRepository };
