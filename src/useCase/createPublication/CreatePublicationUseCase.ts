import { PublicationsRepository } from '../../repositories/implementations/PublicationsRepository';

interface IRequest {
  text: string;
  image: string;
}

class CreatePublicationUseCase {
  constructor(private publicationsRepository: PublicationsRepository) {}

  execute({ text, image }: IRequest) {
    const posts = this.publicationsRepository.create({ text, image });

    return posts;
  }
}

export { CreatePublicationUseCase };
