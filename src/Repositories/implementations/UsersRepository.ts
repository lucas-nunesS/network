import { User } from '../../entities/User';
import { ICreateUserDTO, IUserRepository } from '../IUsersRepository';

class UsersRepository implements IUserRepository {
  private users: User[];

  public static INSTANCE: UsersRepository;

  constructor() {
    this.users = [];
  }

  public static getInstace(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email, password }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push(user);

    return user;
  }
  findByEmail(email: string): User {
    const user = this.users.find(user => user.email === email);

    return user;
  }
}

export { UsersRepository };
