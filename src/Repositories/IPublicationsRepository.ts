import { Publication } from 'entities/Publication';

interface ICreatePublicationDTO {
  text: string;
  image: string;
}

interface IPublicationsRepository {
  create({ text, image }: ICreatePublicationDTO): Publication[];
}

export { IPublicationsRepository, ICreatePublicationDTO };
