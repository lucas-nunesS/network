import { Publication } from '../../entities/Publication';
import {
  ICreatePublicationDTO,
  IPublicationsRepository,
} from '../IPublicationsRepository';

class PublicationsRepository implements IPublicationsRepository {
  private posts: Publication[];

  public static INSTACE: PublicationsRepository;

  constructor() {
    this.posts = [];
  }

  public static getInstance(): PublicationsRepository {
    if (!PublicationsRepository.INSTACE) {
      PublicationsRepository.INSTACE = new PublicationsRepository();
    }

    return PublicationsRepository.INSTACE;
  }

  create({ text, image }: ICreatePublicationDTO): Publication[] {
    const post = new Publication();

    Object.assign(post, {
      text,
      image,
      created_at: new Date(),
    });

    this.posts.push(post);

    return this.posts;
  }
}

export { PublicationsRepository };
